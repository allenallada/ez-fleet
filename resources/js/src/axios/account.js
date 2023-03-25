import axios from "axios";

const Api = axios.create({
    baseURL: `${import.meta.env.VITE_APP_URL}/account`,
    timeout: 1000,
});

Api.updProfile = (params) => Api.post('/profile', params);

Api.updPassword = (params) => Api.post('/password', params);

Api.updAvatar = (params) => Api.post('/avatar', params);

Api.register = (params) => Api.post('/register', params);

Api.details = (account_no) => Api.get(`/details/${account_no}`);

export default Api;
