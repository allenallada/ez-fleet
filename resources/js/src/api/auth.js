import axios from "axios";



const Auth = axios.create({
    baseURL: `${import.meta.env.VITE_APP_URL}/auth`,
    timeout: 1000,
});

export default Auth;