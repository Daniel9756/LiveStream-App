import { axiosInstance } from './axiosDefaults';

export const apiRequest = (method, url, data = {}, token) => {
  // console.log(data, "Yes from apiRequest")
  const response = axiosInstance(token)({
    method,
    url,
    data,
    token,
  });
  return response;
};