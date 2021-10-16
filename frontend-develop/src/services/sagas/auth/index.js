import { call, put, takeLeading } from 'redux-saga/effects';
import { Creators, Types } from '../../redux/auth/actions';
import {
  login as loginApi,
  register as registerApi
} from '../../api/auth';
import { handleError } from '../../../utils/helpers';


export function* login(actions) {
    try {
      const { data } = actions;
      const response = yield call(loginApi, { ...data });
      yield put(Creators.loginSuccess(response.data));
    } catch (error) {
      const error_message = handleError(error)
      yield put(Creators.loginFailure(error_message.errors));
    }
}
  
export function* watchLogin() {
  yield takeLeading(Types.LOGIN_REQUEST, login);
}

export function* register(actions) {
  try {
    const { data } = actions;
    const response = yield call(registerApi, { ...data });
    yield put(Creators.registerSuccess(response.data));
  } catch (error) {
    const error_message = handleError(error)
    yield put(Creators.registerFailure(error_message.errors));
  }
}

export function* watchRegister() {
  yield takeLeading(Types.REGISTER_REQUEST, register);
}