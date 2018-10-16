import axios from 'axios';
import { API_BASE_URL } from 'constants/apiEndpoints';

const headers = {
  // 'ocs-client-id': 'mocca',
  // 'ocs-user-id': 'mocca_admin',
  'Content-Type': 'application/json',
};

const instance = axios.create({
  headers,
  baseURL: `${API_BASE_URL}`,
});

export default instance;
