const events = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    owner: "J.K. Rowling",
  },
  {
    title: "Jurassic Park",
    owner: "Michael Crichton",
  },
];

const getEvents = () => events;
const getEvent1 = () => events[1];
const addEvent = ({ input }) => {
  events.push(input);
};

const resolvers = {
  Query: {
    events: getEvents,
    firstEvent: getEvent1,
  },
  Mutation: {
    addEvent: addEvent,
  },
};

module.exports = resolvers;
