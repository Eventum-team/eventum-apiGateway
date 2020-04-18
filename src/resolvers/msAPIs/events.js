const events = [
  {
    id: 1,
    ownerId: 11,
    name: "Harry Potter and the Sorcerer's stone",
    eventStartDate: "01/01/2020",
    eventEndDate: "01/01/2020",
    description: "description ...",
    url: "www.event.com",
    latitude: "0.0.0",
    longitude: "1,1,1",
  },
  {
    id: 2,
    ownerId: 11,
    name: "Harry Potter and the Sorcerer's stone",
    eventStartDate: "01/01/2020",
    eventEndDate: "01/01/2020",
    description: "description ...",
    url: "www.event.com",
    latitude: "0.0.0",
    longitude: "1,1,1",
  },
  {
    id: 3,
    ownerId: 11,
    name: "Harry Potter and the Sorcerer's stone",
    eventStartDate: "01/01/2020",
    eventEndDate: "01/01/2020",
    description: "description ...",
    url: "www.event.com",
    latitude: "0.0.0",
    longitude: "1,1,1",
  },
  {
    id: 4,
    ownerId: 11,
    name: "Harry Potter and the Sorcerer's stone",
    eventStartDate: "01/01/2020",
    eventEndDate: "01/01/2020",
    description: "description ...",
    url: "www.event.com",
    latitude: "0.0.0",
    longitude: "1,1,1",
  },
];

const getEvents = () => events;
const getEventsByID = ({ eventId }) => {
  console.log(events[1]);

  events[eventId];
};
const getEventsByStatus = ({ status }) => events;
const getEventsByOwnerType = ({ ownerType }) => events;
const getEventsByName = ({ name }) => events;
const getEventsByRangeDate = ({ start, end }) => events;
const getEventsByOwnerID = ({ type, ownerID }) => events;
const addEvent = ({ input }) => {
  console.log(input);

  events.push(input);
  return input;
};
const updateEvent = ({ id, input }) => events;
const deleteEvent = ({ id }) => {
  events.pop();
  return events[0];
};

const resolvers = {
  // Queries
  events: getEvents,
  eventsByID: getEventsByID,
  eventsByStatus: getEventsByStatus,
  eventsByOwnerType: getEventsByOwnerType,
  eventsByName: getEventsByName,
  eventsByRangeDate: getEventsByRangeDate,
  eventsByOwnerID: getEventsByOwnerID,
  // Mutations
  addEvent: addEvent,
  updateEvent: updateEvent,
  deleteEvent: deleteEvent,
};

module.exports = resolvers;
