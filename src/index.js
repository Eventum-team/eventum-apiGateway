const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");
const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const schemaStructure = require("./schemas/typeDef/schema");
const schema = buildSchema(schemaStructure);

const root = require("./resolvers/resolvers/resolvers");

const app = express();

// Settings
app.set("view engine", "ejs");
// Middleware
const storage = multer.diskStorage({
  destination: "src/public/uploads",
  filename: (req, file, cb) => {
    cb(null, uuidv4() + path.extname(file.originalname).toLocaleLowerCase());
  },
});
app.use(
  multer({
    storage,
    limits: { fileSize: 2000000 },
    fileFilter: (req, file, cb) => {
      const fileTypes = /jpeg|jpg|png|gif/;
      const mimetype = fileTypes.test(file.mimetype);
      const extname = fileTypes.test(path.extname(file.originalname));
      if (mimetype && extname) {
        return cb(null, true);
      }
      cb("Error: Archivo no soportado");
    },
  }).single("Image")
);

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
});

// static files acceso desde navegador
app.use(express.static("public")); //testeo

app.listen(3000, () => {
  console.log("Running a GraphQL API server at localhost:3000/graphql");
});
