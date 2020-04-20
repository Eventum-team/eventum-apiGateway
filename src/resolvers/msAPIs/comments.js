const axios = require("axios");
const URI = require("../../server/msComments");
const completeURI = `${URI}comment`;

const getCommentsByID = async ({ eventId }) => {
  try {
    const { data } = await axios.get(`${completeURI}/${eventId}`);
    return data;
  } catch (error) {
    throw new Error(
      JSON.stringify({
        message: error.response.data,
        status: error.response.status,
      })
    );
  }
};

const createComment = async ({ input }) => {
  try {
    const { data } = await axios.post(`${completeURI}`, input); // event obj structured define in resolver function
    return data;
  } catch (error) {
    throw new Error(
      JSON.stringify({
        message: error.response.data,
        status: error.response.status,
      })
    );
  }
};

const updateComment = async ({ id, input }) => {
  try {
    const { data } = await axios.put(`${completeURI}/${id}`, input); // event obj structured define in resolver function
    return data;
  } catch (error) {
    throw new Error(
      JSON.stringify({
        message: error.response.data,
        status: error.response.status,
      })
    );
  }
};

const deleteComment = async ({ id }) => {
  try {
    const { data } = await axios.delete(`${completeURI}/${id}`);
    return data;
  } catch (error) {
    throw new Error(
      JSON.stringify({
        message: error.response.data,
        status: error.response.status,
      })
    );
  }
};

module.exports = {
  getCommentsByID,
  createComment,
  updateComment,
  deleteComment,
};
