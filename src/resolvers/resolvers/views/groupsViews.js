const { updateGroup, getTypeById, getAllGroups, createGroup, getGroupByID } = require("../../msAPIs/groups");
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



/*
    La idea de esta funcion es que liste todos los grupos que hay.
    Se necesita:
      - La informacion de todos los grupos (ms Grupos)
      - La cantidad de seguidores que tiene un grupo (ms Usuarios)
      - La imagen del grupo (ms medios)


    La funcion retorna este esquema, si lo quieren cambiar vayan a schemas/views.js
    type AllGroupsSearch {
      id_group: ID!
      type: String!
      name: String!
      description: String!
      created_date: String!
      contact_number: String
      status: String!
      followers: Int!
    }
*/
const allGroups = async () => {
  try {
    const groups = await getAllGroups();
    for (let i = 0; i < groups.length; i++) {
      const id_group = groups[i].id_group;
      const id_type = groups[i].id_type;
      const {name} = await getTypeById({id:id_type})
      
      // aqui agrego el campo type al esquema, de la misma forma podemos hacer con la imagen y seguidores
      groups[i].type = name;
      
      //user
      //media
    }
    return groups;
  } catch (error) {
    console.log(error)
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






/*
    La funcion retorna este esquema, si lo quieren cambiar vayan a schemas/views.js
    type GroupsProfileSearch {
      id_group: ID
      type: String
      name: String
      description: String
      created_date: String
      contact_number: String
      status: String
      followers: Int
      events: [Event!]
    }
*/
const createNewGroup = async ({ id_user, input, token }) => {
  var group;


  // tener encuenta como se recibe IMG
  // Auth


  // Verificar que el usuario sea administrador 
  
  // Crear el grupo
  try {
    group = await createGroup({ input : input })
    // const id_group = data
    const id_group = group.id_group;
    const id_type = group.id_type;

    


    const {name} = await getTypeById({id:id_type})
    group.type = name;


    
  } catch (error) {
    
    const ms = JSON.parse(error.message);
    throw new Error(
      JSON.stringify({
        message: ms.message,
        status: ms.status,
      })
    );
  }

  // agregar al usuario como admin del grupo


  //Media
  return group;
};



/*
    La idea de esta funcion es que retorne el perfil de un grupo, asi como sus eventos
    Se necesita:
      - Group : La informacion de un grupo
      - User : Obtener los seguidores de un grupo
      - Media : Obtener la imagen del grupo  
      - Events : Obteners los eventos de un grupo 


    La funcion retorna este esquema, si lo quieren cambiar vayan a schemas/views.js
    type GroupsProfileSearch {
      id_group: ID
      type: String
      name: String
      description: String
      created_date: String
      contact_number: String
      status: String
      followers: Int
      events: [Event!]
    }
*/
const groupProfile = async ({ id }) => {

  // Obtener el grupo con el Id
  try {
      const group = await getGroupByID({groupId : id})
      const {name} = await getTypeById({id:group.id_type})
      
      // aqui agrego el campo type al esquema, de la misma forma podemos hacer con la imagen y seguidores
      group.type = name;
      
      // User : Obtener los seguidores de un grupo
      
      // Media : Obtener la imagen del grupo
      
      // Events : Obteners los eventos de un grupo 


    return group;
  } catch (error) {
    console.log(error)
    const ms = JSON.parse(error.message);
    throw new Error(
      JSON.stringify({
        message: ms.message,
        status: ms.status,
      })
    );
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
};
