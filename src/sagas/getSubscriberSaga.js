import { API_BASE_URL, ENDPOINTS } from '../constants/apiEndpoints';
import axios from '../utils/axios';

export default function* getSubscriberSaga() {
  const json = yield axios.get('/subscribers/61444444444').then((response) => {
    if (response.status === 200) {
      return response.data;
    }
    console.log(response);
    return null;
  });
}
