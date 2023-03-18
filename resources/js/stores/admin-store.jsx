import {configureStore} from '@reduxjs/toolkit';
import adminReducer from './slices/adminSlice';
import { settingsSlice } from './slices/adminSlice';


export default configureStore({
    reducer : {
        admin : adminReducer
    }
});

export const {updateLogin} = settingsSlice.actions;

