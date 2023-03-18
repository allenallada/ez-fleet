import {createSlice} from '@reduxjs/toolkit';

export const settingsSlice = createSlice({
    name : 'admin',
    initialState : {
        login : false
    },
    reducers : {
        updateLogin : (state, action) => {
            state.login = action.payload;
        }
    }
});

export default settingsSlice.reducer;