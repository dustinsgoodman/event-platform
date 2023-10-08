import type {
  QueryResolvers,
  MutationResolvers,
  EventSpeakerRelationResolvers,
} from 'types/graphql';

import { db } from 'src/lib/db';

export const eventSpeakers: QueryResolvers['eventSpeakers'] = async ({
  eventId,
  pagination,
}) => {
  const page = pagination?.page ?? 1;
  const perPage = pagination?.perPage ?? 25;

  const [speakers, count] = await db.$transaction([
    db.eventSpeaker.findMany({
      where: { eventId },
      take: perPage,
      skip: (page - 1) * perPage,
      orderBy: { firstName: 'asc' },
      include: { event: true },
    }),
    db.eventSession.count({
      where: { eventId },
    }),
  ]);

  return {
    nodes: speakers,
    pagination: {
      page,
      perPage,
      total: count,
      totalPages: Math.max(1, Math.ceil(count / perPage)),
    },
  };
};

export const eventSpeaker: QueryResolvers['eventSpeaker'] = ({ id }) => {
  return db.eventSpeaker.findUnique({
    where: { id },
  });
};

export const createEventSpeaker: MutationResolvers['createEventSpeaker'] = ({
  input,
}) => {
  return db.eventSpeaker.create({
    data: input,
  });
};

export const updateEventSpeaker: MutationResolvers['updateEventSpeaker'] = ({
  id,
  input,
}) => {
  return db.eventSpeaker.update({
    data: input,
    where: { id },
  });
};

export const deleteEventSpeaker: MutationResolvers['deleteEventSpeaker'] = ({
  id,
}) => {
  return db.eventSpeaker.delete({
    where: { id },
  });
};

export const EventSpeaker: EventSpeakerRelationResolvers = {
  event: (_obj, { root }) => {
    return db.eventSpeaker.findUnique({ where: { id: root?.id } }).event();
  },
  sessions: (_obj, { root }) => {
    return db.eventSpeaker.findUnique({ where: { id: root?.id } }).sessions();
  },
  registrant: (_obj, { root }) => {
    return db.eventSpeaker.findUnique({ where: { id: root?.id } }).registrant();
  },
};
