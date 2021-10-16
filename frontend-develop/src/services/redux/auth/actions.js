import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions(
    {
        loginRequest: ['data'],
        loginSuccess: ['responseData'],
        loginFailure: ['error'],

        registerRequest: ['data'],
        registerSuccess: ['responseData'],
        registerFailure: ['error'],

        
    },{},
);