import {createSlice} from '@reduxjs/toolkit';

export const settingsSlice = createSlice({
    name : 'admin',
    initialState : {
        login : false,
        account_no : false,
        user_name : false,
        details : false,
        toast : {
            message : '',
            severity : 'success'
        }
    },
    reducers : {
        updateLogin : (state, action) => {
            state.login = action.payload.auth;
            state.account_no = action.payload.account_no,
            state.user_name = action.payload.user_name
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