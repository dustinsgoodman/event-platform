export const schema = gql`
  type EventSession {
    id: UUID!
    name: String!
    description: String
    startAt: DateTime!
    endAt: DateTime!
    formattedStartAt: String
    formattedEndAt: String
    capacity: Int
    createdAt: DateTime!
    updatedAt: DateTime!
    formattedCreatedAt: String
    formattedUpdatedAt: String
    event: Event!
    speakers: [EventSpeaker]!
    registrants: [EventRegistrant]!
  }

  type EventSessionConnection {
    nodes: [EventSession!]!
    pagination: Pagination!
  }

  type Query {
    eventSessions(
      eventId: UUID!
      pagination: PaginationInput
    ): EventSessionConnection! @requireAuth
    eventSession(id: UUID!): EventSession @requireAuth
  }

  input CreateEventSessionInput {
    name: String!
    description: String
    startAt: DateTime!
    endAt: DateTime!
    capacity: Int
    eventId: String!
  }

  input UpdateEventSessionInput {
    name: String
    description: String
    startAt: DateTime
    endAt: DateTime
    capacity: Int
    eventId: String
  }

  type Mutation {
    createEventSession(input: CreateEventSessionInput!): EventSession!
      @requireAuth
    updateEventSession(
      id: UUID!
      input: UpdateEventSessionInput!
    ): EventSession! @requireAuth
    deleteEventSession(id: UUID!): EventSession! @requireAuth
  }
`;
