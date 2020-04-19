const PORT = "5000";
const END_POINT = "http://localhost";
const BASE_URI = "/";

const URI = `${END_POINT}:${PORT}${BASE_URI}`;

console.log(URI);

module.exports.URI = URI;