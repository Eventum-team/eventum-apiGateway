const {
  getAllEvents,
  getEventByID,
  getEventsByStatus,
  getEventsByOwnerType,
  getEventsByName,
  getEventsByRangeDate,
  getEventsByOwnerID,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../msAPIs/events.js");

// use by express-graphql in index.js
const resolvers = {
  // Queries
  events: getAllEvents,
  eventByID: getEventByID,
  eventsByStatus: getEventsByStatus,
  eventsByOwnerType: getEventsByOwnerType,
  eventsByName: getEventsByName,
  eventsByRangeDate: getEventsByRangeDate,
  eventsByOwnerID: getEventsByOwnerID,
  // Mutations
  addEvent: createEvent,
  updateEvent: updateEvent,
  deleteEvent: deleteEvent,
};

module.exports = resolvers;
