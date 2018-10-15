import { API_BASE_URL } from '../constants/apiEndpoints';
import axios from 'axios';

const headers = {
    "ocs-client-id": "mocca",
    "ocs-user-id": "mocca_admin",
    "Content-Type": "application/json"
};

const instance = axios.create({
    baseURL : `${API_BASE_URL}`,
    headers: headers
});


export default instance;