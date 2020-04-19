var express = require("express");
var graphqlHTTP = require("express-graphql");
var { buildSchema } = require("graphql");


var commentsSchema = require("./schemas/typeDef/comments");
var schema = buildSchema(commentsSchema);
var commentsResolvers = require("./resolvers/resolvers/commentsResolver");
var root = commentsResolvers;

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
