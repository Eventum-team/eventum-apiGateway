const {
  getAll,
  getOneProfile,
  getAllGroup,
  getOneProfileGroup,
  getAllEvent,
  getOneProfileEvent,
  createImage,
  deleteUserProfile,
  deleteGroup,
  deleteGroupProfile,
  deleteEvent,
  deleteEventProfile
} = require("../msAPIs/media.js");

// use by express-graphql in index.js
const resolvers = {
  // Queries
  allImages: getAll,
  profileImage: getOneProfile,
  groupImages: getAllGroup,
  groupProfileImage: getOneProfileGroup,
  eventImages: getAllEvent,
  eventProfileImage: getOneProfileEvent,
  // Mutations
  createImage: createImage,
  deleteProfileImage: deleteUserProfile,
  deleteGroupImage: deleteGroup,
  deleteGroupProfileImage: deleteGroupProfile,
  deleteEventImage: deleteEvent,
  deleteEventProfileImage: deleteEventProfile
};

module.exports = resolvers;