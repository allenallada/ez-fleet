import axios from "axios";

const Vehicle = axios.create({
    baseURL: `${import.meta.env.VITE_APP_URL}/vehicle`,
    timeout: 1000,
});

Vehicle.addVehicle = (params) => Vehicle.post('', params);

Vehicle.getVehicles = (params) => Vehicle.get('', {params});

Vehicle.getCount = (params) => Vehicle.get('/count', {params});

export default Vehicle;
