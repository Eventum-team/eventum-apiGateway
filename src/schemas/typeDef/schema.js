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
const { usersTypeDef, usersQueries, usersMutations } = require("./users");

const schema = `
${authTypeDef}
${commentsTypeDef}
${groupsTypeDef}
${eventsTypeDef}
${groupViewsTypeDef}
${eventViewTypeDef}
${usersTypeDef}

type Mutation {
    ${authMutations}
    ${commentsMutations}
    ${groupsMutations}
    ${eventsMutations}
    ${groupViewsMutations}
    ${eventViewMutations}
    ${usersMutations}
}
type Query {
    ${authQueries}
    ${commentsQueries}
    ${groupsQueries}
    ${eventsQueries}
    ${eventViewQueries}
    ${groupViewsQueries}
    ${usersQueries}
}
`;

module.exports = schema;
