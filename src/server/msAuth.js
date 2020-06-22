const PORT = process.env.AUTH_PORT;
const IP = process.env.AUTH_IP;

const URL = `http://${IP}:${PORT}/`;

console.log(URL);

module.exports = URL;
