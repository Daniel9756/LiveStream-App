

import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions(
    {
        createEventRequest: ['data'],
        createEventSuccess: ['data'],
        createEventFailure: ['error'],
        

        getAllEvents: null,
        getAllEventSuccess: ['data'],
        getAllEventFailure: ['error'],

        getOneEvent: ['data'],
        getOneEventSuccess: ['data'],
        getOneEventFailure: ['data'],
    
    },{},
);