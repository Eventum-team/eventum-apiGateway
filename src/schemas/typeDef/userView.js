const userViewTypeDef = `
`;

const userViewQueries = `
userProfile(userId: Int): User
  `;

const userViewMutations = `
  UserAuthcreate(input: UserInput): Message
editProfile(input: UserInput): Message
`;

module.exports = { userViewTypeDef, userViewQueries, userViewMutations };
