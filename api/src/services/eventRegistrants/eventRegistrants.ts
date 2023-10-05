import type {
  QueryResolvers,
  MutationResolvers,
  EventRegistrantRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const eventRegistrants: QueryResolvers['eventRegistrants'] = () => {
  return db.eventRegistrant.findMany()
}

export const eventRegistrant: QueryResolvers['eventRegistrant'] = ({ id }) => {
  return db.eventRegistrant.findUnique({
    where: { id },
  })
}

export const createEventRegistrant: MutationResolvers['createEventRegistrant'] =
  ({ input }) => {
    return db.eventRegistrant.create({
      data: input,
    })
  }

export const updateEventRegistrant: MutationResolvers['updateEventRegistrant'] =
  ({ id, input }) => {
    return db.eventRegistrant.update({
      data: input,
      where: { id },
    })
  }

export const deleteEventRegistrant: MutationResolvers['deleteEventRegistrant'] =
  ({ id }) => {
    return db.eventRegistrant.delete({
      where: { id },
    })
  }

export const EventRegistrant: EventRegistrantRelationResolvers = {
  event: (_obj, { root }) => {
    return db.eventRegistrant.findUnique({ where: { id: root?.id } }).event()
  },
  sessions: (_obj, { root }) => {
    return db.eventRegistrant.findUnique({ where: { id: root?.id } }).sessions()
  },
  speaker: (_obj, { root }) => {
    return db.eventRegistrant.findUnique({ where: { id: root?.id } }).speaker()
  },
}
