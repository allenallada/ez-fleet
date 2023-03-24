import {configureStore} from '@reduxjs/toolkit';
import adminReducer, { settingsSlice } from './slices/adminSlice';
import vehicleReduer, {vehicleSlice} from './slices/vehicleSlice';

export default configureStore({
    reducer : {
        admin : adminReducer,
        vehicle : vehicleReduer
    }
});

export const {updateLogin, updateDetails, updateToast} = settingsSlice.actions;
export const {updateVehicles} = vehicleSlice.actions;

