import axios from "axios";

const Auth = axios.create({
    baseURL: `${import.meta.env.VITE_APP_URL}/auth`,
    timeout: 1000,
});

Auth.login = (params) => Auth.post('/login', params);

Auth.register = (params) => Auth.post('/register', params);

Auth.status = () => Auth.get('/status');

Auth.details = () => Auth.get('/details');

export default Auth;
