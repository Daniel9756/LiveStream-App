import { call, put, takeLeading } from "redux-saga/effects";
import { Creators, Types } from "../../redux/event/actions";
import {
  createEvent as createEventApi,
  getAllEvents as getAllEventsApi,
  getOneEvent as getOneEventApi,
} from "../../api/event";
import { handleError } from "../../../utils/helpers";
import store from "../../redux/store";

export function* createEvent(actions) {
  try {
    const { data } = actions;
    const response = yield call(
      createEventApi,
      data,
      store.getState().auth.token
    );
    yield put(Creators.createEventSuccess(response));
  } catch (error) {
    const error_message = handleError(error);
    yield put(Creators.createEventFailure(error));
  }
}

export function* watchCreateEvent() {
  yield takeLeading(Types.CREATE_EVENT_REQUEST, createEvent);
}

export function* getAllEvents() {
  try {
    const response = yield call(getAllEventsApi, store.getState().auth.token);
    yield put(Creators.getAllEventSuccess(response.data));
  } catch (error) {
    const error_message = handleError(error);
    yield put(Creators.getAllEventFailure(error_message.msg));
  }
}

export function* watchGetAllEvents() {
  yield takeLeading(Types.GET_ALL_EVENTS, getAllEvents);
}

export function* getOneEvent(actions) {
  const { data } = actions;
  try {
    const response = yield call(
      getOneEventApi,
      data,     
      store.getState().auth.token,
    );
    console.log(response, "response")
    yield put(Creators.getOneEventSuccess(response.data));
  } catch (error) {
    console.log(error, "error");
    const error_message = handleError(error);
    yield put(Creators.getOneEventFailure(error_message.msg));
  }
}

export function* watchGetOneEvent() {
  yield takeLeading(Types.GET_ONE_EVENT, getOneEvent);
}
