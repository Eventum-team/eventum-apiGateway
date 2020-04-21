const {
  updateGroup,
  getTypeById,
  getAllGroups,
  createGroup,
  getGroupByID,
  getGroupsByNameAndIdType,
  deleteGroup,
} = require("../../msAPIs/groups");
const { updateEvent, getEventsByOwnerID } = require("../../msAPIs/events");
const {
  getUsersByGroup,
  getAdminsByGroup,
  createUserGroup,
  getInterestedUsersByEvent,
} = require("../../msAPIs/users");

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

/*****************************
 *
 * La idea de esta funcion es construir la informacion que require un grupo.
 * Se necesita
 * - Group : La informacion de un grupo
 * - User : Obtener los seguidores de un grupo
 * - Media : Obtener la imagen del grupo
 *
 */
const buildGroups = async (groups) => {
  try {
    for (let i = 0; i < groups.length; i++) {
      const id_group = groups[i].id_group;
      const id_type = groups[i].id_type;
      const { name } = await getTypeById({ id: id_type });
      console.log(name);
      groups[i].type = name;
      const followers = await getUsersByGroup({ groupId: id_group });
      groups[i].followers = followers.length;
      const admins = await getAdminsByGroup({ groupId: id_group });
      groups[i].admins = admins;
      //media
      // groups[i].photo = await ...;
    }
  } catch (error) {
    throwCustomError(error);
  }
  return groups;
};

/*
    La idea de esta funcion es que filtre los grupos por id_type y nombre.
    Se necesita:
      - La informacion de los grupos filtrados (ms Grupos)
      - La cantidad de seguidores que tiene un grupo (ms Usuarios)
      - La imagen del grupo (ms medios)
*/
const filterGroups = async ({ id_type, name }) => {
  try {
    const groups = await getGroupsByNameAndIdType({
      id_type: id_type,
      name: name,
    });
    return await buildGroups(groups);
  } catch (error) {
    throwCustomError(error);
  }
};

/*
    La idea de esta funcion es que liste todos los grupos que hay.
    Se necesita:
      - La informacion de todos los grupos (ms Grupos)
      - La cantidad de seguidores que tiene un grupo (ms Usuarios)
      - La imagen del grupo (ms medios)
*/
const allGroups = async () => {
  try {
    const groups = await getAllGroups();
    return await buildGroups(groups);
  } catch (error) {
    throwCustomError(error);
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
    throwCustomError(error);
  }
};

const createNewGroup = async ({ id_user, input, token }) => {
  //validacion
  try {
    const group = await createGroup({ input: input });
    // const id_group = data
    const id_group = group.id_group;
    const id_type = group.id_type;
    const { name } = await getTypeById({ id: id_type });
    group.type = name;
    const message = await createUserGroup({
      input: { user_id: id_user, group_id: id_group, status: "admin" },
    });
    return group;
    //Media
  } catch (error) {
    throwCustomError(error);
  }
};

/*
    La idea de esta funcion es que retorne el perfil de un grupo, asi como sus eventos
    Se necesita:
      - Events : Obteners los eventos de un grupo 
*/
const groupProfile = async ({ id }) => {
  // Obtener el grupo con el Id
  try {
    const group = await getGroupByID({ groupId: id });
    const buildedGroup = (await buildGroups([group]))[0];
    const events = await getEventsByOwnerID({ type: "group", id: id });
    buildedGroup.events = events;
    return buildedGroup;
  } catch (error) {
    throwCustomError(error);
  }
};

const deleteGroupAuth = async ({ id_user, id_group, token }) => {
  // tener encuenta como se recibe IMG
  try {
    // Auth
    const response = await deleteGroup({id: id_group});

    // Media : borrar la foto asignada a id_group
    return response;
  } catch (error) {
    throwCustomError(error);
  }
};

module.exports = {
  editGroup,
  allGroups,
  createNewGroup,
  groupProfile,
  createNewGroup,
  filterGroups,
  deleteGroupAuth,
};
