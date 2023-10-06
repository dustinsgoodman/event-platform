export const schema = gql`
  type EventSession {
    id: UUID!
    name: String!
    description: String
    startAt: DateTime!
    endAt: DateTime!
    capacity: Int
    createdAt: DateTime!
    updatedAt: DateTime!
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
      eventId: String!
      pagination: PaginationInput
    ): EventSessionConnection! @requireAuth
    eventSession(id: String!): EventSession @requireAuth
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
      id: String!
      input: UpdateEventSessionInput!
    ): EventSession! @requireAuth
    deleteEventSession(id: String!): EventSession! @requireAuth
  }
`;
