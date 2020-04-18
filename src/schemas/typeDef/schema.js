const comments = require("./comments.js");
const auth = require("./auth");
const events = require("./events");
const groups = require("./groups");
const media = require("./media");
const users = require("./users");

// unir todos los esquemas cuando esten
//descomentar y mover dentro del stringo el para probar

const schema = `
    ${events}
`;
//     ${comments}
//     ${users}
//     ${auth}
//     ${groups}
//     ${media}

module.exports = schema;
