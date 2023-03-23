import {createSlice} from '@reduxjs/toolkit';

export const settingsSlice = createSlice({
    name : 'admin',
    initialState : {
        login : false,
        details : false,
        toast : {
            message : '',
            severity : 'success'
        }
    },
    reducers : {
        updateLogin : (state, action) => {
            state.login = action.payload;
        },
        updateDetails : (state, action) => {
            state.details = action.payload;
        },
        updateToast : (state, action) => {
            state.toast = action.payload;
        }
    }
});

export default settingsSlice.reducer;