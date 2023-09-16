import type {
  QueryResolvers,
  MutationResolvers,
  EventSessionRelationResolvers,
} from 'types/graphql';

import { db } from 'src/lib/db';

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
    }),
    db.eventSession.count(),
  ]);

  return {
    nodes: sessions,
    pagination: {
      page,
      perPage,
      total: count,
      totalPages: Math.ceil(count / perPage),
    },
  };
};

export const eventSession: QueryResolvers['eventSession'] = ({ id }) => {
  return db.eventSession.findUnique({
    where: { id },
  });
};

export const createEventSession: MutationResolvers['createEventSession'] = ({
  input,
}) => {
  return db.eventSession.create({
    data: input,
  });
};

export const updateEventSession: MutationResolvers['updateEventSession'] = ({
  id,
  input,
}) => {
  return db.eventSession.update({
    data: input,
    where: { id },
  });
};

export const deleteEventSession: MutationResolvers['deleteEventSession'] = ({
  id,
}) => {
  return db.eventSession.delete({
    where: { id },
  });
};

export const EventSession: EventSessionRelationResolvers = {
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
