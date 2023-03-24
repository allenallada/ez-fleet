import axios from "axios";

const Account = axios.create({
    baseURL: `${import.meta.env.VITE_APP_URL}/account`,
    timeout: 1000,
});

Account.updProfile = (params) => Account.post('/profile', params);

Account.updPassword = (params) => Account.post('/password', params);

Account.updAvatar = (params) => Account.post('/avatar', params);

export default Account;
