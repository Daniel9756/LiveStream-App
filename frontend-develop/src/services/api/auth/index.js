import { apiRequest } from '../apiRequest';

import { 
    LOGIN_URL,
    REGISTER_URL
} from '../urls';


export const login = data => {
    return apiRequest("POST", LOGIN_URL, data);
}

export const register = data => {
    return apiRequest("POST", REGISTER_URL, data);
}