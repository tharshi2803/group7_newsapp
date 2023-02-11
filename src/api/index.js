import axios from 'axios';

//const BASE_URL = 'https://08dc-2402-4000-2381-9d38-c48c-17ff-fecf-8378.ap.ngrok.io';
// Login User
export const loginUser = (values) => {

    const url = 'https://08dc-2402-4000-2381-9d38-c48c-17ff-fecf-8378.ap.ngrok.io/api/user/login';

    return axios.post(url, values)
        .then(response => response.data);
}