const { 
    getAllGroups,
    getGroupByID,
    getGroupsByName,
    getGroupsByIdType,
    getGroupsByNameAndIdType,
    createGroup,
    updateGroup,
    deleteGroup
} = require("../msAPIs/groups.js");



// use by express-graphql in index.js
const resolvers = {
    // Queries
    groups: getAllGroups,
    groupByID: getGroupByID,
    groupsByName: getGroupsByName,
    groupsByIdType: getGroupsByIdType,
    eventsByNameAndIdType: getGroupsByNameAndIdType,
    // Mutations
    addGroup: createGroup,
    updateGroup: updateGroup,
    deleteGroup: deleteGroup,
  };
  
  module.exports = resolvers;