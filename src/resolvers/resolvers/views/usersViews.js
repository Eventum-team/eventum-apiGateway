const { loginVerify, createUserAuth } = require("../../msAPIs/auth");
const {
  getUserByID,
  getGroupsByUser,
  createUser,
} = require("../../msAPIs/users");
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

const userAuthcreate = async ({ input }) => {
  try {
    const userData = {
      input: {
        name: input.name,
        phone_number: input.phone_number,
        age: input.age,
        career: input.career,
        status: input.status,
      },
    };

    const r = await createUser(userData);
    const idUser = r.message.split(" ");
    const authData = {
      input: {
        username: input.username,
        password: input.password,
        idUser: idUser[idUser.length - 1],
      },
    };

    const res = await createUserAuth(authData);
    return res;
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
  userAuthcreate,
  editProfile,
  userProfile,
};
