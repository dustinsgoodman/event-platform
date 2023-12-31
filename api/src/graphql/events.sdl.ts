export const schema = gql`
  type Event {
    id: UUID!
    name: String!
    description: String
    timezone: TimeZone!
    startAt: DateTime!
    endAt: DateTime!
    formattedStartAt: String
    formattedEndAt: String
    venueType: EventVenueType!
    venueName: String
    address: String
    country: String
    city: String
    stateOrProvince: String
    postalCode: String
    registrationStartAt: DateTime!
    registrationEndAt: DateTime!
    formattedRegistrationStartAt: String
    formattedRegistrationEndAt: String
    currency: Currency!
    capacity: NonNegativeInt
    createdAt: DateTime!
    updatedAt: DateTime!
    formattedCreatedAt: String
    formattedUpdatedAt: String
    sessions: [EventSession]!
    speakers: [EventSpeaker]!
    registrants: [EventRegistrant]!
  }

  type EventConnection {
    nodes: [Event!]!
    pagination: Pagination!
  }

  enum EventVenueType {
    IN_PERSON
    ONLINE
    HYBRID
  }

  type Query {
    events(pagination: PaginationInput): EventConnection! @requireAuth
    event(id: UUID!): Event @requireAuth
  }

  input CreateEventInput {
    name: String!
    description: String
    timezone: String!
    startAt: DateTime!
    endAt: DateTime!
    venueType: EventVenueType!
    venueName: String
    address: String
    country: String
    city: String
    stateOrProvince: String
    postalCode: String
    registrationStartAt: DateTime!
    registrationEndAt: DateTime!
    currency: String!
    capacity: Int
  }

  input UpdateEventInput {
    name: String
    description: String
    timezone: String
    startAt: DateTime
    endAt: DateTime
    venueType: EventVenueType
    venueName: String
    address: String
    country: String
    city: String
    stateOrProvince: String
    postalCode: String
    registrationStartAt: DateTime
    registrationEndAt: DateTime
    currency: String
    capacity: Int
  }

  type Mutation {
    createEvent(input: CreateEventInput!): Event! @requireAuth
    updateEvent(id: UUID!, input: UpdateEventInput!): Event! @requireAuth
    deleteEvent(id: UUID!): Event! @requireAuth
  }
`;
