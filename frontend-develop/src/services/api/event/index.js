import { apiRequest } from "../apiRequest";

import { CREATE_EVENT_URL, GET_EVENT_URL } from "../urls";

export const createEvent = (data, token) => {
  return apiRequest("POST", CREATE_EVENT_URL, data, token);
};

export const getAllEvents = (token) => {
  return apiRequest("GET", GET_EVENT_URL, null, token);
};

export const getOneEvent = (data, token) =>{    

  console.log(data, token, "get one event");
  return apiRequest(
    "GET",
    `https://coindesk.space/api/events/${data}`,
    null,
    token)
  };