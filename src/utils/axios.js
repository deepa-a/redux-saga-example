import axios from 'axios';
import { API_BASE_URL } from '../constants/apiEndpoints';

const headers = {
  // TODO: enable for production
  // 'ocs-client-id': 'mocca',
  // 'ocs-user-id': 'mocca_admin',
  'Content-Type': 'application/json',
};

const instance = axios.create({
  headers,
  baseURL: `${API_BASE_URL}`,
});

instance.interceptors.request.use(config => config,
  error => Promise.reject(error));

instance.interceptors.response.use(response => response, (error) => {
  if (!error.response) {
    console.log('Network error');
  } else {
    if (error.response.status === 401 || error.response.status === 403) {
      console.log('Not authorized');
    }
    if (error.response.status === 500) {
      console.log(error.response.data);
    }
  }

  return Promise.reject(error);
});

export default instance;
