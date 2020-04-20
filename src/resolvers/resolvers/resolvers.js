const comments = require("./commentsResolver");
const auth = require("./authResolver");
const events = require("./eventsResolver");
const groups = require("./groupsResolver");
const users = require("./usersResolver");
const groupViews = require("./views/groupsViews");
const eventsViews = require("./views/eventsViews");
const userViews = require("./views/usersViews");

// const media = require("./mediaResolvers");
// const users = require("./usersResolvers");,

const resolvers = {
  ...comments,
  ...auth,
  ...events,
  ...groups,
  ...users,
  ...groupViews,
  ...eventsViews,
  ...userViews,
};

module.exports = resolvers;
