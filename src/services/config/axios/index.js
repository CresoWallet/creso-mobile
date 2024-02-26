import { BASE_URL } from '../backendURL';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log('Response data:', error.response.data);
      console.log('Response status:', error.response.status);
      console.log('Response headers:', error.response.headers);
      return error.response
    } else if (error.request) {
      // The request was made but no response was received
      console.log('Request:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error:', error.message);
    }
    console.log('Config:', error.config);
    return Promise.reject(error);
  }
);
