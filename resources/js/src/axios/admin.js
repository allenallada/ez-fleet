import axios from "axios";

const Admin = axios.create({
    baseURL: `${import.meta.env.VITE_APP_URL}/`,
    timeout: 1000,
});

Admin.login = (params) => Admin.post('/auth/login', params);

Admin.register = (params) => Admin.post('/auth/register', params);

Admin.status = () => Admin.get('/auth/status');

Admin.details = () => Admin.get('/admin/details');

Admin.updProfile = (params) => Admin.post('/admin/profile', params);

Admin.updPassword = (params) => Admin.post('/admin/password', params);

Admin.updAvatar = (params) => Admin.post('/admin/avatar', params);

export default Admin;
