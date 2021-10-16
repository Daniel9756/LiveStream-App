import { all } from 'redux-saga/effects';

import {
  watchLogin,
  watchRegister,
} from './auth';

import {
  watchCreateUserProfile,
  watchGetUser,
} from './user';

import {
  watchCreateEvent,
  watchGetAllEvents,
  watchGetOneEvent,
} from './event';

export default function* rootSaga() {
    yield all([
        watchLogin(),
        watchRegister(),
        watchCreateUserProfile(),
        watchGetUser(),
        watchCreateEvent(),
        watchGetAllEvents(),
        watchGetOneEvent(), 
    ]);
}
