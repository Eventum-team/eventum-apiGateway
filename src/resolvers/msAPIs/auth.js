const axios = require("axios");
const URI = require("../../server/msAuth");
const LoginURL = `${URI}auth/login/`;
const VerifyURL = `${URI}auth/login/verify/`;
const RefreshURL = `${URI}auth/login/refresh/`;
const RegisterURL = `${URI}auth/register/`;

const createUserAuth = async ({ input }) => {
  const res = { data: {}, error: null };
  try {
    const { data } = await axios.post(`${RegisterURL}`, input);
    res.data = data;
    return res;
  } catch (error) {
    throw new Error(
      JSON.stringify({
        message: error.response.data,
        status: error.response.status,
      })
    );
  }
};

const loginUser = async ({ input }) => {
  try {
    const { data } = await axios.post(`${LoginURL}`, input);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const loginVerify = async ({ input }) => {
  try {
    const { data } = await axios.post(`${VerifyURL}`, input);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const loginRefresh = async ({ input }) => {
  try {
    const { data } = await axios.post(`${RefreshURL}`, input);
    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUserAuth,
  loginUser,
  loginVerify,
  loginRefresh,
};
