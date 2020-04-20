const {
  getAllGroups,
  getGroupByID,
  getGroupsByName,
  getGroupsByIdType,
  getGroupsByNameAndIdType,
  createGroup,
  updateGroup,
  deleteGroup,
  getTypeById,
} = require("../msAPIs/groups.js");

// use by express-graphql in index.js
const resolvers = {
  // Queries
  groups: getAllGroups,
  groupByID: getGroupByID,
  groupsByName: getGroupsByName,
  groupsByIdType: getGroupsByIdType,
  groupsByNameAndIdType: getGroupsByNameAndIdType,
  // Mutations
  addGroup: createGroup,
  updateGroup: updateGroup,
  deleteGroup: deleteGroup,
  typeById: getTypeById,
};

module.exports = resolvers;
