import { apiRequest } from '../apiRequest';

import { 
    CREATE_PROFILE_URL,
    GET_PROFILE_URL
} from '../urls';


export const createprofile = (data,token) => {
    return apiRequest("POST", CREATE_PROFILE_URL, data, token);
}

export const getUserProfile = (token) => {
    return apiRequest('GET', GET_PROFILE_URL, null, token);
}