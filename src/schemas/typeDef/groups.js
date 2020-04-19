const groupsTypeDef = `
type Message {
    message: String
    status: Int
}
input GroupInput {
    id_type: Int!
    name: String!
    description: String!
    status: String!
}
type Group {
    id: ID!
    id_type: Int!
    name: String!
    description: String!
    created_date: String!
    contact_number: String
    status: String!
}
`;

const groupsQueries = `
type Query {
    groups: [Group!]! 
    groupByID(groupId: ID!): Group!
    groupsByName(name: String!):[Group!]! 
    groupsByIdType(id_type: Int!):[Group!]! 
    eventsByNameAndIdType(name: String!, id_type: Int!):[Group!]! 
}
`;

const groupsMutations = `
type Mutation {
    addGroup(input: GroupInput ): Message
    updateGroup(id: ID!,input: GroupInput ): Message
    deleteGroup(id: ID!): Message
}
`;

const groups = `
    ${groupsTypeDef}
    ${groupsQueries}
    ${groupsMutations}
`;

module.exports = groups;
