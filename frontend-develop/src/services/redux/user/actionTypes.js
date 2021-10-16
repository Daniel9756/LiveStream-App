import { createTypes } from 'reduxsauce';

export default createTypes(
    `   
    CREATE_USER_PROFILE_REQUEST
    CREATE_USER_PROFILE_SUCCESS
    CREATE_USER_PROFILE_FAILURE

    GET_USER_DETAILS
    GET_USER_DETAILS_SUCCESS
    GET_USER_DETAILS_FAILURE

    `,
    {},
);