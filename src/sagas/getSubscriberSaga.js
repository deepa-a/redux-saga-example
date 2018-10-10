import { API_BASE_URL, ENDPOINTS } from 'constants/apiEndpoints';
import { instance } from 'utils/apiUtils';
import axios from 'axios';

export function* getSubscriberSaga() {
  const json = yield axios.request({
      url: 'http://10.50.30.121:8200/ocsia-selfcare/prepaid/rest/v1/subscribers/61444444444',
      method: 'get',
      headers: {
        "ocs-client-id": "mocca",
        "ocs-user-id": "mocca_admin",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS"
      }
  }).then(response => {
        debugger;
        if(response.status === 200){
            return response.data;
        } else{
            console.log(response)
        }
    })
}
