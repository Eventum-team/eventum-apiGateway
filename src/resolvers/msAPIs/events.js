const axios = require("axios");
const URI = require("../../server/msEvent");
const completeURI = `${URI}events`;
const completeFilterURI = `${URI}events/filter`;

const getAllEvents = () => {
  axios
    .get(completeURI)
    .then(({ data }) => {
      console.log(data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};

const getEventByID = (id) => {
  axios
    .get(`${completeURI}/${id}`)
    .then(({ data }) => {
      console.log(data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};
const getEventsByStatus = (status) => {
  axios
    .get(`${completeFilterURI}/status?status=${status}`)
    .then(({ data }) => {
      console.log(data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};
const getEventsByOwnerType = (ownerType) => {
  axios
    .get(`${completeFilterURI}/ownerType?type=${ownerType}`)
    .then(({ data }) => {
      console.log(data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};
const getEventsByName = (name) => {
  axios
    .get(`${completeFilterURI}/name?name=${name}`)
    .then(({ data }) => {
      console.log(data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};
const getEventsByRangeDate = (start, end) => {
  axios
    .get(`${completeFilterURI}/rangeDate?start=${start}&end=${end}`)
    .then(({ data }) => {
      console.log(data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};
const getEventsByOwnerID = (type, id) => {
  axios
    .get(`${completeFilterURI}/owner?type=${type}&id=${id}`)
    .then(({ data }) => {
      console.log(data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};
