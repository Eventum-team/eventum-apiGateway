const todayEvents = () => {
  const today = Date.now(); // fecha desde 00:00:00 hasta 23:59:59
  // Events
  // Media
};

const AllEvents = () => {
  //Event
  //Media
  //User
};

const filterEvents = async ({ id_type, name }) => {
  try {
    const ok = await loginVerify({ input: token });
    if (ok === "ok") {
      const events = await updateGroup({ id: input.id_group, input: input });
      // users-ms

      return events;
    } else {
    }
  } catch (error) {
    return tokenOutOfDate;
  }
};

const createEvent = ({ input, token }) => {
  //Auth
  //Event
};
const editEvent = async ({ id, input, token }) => {
  try {
    const ok = await loginVerify({ input: token });
    if (ok === "ok") {
      const message = await updateEvent({ id: id, input: input });
      return message;
    } else {
      console.log("Not ok");
    }
  } catch (error) {
    console.log("error 2");
  }
};
const deleteEvent = ({ id, token }) => {
  //Auth
  //Event
};
const eventsByGroup = ({ id_group }) => {
  // Event
  // Media
};
const followersByEvent = ({ id_event }) => {
  // User
};

const EventProfile = ({ id_event }) => {
  // Event
  // Media
  //User
  //Comments
};
