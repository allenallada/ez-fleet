import axios from "axios";

const Auth = axios.create({
    baseURL: 'https://ez-fleet.local.com/api/auth',
    timeout: 1000,
});

export default Auth;