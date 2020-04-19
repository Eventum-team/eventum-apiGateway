
var express = require("express");
var graphqlHTTP = require("express-graphql");
var { buildSchema } = require("graphql");

//authsSchema
var authSchema = require("./schemas/typeDef/auth");
var schema = buildSchema(authSchema);

//authSchema
var authResolvers = require("./resolvers/resolvers/authResolver");
var root = authResolvers;

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
