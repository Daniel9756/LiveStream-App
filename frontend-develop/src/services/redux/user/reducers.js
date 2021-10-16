

import { createReducer } from 'reduxsauce';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import Types from './actionTypes';

export const INITIAL_STATE = {
    isCreatingProfile: false,
    isgettingProfile: false,
    error: false,
    user: null
};


export const createUserProfile = (state = INITIAL_STATE, action) => {
    return {...state, isCreatingProfile: true, error: false};
};

export const createUserProfileSucess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isCreatingProfile: false,
        error: false,
    };
};

export const createUserProfileFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isCreatingProfile: false,
        error: true,
        error_message: action.error,
    };
};


export const getUserProfile = (state = INITIAL_STATE, action) => {
    return {...state, isLoginIn: true, error: false};
};

export const getUserProfileSucess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isgettingProfile: false,
        error: false,
        user: action.responseData
    };
};

export const getUserProfileFailure = (state = INITIAL_STATE, action) => {
    
    return {
        ...state,
        isgettingProfile: false,
        error: true,
        error_message: action.error,
    };
};



export const HANDLERS = {
    
    [Types.CREATE_USER_PROFILE_REQUEST]: createUserProfile,
    [Types.CREATE_USER_PROFILE_SUCCESS]: createUserProfileSucess,
    [Types.CREATE_USER_PROFILE_FAILURE]: createUserProfileFailure,

    [Types.GET_USER_DETAILS]: getUserProfile,
    [Types.GET_USER_DETAILS_SUCCESS]: getUserProfileSucess,
    [Types.GET_USER_DETAILS_FAILURE]: getUserProfileFailure,
  
};

const persistConfig = {
    key: 'user',
    storage: storage,
    blacklist: ['isCreatingProfile']
  };
  
  const UserReducer = createReducer(INITIAL_STATE, HANDLERS);
  export default persistReducer(persistConfig, UserReducer)
  