import axios from 'axios';

// Login User
export const loginUser = (values) => {
    const url = 'api/users/login';

    return axios.post(url, values)
        .then(response => response.data);
}