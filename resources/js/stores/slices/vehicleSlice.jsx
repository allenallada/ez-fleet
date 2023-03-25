import { createSlice } from "@reduxjs/toolkit";

export const vehicleSlice = createSlice({
    name : 'vehicle',
    initialState : {
        vehicles : [],
        count : 0,
        form : false
    },
    reducers : {
        updateVehicles : (state, action) => {
            state.vehicles = action.payload;
        },
        updateCount : (state, action) => {
            state.count = action.payload;
        },
        updateForm : (state, action) => {
            state.form = action.payload;
        }
    }
});

export default vehicleSlice.reducer;