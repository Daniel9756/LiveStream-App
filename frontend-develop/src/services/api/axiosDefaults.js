import axios from 'axios';

export const axiosInstance = token => {
  const instance = axios.create({
    headers: {
      
      Accept: 'application/json',
      // "Content-Type":'multipart/form-data',
      ...(token && {
        "x-auth-token": token,
      }),
    },
  });

  // maybe we can add an interceptor, which checks if token is expired and refreshes it.
  
  return instance;
};
