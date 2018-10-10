import { API_BASE_URL, ENDPOINTS } from 'constants/apiEndpoints';
import axios from 'utils/axios';

export function* getSubscriberSaga() {
  const json = yield axios.get('/subscribers/61444444444').then(response => {
        if(response.status === 200){
            return response.data;
        } else{
            console.log(response)
        }
    })
}
