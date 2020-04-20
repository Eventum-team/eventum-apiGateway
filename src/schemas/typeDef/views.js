const viewsTypeDef = `
  type AllGroupsSearch {
    id_group: ID!
    type: String!
    name: String!
    description: String!
    created_date: String!
    contact_number: String
    status: String!
    followers: Int!
  }

  type GroupsProfileSearch {
    id_group: ID!
    type: String!
    name: String!
    description: String!
    created_date: String!
    contact_number: String
    status: String!
    followers: Int!
    events: [Event!]!
  }
`;

const viewsQueries = `
  allGroups: [AllGroupsSearch!]!
  groupProfile (id:ID!): GroupsProfileSearch
`;

const viewsMutations = `
  editGroup(id_user: ID!,input: GroupInput, token: AccessToken): Message
  editEvent(id: ID!,input: EventInput, token: AccessToken): Message
  createUser(input: LogRegInput): Message
`;

module.exports = { viewsTypeDef, viewsQueries, viewsMutations };
