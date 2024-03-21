import { BASE_URL } from '../backendURL';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL:  BASE_URL + "api",
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      console.log('Response data:', error.response.data);
      console.log('Response status:', error.response.status);
      console.log('Response headers:', error.response.headers);
      return error.response
    } else if (error.request) {
      console.log('Request:', error.request);
    } else {
      console.log('Error:', error.message);
    }
    console.log('Config:', error.config);
    return Promise.reject(error);
  }
);



