var express = require("express");
var graphqlHTTP = require("express-graphql");
var { buildSchema } = require("graphql");
//image upload
const multer = require('multer');
const path = require('path');
const { v4 : uuidv4 } = require('uuid');


//eventsSchema
var mediaSchema = require("./schemas/typeDef/media");
var schema = buildSchema(mediaSchema);

var mediaResolvers = require("./resolvers/resolvers/mediaResolver");
var root = mediaResolvers;

var image;

var app = express();

// Settings
app.set('view engine', 'ejs');
// Middleware
const storage = multer.diskStorage({
    destination: 'src/public/uploads',
    filename: (req, file ,cb)=>{
        cb(null, uuidv4() + path.extname(file.originalname).toLocaleLowerCase());
    }
});

app.use(multer({
    storage,
    limits: {fileSize: 2000000},
    fileFilter: (req, file, cb) =>{
        const fileTypes = /jpeg|jpg|png|gif/;
        const mimetype = fileTypes.test(file.mimetype);
        const extname = fileTypes.test(path.extname(file.originalname));
        if(mimetype && extname){
            return cb(null, true);
        }
        cb('Error: Archivo no soportado');
    }
}).single('Image'));

app.use(
    "/graphql", graphqlHTTP({
      schema: schema,
      rootValue: root,
      graphiql: true,
    })
);

//rutas testeo
app.get('/', (req,res) =>{
    res.render('index');
    console.log('index');
});

app.post('/upload1', (req,res) =>{
    res.send(req.file.path);
    //console.log(req.file);
    image = req.file.path;
    console.log(image);
});

// static files acceso desde navegador
app.use(express.static('public'));//testeo

// Start
app.listen(3004, () => {
  console.log("Running a GraphQL API server at localhost:3004/graphql");
});

