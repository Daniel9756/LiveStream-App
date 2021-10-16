

import { createTypes } from 'reduxsauce';

export default createTypes(
    `
    
    CREATE_EVENT_REQUEST
    CREATE_EVENT_SUCCESS
    CREATE_EVENT_FAILURE

    
    GET_ALL_EVENTS
    GET_ALL_EVENT_SUCCESS
    GET_ALL_EVENT_FAILURE

    GET_ONE_EVENT
    GET_ONE_EVENT_SUCCESS
    GET_ONE_EVENT_FAILURE

    `,
    {},
);