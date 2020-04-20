const eventViewTypeDef = `
`;

const eventViewQueries = `
  todayEvents: [Event]
  allEvents: [Event]
  eventsByGroup(id_group: ID!): [Event] 
  eventProfile(eventId: ID!): Event
  eventsByName(name: String!): [Event]
  `;

const eventViewMutations = `
  createEvent(token: AccessToken,input: EventInput): Message
  editEvent(token: AccessToken,input: EventInput, id:ID!): Message
  deleteEvent(token: AccessToken,id: ID!): Message
`;

module.exports = { eventViewTypeDef, eventViewQueries, eventViewMutations };