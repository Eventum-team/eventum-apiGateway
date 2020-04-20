const {
  commentsTypeDef,
  commentsQueries,
  commentsMutations,
} = require("./comments.js");
const { authTypeDef, authMutations, authQueries } = require("./auth");
const { eventsTypeDef, eventsQueries, eventsMutations } = require("./events");
const { groupsTypeDef, groupsQueries, groupsMutations } = require("./groups");
const {
  groupViewsTypeDef,
  groupViewsQueries,
  groupViewsMutations,
} = require("./groupViews");
const {
  eventViewTypeDef,
  eventViewQueries,
  eventViewMutations,
} = require("./eventView");
// const media = require("./media");
// const users = require("./users");

const schema = `
${authTypeDef}
${commentsTypeDef}
${groupsTypeDef}
${eventsTypeDef}
${groupViewsTypeDef}
${eventViewTypeDef}

type Mutation {
    ${authMutations}
    ${commentsMutations}
    ${groupsMutations}
    ${eventsMutations}
    ${groupViewsMutations}
    ${eventViewMutations}
}
type Query {
    ${authQueries}
    ${commentsQueries}
    ${groupsQueries}
    ${eventsQueries}
    ${eventViewQueries}
    ${groupViewsQueries}
}
`;

module.exports = schema;
