const axios = require("axios");
const URI = require("../../server/msComments");
const completeURI = `${URI}comment`;

const getCommentsByID = async ({ eventId }) => {
  try {
    const { data } = await axios.get(`${completeURI}/${eventId}`);
    console.log("Todos los comentarios:");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const createComment = async ({ input }) => {
  try {
    const { data } = await axios.post(`${completeURI}`, input); // event obj structured define in resolver function
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const updateComment = async ({ id, input }) => {
  try {
    const { data } = await axios.put(`${completeURI}/${id}`, input); // event obj structured define in resolver function
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const deleteComment = async ({ id }) => {
  try {
    const { data } = await axios.delete(`${completeURI}/${id}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getCommentsByID,
  createComment,
  updateComment,
  deleteComment,
};
