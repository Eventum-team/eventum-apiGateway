const axios = require("axios");
const {URI} = require("../../server/msGroups");
const completeURI = `${URI}groups`;
const completeFilterURI = `${URI}groups/filter`;

const getAllGroups = async () => {
  try {
    console.log(completeURI);
    const { data } = await axios.get(completeURI);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getGroupByID = async ({ groupId }) => {
  try {
    const { data } = await axios.get(`${completeURI}/${groupId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getGroupsByName = async ({ name }) => {
  try {
    const { data } = await axios.get(
      `${completeFilterURI}?name=${name}&id_type=`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getGroupsByIdType = async ({ id_type }) => {
    try {
      const { data } = await axios.get(
        `${completeFilterURI}?name=&id_type=${id_type}`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
};


const getGroupsByNameAndIdType = async ({ name, id_type }) => {
    try {
        const { data } = await axios.get(
        `${completeFilterURI}?name=${name}&id_type=${id_type}`
        );
        return data;
    } catch (error) {
        console.log(error);
    }
};

const createGroup = async ({ input }) => {
  try {
    const { data, status } = await axios.post(`${completeURI}`, input); // event obj structured define in resolver function
    return {
      "message": data,
      "status": status
    };
  } catch (error) {
    console.log(error);
  }
};

const updateGroup = async ({ id, input }) => {
  try {
    const { data, status } = await axios.put(`${completeURI}/${id}`, input); // event obj structured define in resolver function
    console.log(data);
    return {
      "message": data,
      "status": status
    };
  } catch (error) {
    console.log(error);
  }
};

const deleteGroup = async ({ id }) => {
  try {
    const { data, status} = await axios.delete(`${completeURI}/${id}`);
    return {
      "message": data,
      "status": status
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
    getAllGroups,
    getGroupByID,
    getGroupsByName,
    getGroupsByIdType,
    getGroupsByNameAndIdType,
    createGroup,
    updateGroup,
    deleteGroup
};