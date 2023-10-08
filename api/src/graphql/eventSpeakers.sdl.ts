export const schema = gql`
  type EventSpeaker {
    id: UUID!
    firstName: String!
    lastName: String!
    fullName: String
    jobTitle: String
    company: String
    profilePicture: URL
    bio: String!
    dateOfBirth: Date!
    ipAddress: IPv4!
    language: Locale!
    createdAt: DateTime!
    updatedAt: DateTime!
    event: Event!
    sessions: [EventSession]!
    registrant: EventRegistrant
  }

  type EventSpeakerConnection {
    nodes: [EventSpeaker!]!
    pagination: Pagination!
  }

  type Query {
    eventSpeakers(
      eventId: UUID!
      pagination: PaginationInput
    ): EventSpeakerConnection! @requireAuth
    eventSpeaker(id: UUID!): EventSpeaker @requireAuth
  }

  input CreateEventSpeakerInput {
    firstName: String!
    lastName: String!
    jobTitle: String
    company: String
    profilePicture: String
    bio: String!
    dateOfBirth: DateTime!
    ipAddress: String!
    language: String!
    eventId: String!
    registrantId: String!
  }

  input UpdateEventSpeakerInput {
    firstName: String
    lastName: String
    jobTitle: String
    company: String
    profilePicture: String
    bio: String
    eventId: String
    registrantId: String
  }

  type Mutation {
    createEventSpeaker(input: CreateEventSpeakerInput!): EventSpeaker!
      @requireAuth
    updateEventSpeaker(
      id: UUID!
      input: UpdateEventSpeakerInput!
    ): EventSpeaker! @requireAuth
    deleteEventSpeaker(id: UUID!): EventSpeaker! @requireAuth
  }
`;
