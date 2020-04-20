const {
  commentsTypeDef,
  commentsQueries,
  commentsMutations,
} = require("./comments.js");
const { authTypeDef, authMutations, authQueries } = require("./auth");
const { eventsTypeDef, eventsQueries, eventsMutations } = require("./events");
const { groupsTypeDef, groupsQueries, groupsMutations } = require("./groups");
const { viewsTypeDef, viewsQueries, viewsMutations } = require("./views");
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
${viewsTypeDef}
${eventViewTypeDef}

type Mutation {
    ${authMutations}
    ${commentsMutations}
    ${groupsMutations}
    ${eventsMutations}
    ${viewsMutations}
    ${eventViewMutations}
}
type Query {
    ${authQueries}
    ${commentsQueries}
    ${groupsQueries}
    ${eventsQueries}
    ${viewsQueries}
    ${eventViewQueries}
}
`;

module.exports = schema;
