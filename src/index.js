var express = require("express");
var graphqlHTTP = require("express-graphql");
var { buildSchema } = require("graphql");

//usersSchema
var usersSchema = require("./schemas/typeDef/users");
var schema = buildSchema(usersSchema);

//usersSchema
var usersResolvers = require("./resolvers/resolvers/usersResolver");
var root = usersResolvers;
var {usersAPI} = require("./resolvers/msAPIs/users.js");

var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(3004, () => {
  console.log("Running a GraphQL API server at localhost:3004/graphql");
});