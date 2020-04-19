const {
  createUserAuth,
  loginUser,
  loginVerify,
  loginRefresh,
} = require("../msAPIs/auth.js");

// use by express-graphql in index.js
const resolvers = {
  // Mutations
  addUser: createUserAuth,
  logUser: loginUser,
  vrfTok: loginVerify,
  refreshTok: loginRefresh,
};

module.exports = resolvers;
