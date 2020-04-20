const groupViewsTypeDef = `
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
    id_group: ID
    id_type: Int
    type: String
    name: String
    description: String
    created_date: String
    contact_number: String
    status: String
    followers: Int
    events: [Event!]
  }
`;

const groupViewsQueries = `
  allGroups: [AllGroupsSearch!]!
  groupProfile (id:ID!): GroupsProfileSearch
  filterGroups (name: String, id_type: Int): [AllGroupsSearch!]!
`;

const groupViewsMutations = `
  editGroup(id_user: ID!,input: GroupInput, token: AccessToken): Message
  createUser(input: LogRegInput): Message
  createNewGroup (id_user:ID!, input: GroupInput, token: AccessToken ): Group
`;

module.exports = { groupViewsTypeDef, groupViewsQueries, groupViewsMutations };
