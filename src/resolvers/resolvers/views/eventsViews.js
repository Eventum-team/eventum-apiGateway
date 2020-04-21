const {
  getEventsByRangeDate,
  getAllEvents,
  addEvent,
  updateEvent,
  deleteEventById,
  getEventsByOwnerID,
  getEventByID,
  getEventsByName,
} = require("../../msAPIs/events");
const { getCommentsByID } = require("../../msAPIs/comments");

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

const buildEvents = async (events) => {
  try {
    for (let i = 0; i < events.length; i++) {
      const id = events[i].id;
      events[i].followers = await getAssistantUsersByEvent;
      ({ eventId: id });
      // events[i].photo = await eventPhoto(id);
    }
    return events;
  } catch (error) {
    throwCustomError(error);
  }
};

const eventPhoto = (eventId) => {
  // Media
  return "path/image.png";
};

const todayEvents = async () => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const start = `${now.toISOString().substring(0, 22)}Z`;
  now.setHours(23, 59, 59, 0);
  const end = `${now.toISOString().substring(0, 22)}Z`;
  try {
    const events = await getEventsByRangeDate({ start: start, end: end });
    return buildEvents(events);
  } catch (error) {
    throwCustomError(error);
  }
};

const allEvents = async () => {
  try {
    const events = await getAllEvents();
    return buildEvents(events);
  } catch (error) {
    throwCustomError(error);
  }
};

const filterEvents = async ({ id_type, name }) => {
  try {
    const ok = await loginVerify({ input: token });
    if (ok === "ok") {
      const events = await updateGroup({ id: input.id_group, input: input });
      // users-ms

      return events;
    } else {
      return tokenOutOfDate;
    }
  } catch (error) {
    throwCustomError(error);
  }
};

const eventsByGroup = async ({ id_group }) => {
  try {
    const events = await getEventsByOwnerID({ id: id_group, type: "group" });
    return buildEvents(events);
  } catch (error) {
    throwCustomError(error);
  }
};

const eventsByName = async (name) => {
  try {
    const events = await getEventsByName(name);
    return buildEvents(events);
  } catch (error) {
    throwCustomError(error);
  }
};

const createEvent = async ({ input, token }) => {
  try {
    // const ok = await loginVerify({ input: token });
    const ok = "ok";
    if (ok === "ok") {
      const message = await addEvent({ input: input });
      return message;
    } else {
      return tokenOutOfDate;
    }
  } catch (error) {
    throwCustomError(error);
  }
};

const editEvent = async ({ id, input, token }) => {
  try {
    // const ok = await loginVerify({ input: token });
    const ok = "ok";
    if (ok === "ok") {
      const message = await updateEvent({ id: id, input: input });
      return message;
    } else {
      return tokenOutOfDate;
    }
  } catch (error) {
    throwCustomError(error);
  }
};

const deleteEvent = async ({ id, token }) => {
  try {
    // const ok = await loginVerify({ input: token });
    const ok = "ok";
    if (ok === "ok") {
      const message = await deleteEventById({ id: id });
      return message;
    } else {
      return tokenOutOfDate;
    }
  } catch (error) {
    throwCustomError(error);
  }
};

const eventProfile = async (eventId) => {
  try {
    const event = await getEventByID(eventId);
    const comments = await getCommentsByID(eventId);
    // for (let i = 0; i <= comments.length; i++) {
    //   const id = comments.idUser;
    //   const user = await getUserByID({ userId: id });
    //   comments.userName = user.name;
    // }
    event.comments = comments;
    // event.followers = funcion
    return event;
  } catch (error) {
    throwCustomError(error);
  }
};

module.exports = {
  todayEvents,
  allEvents,
  createEvent,
  editEvent,
  deleteEvent,
  eventsByGroup,
  eventProfile,
  eventsByName,
};
