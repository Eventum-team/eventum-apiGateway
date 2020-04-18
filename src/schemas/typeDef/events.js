const eventsTypeDef = `
input EventInput {
    id: ID!
    ownerId: Int!
    name: String!
    eventStartDate: String!
    eventEndDate: String!
    description: String
    url: String
    latitude: String
    longitude: String
}

type Event {
    id: ID!
    ownerId: Int!
    name: String!
    eventStartDate: String!
    eventEndDate: String!
    description: String
    url: String
    latitude: String
    longitude: String
}
`;

const eventsQueries = `
type Query {
    events: [Event] 
    eventsByID(eventId: ID!): Event
    eventsByStatus(status: String!):[Event] 
    eventsByOwnerType(ownerType: String!):[Event] 
    eventsByName(name: String!):[Event] 
    eventsByRangeDate(start: String!, end:String!):[Event] 
    eventsByOwnerID(type: String!, ownerID: Int!    ):[Event] 
}
`;

const eventsMutations = `
type Mutation {
    addEvent(input: EventInput ): Event
    updateEvent(id: ID!,input: EventInput ): Event
    deleteEvent(id: ID!): Event
}
`;
const events = `
    ${eventsTypeDef}
    ${eventsQueries}
    ${eventsMutations}
`;

module.exports = events;
