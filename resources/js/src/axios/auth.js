import axios from "axios";

const Api = axios.create({
    baseURL: `${import.meta.env.VITE_APP_URL}/auth`,
    timeout: 1000,
});

Api.status = () => Api.get('/status');

Api.login = (params) => Api.post('/login', params);

export default Api;
