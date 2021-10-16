import { createReducer } from 'reduxsauce';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import Types from './actionTypes';

export const INITIAL_STATE = {
    isRegistering: false,
    isLoginIn: false,
    isAuthenticated: false,
    error: false,
    data: null,
    token: null
};


export const login = (state = INITIAL_STATE, action) => {
    return {...state, isLoginIn: true, error: false};
};

export const loginSucess = (state = INITIAL_STATE, action) => {
    storage.setItem('token', action.responseData.token)
    return {
        ...state,
        isLoginIn: false,
        error: false,
        isAuthenticated: true,
        token: action.responseData.token
    };
};

export const loginFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoginIn: false,
        error: true,
        error_message: action.error,
        isAuthenticated: false,
    };
};

export const register = (state = INITIAL_STATE, action) => {
    return {...state, isRegistering: true, error: false};
};

export const registerSucess = (state = INITIAL_STATE, action) => {
    storage.setItem('token', action.responseData.token)
    return {
        ...state,
        isRegistering: false,
        error: false,
        isAuthenticated: true,
        token: action.responseData.token
    };
};

export const registerFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isRegistering: false,
        error: true,
        error_message: action.error,
        isAuthenticated: false,
    };
};

export const HANDLERS = {
    
    [Types.LOGIN_REQUEST]: login,
    [Types.LOGIN_SUCCESS]: loginSucess,
    [Types.LOGIN_FAILURE]: loginFailure,

    [Types.REGISTER_REQUEST]: register,
    [Types.REGISTER_SUCCESS]: registerSucess,
    [Types.REGISTER_FAILURE]: registerFailure,
  
};

const persistConfig = {
    key: 'auth',
    storage: storage,
    blacklist: ['isLoginIn','isRegistering']
  };
  
  const AuthReducer = createReducer(INITIAL_STATE, HANDLERS);
  export default persistReducer(persistConfig, AuthReducer)
  