import { createReducer } from "reduxsauce";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import Types from "./actionTypes";

export const INITIAL_STATE = {
  isCreatingEvent: false,
  error: false,
  events: null,
 
};

export const createEvent = (state = INITIAL_STATE, action) => {
  return { ...state, isCreatingEvent: true, error: false, event: action.data };
};

export const createEventSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isCreatingEvent: false,
    error: false,
    event: action.data,
  };
};

export const createEventFailure = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isCreatingEvent: false,
    error: true,
    error_message: action.error,
    
  };
};


export const getAllEvents = (state = INITIAL_STATE, action) => {
  return {...state, isLoginIn: true, error: false, 
  events: action.data};
};

export const getAllEventSucess = (state = INITIAL_STATE, action) => {
  return {
      ...state,
      isgettingProfile: false,
      error: false,
      events: action.data
  };
};

export const getAllEventFailure = (state = INITIAL_STATE, action) => {
  
  return {
      ...state,
      isgettingProfile: false,
      error: true,
      error_message: action.error,
  };
};


export const getOneEvent = (state = INITIAL_STATE, action) => {
  return {...state, isLoginIn: true, error: false, 
  event: action.data};
};

export const getOneEventSucess = (state = INITIAL_STATE, action) => {
  return {
      ...state,
      isgettingProfile: false,
      error: false,
      event: action.data
  };
};

export const getOneEventFailure = (state = INITIAL_STATE, action) => {
  return {
      ...state,
      isgettingProfile: false,
      error: action.error,
      error_message: action.error,
  };
};

export const HANDLERS = {
  [Types.CREATE_EVENT_REQUEST]: createEvent,
  [Types.CREATE_EVENT_SUCCESS]: createEventSuccess,
  [Types.CREATE_EVENT_FAILURE]: createEventFailure,

  [Types.GET_ALL_EVENTS]: getAllEvents,
  [Types.GET_ALL_EVENT_SUCCESS]: getAllEventSucess,
  [Types.GET_ALL_EVENT_FAILURE]: getAllEventFailure,

  [Types.GET_ONE_EVENT]: getOneEvent,
  [Types.GET_ONE_EVENT_SUCCESS]: getOneEventSucess,
  [Types.GET_ONE_EVENT_FAILURE]: getOneEventFailure,
};

const persistConfig = {
  key: "event",
  storage: storage,
  blacklist: ["isCreatingEvent"],
};
  
const EventReducer = createReducer(INITIAL_STATE, HANDLERS);
export default persistReducer(persistConfig, EventReducer);
