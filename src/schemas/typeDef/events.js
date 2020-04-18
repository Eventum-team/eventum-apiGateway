const eventsTypeDef = `
type Event {
    title: String, owner: String 
}
`;

const eventsQueries = `
type Query {
    events: [Event] 
    firstEvent: Event
}
`;

const eventsMutations = `
type Mutation {
    addEvent(
        title: String!,
        owner: String!
    ): Event
}
`;
const events = `
    ${eventsTypeDef}
    ${eventsQueries}
    ${eventsMutations}
`;

module.exports = events;
