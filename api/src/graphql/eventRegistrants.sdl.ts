export const schema = gql`
  type EventRegistrant {
    id: UUID!
    email: EmailAddress!
    firstName: String!
    lastName: String!
    displayName: String
    jobTitle: String
    company: String
    profilePicture: URL
    dateOfBirth: Date!
    language: Locale!
    ipAddress: IPv4!
    notes: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    cancelledAt: DateTime
    checkedInAt: DateTime
    event: Event!
    eventId: String!
    sessions: [EventSession]!
    speaker: EventSpeaker
  }

  type Query {
    eventRegistrants: [EventRegistrant!]! @requireAuth
    eventRegistrant(id: String!): EventRegistrant @requireAuth
  }

  input CreateEventRegistrantInput {
    email: String!
    firstName: String!
    lastName: String!
    displayName: String
    jobTitle: String
    company: String
    profilePicture: String
    dateOfBirth: DateTime!
    language: String!
    ipAddress: String!
    notes: String!
    cancelledAt: DateTime
    checkedInAt: DateTime
    eventId: String!
  }

  input UpdateEventRegistrantInput {
    email: String
    firstName: String
    lastName: String
    displayName: String
    jobTitle: String
    company: String
    profilePicture: String
    dateOfBirth: DateTime
    language: String
    ipAddress: String
    notes: String
    cancelledAt: DateTime
    checkedInAt: DateTime
    eventId: String
  }

  type Mutation {
    createEventRegistrant(input: CreateEventRegistrantInput!): EventRegistrant!
      @requireAuth
    updateEventRegistrant(
      id: String!
      input: UpdateEventRegistrantInput!
    ): EventRegistrant! @requireAuth
    deleteEventRegistrant(id: String!): EventRegistrant! @requireAuth
  }
`;
