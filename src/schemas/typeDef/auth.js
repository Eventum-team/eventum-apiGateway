const authTypeDef = `
type AuthUser {
    id: Int
    username: String
    detail: String
}
input LogRegInput {
    username: String
    password: String
}
type LoginTokens {
    refresh: String
    access: String
    detail: String
}
input AccessToken{
    token: String
}
input RefreshToken{
    refresh: String
}
type NewAccessToken{
    access: String
    detail: String
}`;

const authMutations = `
type Mutation {
    addUser(input: LogRegInput!): AuthUser
    logUser(input: LogRegInput!): LoginTokens
    vrfTok(input: AccessToken!): String
    refreshTok(input: RefreshToken!): NewAccessToken
}
`;

const authQueries = `
type Query {
    dummy: String
}
`;


// use by express-graphql in index.js
const auth = `
    ${authTypeDef}
    ${authQueries}
    ${authMutations}
`;

module.exports = auth;
