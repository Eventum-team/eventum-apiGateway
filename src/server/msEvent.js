const PORT = process.env.EVENT_PORT;
const IP = process.env.EVENT_IP;

const URL = `http://${IP}:${PORT}/`;

console.log(URL);

module.exports = URL;
