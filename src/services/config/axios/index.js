import {BASE_URL} from '../backendURL';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});
