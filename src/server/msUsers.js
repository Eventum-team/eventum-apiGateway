const PORT = process.env.USER_PORT;
const IP = process.env.USER_IP;

const URI = `http://${IP}:${PORT}/`;

console.log(URI);

module.exports.URI = URI;
