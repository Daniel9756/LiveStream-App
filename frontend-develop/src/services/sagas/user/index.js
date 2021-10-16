import { call, put, takeLeading } from 'redux-saga/effects';
import { Creators, Types } from '../../redux/user/actions';
import {
  createprofile as createprofileApi,
  getUserProfile as getUserProfileApi
} from '../../api/user';
import { handleError } from '../../../utils/helpers';
import store from '../../redux/store';



export function* createUserProfile(actions) {
  try {
      const { data } = actions;
      yield call(createprofileApi, data, store.getState().auth.token);
      yield put(Creators.createUserProfileSuccess({}));
    } catch (error) {
      const error_message = handleError(error)
      yield put(Creators.createUserProfileFailure(error));
    }
}

export function* watchCreateUserProfile() {
  yield takeLeading(Types.CREATE_USER_PROFILE_REQUEST, createUserProfile);
}


export function* getUserProfile() {
    try {
      const response = yield call(getUserProfileApi,  store.getState().auth.token);
      yield put(Creators.getUserDetailsSuccess(response.data));
    } catch (error) {
      const error_message = handleError(error)
      yield put(Creators.getUserDetailsFailure(error_message.msg));
    }
  }
  
  export function* watchGetUser() {
    yield takeLeading(Types.GET_USER_DETAILS, getUserProfile);
  }