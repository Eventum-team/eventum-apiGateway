const {
  commentsTypeDef,
  commentsQueries,
  commentsMutations,
} = require("./comments.js");
const { authTypeDef, authMutations, authQueries } = require("./auth");
const { eventsTypeDef, eventsQueries, eventsMutations } = require("./events");
const { groupsTypeDef, groupsQueries, groupsMutations } = require("./groups");
const { viewsTypeDef, viewsQueries, viewsMutations } = require("./views");
// const media = require("./media");
// const users = require("./users");

const schema = `
${authTypeDef}
${commentsTypeDef}
${groupsTypeDef}
${eventsTypeDef}
${viewsTypeDef}

type Mutation {
    ${authMutations}
    ${commentsMutations}
    ${groupsMutations}
    ${eventsMutations}
    ${viewsMutations}
}
type Query {
    ${authQueries}
    ${commentsQueries}
    ${groupsQueries}
    ${eventsQueries}
    ${viewsQueries}
}
`;

module.exports = schema;
