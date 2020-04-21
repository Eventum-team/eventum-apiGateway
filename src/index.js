const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");

const schemaStructure = require("./schemas/typeDef/schema");
const schema = buildSchema(schemaStructure);

const root = require("./resolvers/resolvers/resolvers");
const { multerStorage } = require("./imgResolvers/imgResolver");

const app = express();
app.set("view engine", "ejs");
app.use(multerStorage);
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
    customFormatErrorFn: (error) => {
      try {
        const e = JSON.parse(error.message);
        return {
          message: e.message,
          status: e.status,
        };
      } catch (e) {
        return {
          message: error.message,
          locations: error.locations,
          stack: error.stack ? error.stack.split("\n") : [],
          path: error.path,
        };
      }
    },
  })
);

//rutas testeo
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload1", (req, res) => {
  res.send(req.file.path);
  // log(req.);
});

// static files acceso desde navegador
app.use(express.static("public")); //testeo

app.listen(3000, () => {
  console.log("Running a GraphQL API server at localhost:3000/graphql");
});
