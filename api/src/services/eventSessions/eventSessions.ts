import type {
  QueryResolvers,
  MutationResolvers,
  EventSessionRelationResolvers,
} from 'types/graphql';

import { db } from 'src/lib/db';
import { formatDateTime } from 'src/lib/formatters';

export const eventSessions: QueryResolvers['eventSessions'] = async ({
  eventId,
  pagination,
}) => {
  const page = pagination?.page ?? 1;
  const perPage = pagination?.perPage ?? 25;

  const [sessions, count] = await db.$transaction([
    db.eventSession.findMany({
      where: { eventId },
      take: perPage,
      skip: (page - 1) * perPage,
      orderBy: { startAt: 'asc' },
      include: { event: true },
    }),
    db.eventSession.count({
      where: { eventId },
    }),
  ]);

  return {
    nodes: sessions,
    pagination: {
      page,
      perPage,
      total: count,
      totalPages: Math.max(1, Math.ceil(count / perPage)),
    },
  };
};

export const eventSession: QueryResolvers['eventSession'] = ({ id }) => {
  return db.eventSession.findUnique({
    where: { id },
    include: { event: true },
  });
};

export const createEventSession: MutationResolvers['createEventSession'] = ({
  input,
}) => {
  return db.eventSession.create({
    data: input,
    include: { event: true },
  });
};

export const updateEventSession: MutationResolvers['updateEventSession'] = ({
  id,
  input,
}) => {
  return db.eventSession.update({
    data: input,
    where: { id },
    include: { event: true },
  });
};

export const deleteEventSession: MutationResolvers['deleteEventSession'] = ({
  id,
}) => {
  return db.eventSession.delete({
    where: { id },
    include: { event: true },
  });
};

export const EventSession: EventSessionRelationResolvers = {
  formattedStartAt: (_obj, { root }) => {
    return formatDateTime(root.startAt, root.event.timezone);
  },
  formattedEndAt: (_obj, { root }) => {
    return formatDateTime(root.endAt, root.event.timezone);
  },
  formattedCreatedAt: (_obj, { root }) => {
    return formatDateTime(root.createdAt, root.event.timezone);
  },
  formattedUpdatedAt: (_obj, { root }) => {
    return formatDateTime(root.updatedAt, root.event.timezone);
  },
  event: (_obj, { root }) => {
    return db.eventSession.findUnique({ where: { id: root?.id } }).event();
  },
  speakers: (_obj, { root }) => {
    return db.eventSession.findUnique({ where: { id: root?.id } }).speakers();
  },
  registrants: (_obj, { root }) => {
    return db.eventSession
      .findUnique({ where: { id: root?.id } })
      .registrants();
  },
};
