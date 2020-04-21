const { loginVerify, createUserAuth } = require("../../msAPIs/auth");
const { getUserByID, getGroupsByUser } = require("../../msAPIs/users");

const tokenOutOfDate = {
  message: "Token out of date",
  status: 401,
};

const UserProfile = ({ id }) => {
  // User
  //Media
  //Group
  //Events
};

// const  login = () => console.log("F");  Auth ya la tiene

const createUser = async ({ input }) => {
  //Auth
  try {
    const authData = {
      input: {
        username: input.username,
        password: input.password,
      },
    };
    const res = await createUserAuth(authData, id);

    if (Object.keys(res.data).length !== 0) {
      console.log("ms-user");
      return {
        message: "User created successfully",
        status: 201,
      };
    }
    switch (res.error.response.status) {
      case 500:
        return {
          message: "User already created",
          status: res.error.response.status,
        };
      case 400:
        return {
          message: "Invalid Fields",
          status: res.error.response.status,
        };
      default:
        return {
          message: resp.error.response.statusText,
          status: res.error.response.status,
        };
    }
  } catch (error) {
    console.log(error);
  }
};
const editProfiel = async ({ token, input }) => {
  //Auth
  try {
    // const ok = await loginVerify({ input: token });
    if (true) {
      return await updateGroup({ id: input.id_group, input: input });
    } else {
      return tokenOutOfDate;
    }
  } catch (error) {
    throwCustomError(error);
  }
};

const userProfile = async (userId) => {
  try {
    const user = await getUserByID(eventId);
    const eventsCreated = await getEventsByOwnerID;
    ({ type: "user", id: userId });
    // grupos que siguie
    //grupos de los ques parte
    // media

    return user;
  } catch (error) {
    throwCustomError(error);
  }
};
