import axios from "axios";

const Api = axios.create({
    baseURL: `${import.meta.env.VITE_APP_URL}/vehicle`,
    timeout: 1000,
});

Api.addVehicle = (params) => Api.post('', params);

Api.getVehicles = (params) => Api.get('', {params});

Api.getCount = (params) => Api.get('/count', {params});

Api.deleteVehicle = (params) => Api.delete('', {params});

Api.updateVehicle = (params) => Api.put('', params);

export default Api;
