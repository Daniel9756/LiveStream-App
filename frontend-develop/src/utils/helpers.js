import axios from 'axios';

export const setAuthToken = token => {
    if(token) {
        axios.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete axios.defaults.headers.common['x-auth-token'];

    }
}


export const handleError = error => {
    if (error.response === undefined) {
        return "Cannot reach server"
    } else if (error.response && error.response.status === 500) {
        return "A server error occured"
    } else if (error.response && error.response.status < 500) {
        return error.response.data
    }
}