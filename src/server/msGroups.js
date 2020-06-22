const PORT = process.env.GROUP_PORT;
const IP = process.env.GROUP_IP;

const URI = `http://${IP}:${PORT}/`;

console.log(URI);

module.exports.URI = URI;
