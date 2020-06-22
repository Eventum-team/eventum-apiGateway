const PORT = process.env.COMMENT_PORT;
const IP = process.env.COMMENT_IP;

const URL = `http://${IP}:${PORT}/`;

console.log(URL);

module.exports = URL;
