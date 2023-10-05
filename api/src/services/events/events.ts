import type {
  QueryResolvers,
  MutationResolvers,
  EventRelationResolvers,
} from 'types/graphql';

import { db } from 'src/lib/db';

export const events: QueryResolvers['events'] = async ({ pagination }) => {
  const page = pagination?.page ?? 1;
  const perPage = pagination?.perPage ?? 25;

  const [events, count] = await db.$transaction([
    db.event.findMany({
      take: perPage,
      skip: (page - 1) * perPage,
      orderBy: { startAt: 'asc' },
    }),
    db.event.count(),
  ]);

  return {
    nodes: events,
    pagination: {
      page,
      perPage,
      total: count,
      totalPages: Math.max(1, Math.ceil(count / perPage)),
    },
  };
};

export const event: QueryResolvers['event'] = ({ id }) => {
  return db.event.findUnique({
    where: { id },
  });
};

export const createEvent: MutationResolvers['createEvent'] = ({ input }) => {
  return db.event.create({
    data: input,
  });
};

export const updateEvent: MutationResolvers['updateEvent'] = ({
  id,
  input,
}) => {
  return db.event.update({
    data: input,
    where: { id },
  });
};

export const deleteEvent: MutationResolvers['deleteEvent'] = ({ id }) => {
  return db.event.delete({
    where: { id },
  });
};

export const Event: EventRelationResolvers = {
  sessions: (_obj, { root }) => {
    return db.event.findUnique({ where: { id: root?.id } }).sessions();
  },
  speakers: (_obj, { root }) => {
    return db.event.findUnique({ where: { id: root?.id } }).speakers();
  },
  registrants: (_obj, { root }) => {
    return db.event.findUnique({ where: { id: root?.id } }).registrants();
  },
};
