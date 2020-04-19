const eventsTypeDef = `
type Message {
    message: String
    status: Int
}
input EventInput {
    id: ID
    ownerType: String
    status: String
    eventType: String
    ownerId: Int!
    name: String!
    eventStartDate: String!
    eventFinishDate: String!
    description: String
    url: String
    latitude: String
    longitude: String
}
type Event {
    id: ID!
    ownerType: String
    status: String
    eventType: String
    ownerId: Int!
    name: String!
    eventStartDate: String!
    eventFinishDate: String!
    description: String
    url: String
    latitude: String
    longitude: String
}
`;

const eventsQueries = `
type Query {
    events: [Event] 
    eventByID(eventId: ID!): Event
    eventsByStatus(status: String!):[Event] 
    eventsByOwnerType(ownerType: String!):[Event] 
    eventsByName(name: String!):[Event] 
    eventsByRangeDate(start: String!, end:String!):[Event] 
    eventsByOwnerID(type: String!, id: Int!):[Event] 
}
`;

const eventsMutations = `
type Mutation {
    addEvent(input: EventInput ): Message
    updateEvent(id: ID!,input: EventInput ): Message
    deleteEvent(id: ID!): Message
}
`;

// use by express-graphql in index.js
const events = `
    ${eventsTypeDef}
    ${eventsQueries}
    ${eventsMutations}
`;

module.exports = events;
