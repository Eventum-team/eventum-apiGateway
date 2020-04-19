const {
    getCommentsByID,
    createComment,
    updateComment,
    deleteComment,
  } = require("../msAPIs/comments.js");
  
  // use by express-graphql in index.js
  const resolvers = {
    // Queries
    getComments: getCommentsByID,
    // Mutations
    addComment: createComment,
    updateComment: updateComment,
    deleteComment: deleteComment,
  };
  
  module.exports = resolvers;
  