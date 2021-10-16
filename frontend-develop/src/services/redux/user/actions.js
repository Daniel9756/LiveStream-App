import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions(
    {
        createUserProfileRequest: ['data'],
        createUserProfileSuccess: ['responseData'],
        createUserProfileFailure: ['error'],

        getUserDetails: null,
        getUserDetailsSuccess: ['responseData'],
        getUserDetailsFailure: ['error'],
        
    },{},
);