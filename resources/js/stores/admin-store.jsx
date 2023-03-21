import {configureStore} from '@reduxjs/toolkit';
import adminReducer, { settingsSlice } from './slices/adminSlice';

export default configureStore({
    reducer : {
        admin : adminReducer
    }
});

export const {updateLogin, updateDetails} = settingsSlice.actions;

