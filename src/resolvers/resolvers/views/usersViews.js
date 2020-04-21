const { loginVerify, createUserAuth } = require("../../msAPIs/auth");
const { getUserByID, getGroupsByUser } = require("../../msAPIs/users");
const { getEventsByOwnerID } = require("../../msAPIs/events");
const { getGroupByID } = require("../../msAPIs/groups");

const tokenOutOfDate = {
  message: "Token out of date",
  status: 401,
};

const throwCustomError = (error) => {
  const ms = JSON.parse(error.message);
  throw new Error(
    JSON.stringify({
      message: ms.message,
      status: ms.status,
    })
  );
};

// const  login = () => console.log("F");  Auth ya la tiene

const UserAuthcreate = async ({ input }) => {
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

const editProfile = async ({ token, input }) => {
  //Auth
  // try {
  //   // const ok = await loginVerify({ input: token });
  //   if (true) {
  //     return await
  //   } else {
  //     return tokenOutOfDate;
  //   }
  // } catch (error) {
  //   throwCustomError(error);
  // }
};

const userProfile = async ({ userId }) => {
  try {
    const user = await getUserByID({ userId: userId });

    const eventsCreated = await getEventsByOwnerID({
      type: "user",
      id: userId,
    });
    user.eventsCreated = eventsCreated;
    const groupsIdFollowing = await getGroupsByUser({ userId: userId });
    const groups = [];
    for (let i = 0; i < groupsIdFollowing.length; i++) {
      const group = await getGroupByID({
        groupId: groupsIdFollowing[i].group_id,
      });
      groups.push(group);
    }

    user.groupsFollowing = groups;
    //media
    return user;
  } catch (error) {
    throwCustomError(error);
  }
};

module.exports = {
  createUserAuth,
  editProfile,
  userProfile,
};
