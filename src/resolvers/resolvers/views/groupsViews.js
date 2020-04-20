const { updateGroup } = require("../../msAPIs/groups");
const { updateEvent } = require("../../msAPIs/events");

const tokenOutOfDate = {
  message: "Token out of date",
  status: 401,
};

const filterGroups = ({ id_type, name }) => {
  //Groups
  //Media
  //User
};

const AllGroups = async () => {
  try {
    const groups = await updateGroup({ id: input.id_group, input: input });
    for (let i = 0; i < groups.length; i++) {
      const id = groups[i].id_group;
      //user
      //media
    }
  } catch (error) {
    const ms = JSON.parse(error.message);
    throw new Error(
      JSON.stringify({
        message: ms.message,
        status: ms.status,
      })
    );
  }
};

const editGroup = async ({ id_user, input, token }) => {
  try {
    // const ok = await loginVerify({ input: token });
    if (true) {
      return await updateGroup({ id: input.id_group, input: input });
    } else {
      return tokenOutOfDate;
    }
  } catch (error) {
    const ms = JSON.parse(error.message);
    throw new Error(
      JSON.stringify({
        message: ms.message,
        status: ms.status,
      })
    );
  }
};

const createGroup = ({ id_user, input, token }) => {
  // tener encuenta como se recibe IMG
  //Auth
  //Groups
  //Media
};
const groupProfile = ({ id }) => {
  // Group
  // User
  // Events
};

const deleteGroup = ({ id_user, id_event, token }) => {
  // tener encuenta como se recibe IMG
  //Groups
  //Media
  //Auth
};

module.exports = { editGroup };
