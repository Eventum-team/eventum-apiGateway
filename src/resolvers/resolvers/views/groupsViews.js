const {
  updateGroup,
  getTypeById,
  getAllGroups,
  createGroup,
  getGroupByID,
  getGroupsByNameAndIdType,
} = require("../../msAPIs/groups");
const { updateEvent } = require("../../msAPIs/events");

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
  try{
    for (let i = 0; i < groups.length; i++) {
      const id_group = groups[i].id_group;
      const id_type = groups[i].id_type;
      const { name } = await getTypeById({ id: id_type });
  
      // aqui agrego el campo type al esquema, de la misma forma podemos hacer con la imagen y seguidores
      groups[i].type = name;
  
      //user
      // groups[i].followers = await ...;

      //media
      // groups[i].photo = await ...;
    }
  } catch (error){
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

  // verificar que el usuario sea administrador de ese grupo

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
  var group;

  // tener encuenta como se recibe IMG
  // Auth

  // Verificar que el usuario sea administrador

  // Crear el grupo
  try {
    group = await createGroup({ input: input });
    // const id_group = data
    const id_group = group.id_group;
    const id_type = group.id_type;

    const { name } = await getTypeById({ id: id_type });
    group.type = name;
  } catch (error) {
    throwCustomError(error);
  }

  // agregar al usuario como admin del grupo

  //Media

  return group;
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
    const buildedGroup =  (await buildGroups([group]))[0];

    // Events : Obteners los eventos de un grupo
    // buildedGroup.events = await ...
    
    return buildedGroup;
  } catch (error) {
    throwCustomError(error);
  }
};

const deleteGroup = async ({ id_user, id_event, token }) => {
  // tener encuenta como se recibe IMG
  //Groups
  //Media
  //Auth
};

module.exports = {
  editGroup,
  allGroups,
  createNewGroup,
  groupProfile,
  createNewGroup,
  filterGroups,
};
