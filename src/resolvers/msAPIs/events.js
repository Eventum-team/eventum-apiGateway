const axios = require("axios");
const URI = require("../../server/msEvent");
const completeURI = `${URI}events`;
const completeFilterURI = `${URI}events/filter`;

const getAllEvents = async () => {
  try {
    const { data } = await axios.get(completeURI);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getEventByID = async ({ eventId }) => {
  try {
    const { data } = await axios.get(`${completeURI}/${eventId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getEventsByStatus = async ({ status }) => {
  try {
    const { data } = await axios.get(
      `${completeFilterURI}/status?status=${status}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getEventsByOwnerType = async ({ ownerType }) => {
  try {
    const { data } = await axios.get(
      `${completeFilterURI}/ownerType?type=${ownerType}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getEventsByName = async ({ name }) => {
  try {
    const { data } = await axios.get(`${completeFilterURI}/name?name=${name}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getEventsByRangeDate = async ({ start, end }) => {
  try {
    const { data } = await axios.get(
      `${completeFilterURI}/rangeDate?start=${start}&end=${end}`
    );
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};

const getEventsByOwnerID = async ({ type, id }) => {
  try {
    const { data } = await axios.get(
      `${completeFilterURI}/owner?type=${type}&id=${id}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

const createEvent = async ({ input }) => {
  try {
    const { data } = await axios.post(`${completeURI}`, input); // event obj structured define in resolver function
    return data;
  } catch (error) {
    console.log(error);
  }
};

const updateEvent = async ({ id, input }) => {
  try {
    const { data } = await axios.put(`${completeURI}/${id}`, input); // event obj structured define in resolver function
    return data;
  } catch (error) {
    console.log(error);
  }
};

const deleteEvent = async ({ id }) => {
  try {
    const { data } = await axios.delete(`${completeURI}/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllEvents,
  getEventByID,
  getEventsByStatus,
  getEventsByOwnerType,
  getEventsByName,
  getEventsByRangeDate,
  getEventsByOwnerID,
  createEvent,
  updateEvent,
  deleteEvent,
};
