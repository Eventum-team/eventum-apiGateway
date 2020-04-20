const viewsTypeDef = `

`;

const viewsQueries = `

`;

const viewsMutations = `
  editGroup(id_user: ID!,input: GroupInput, token: AccessToken): Message
  createUser(input: LogRegInput): Message
`;

module.exports = { viewsTypeDef, viewsQueries, viewsMutations };
