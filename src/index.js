var express = require("express");
var graphqlHTTP = require("express-graphql");
var { buildSchema } = require("graphql");

// Construct a schema, using GraphQL schema language
var eventsSchema = require("./schemas/typeDef/events");
var schema = buildSchema(eventsSchema);

var eventsResolvers = require("./resolvers/msAPIs/events");
var root = eventsResolvers;

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
