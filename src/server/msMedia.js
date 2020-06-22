const PORT = process.env.MEDIA_PORT;
const IP = process.env.MEDIA_IP;

const URL = `http://${IP}:${PORT}/`;

console.log(URL);

module.exports = URL;
