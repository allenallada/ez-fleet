import { createSlice } from "@reduxjs/toolkit";

export const vehicleSlice = createSlice({
    name : 'vehicle',
    initialState : {
        vehicles : [],
        count : 0
    },
    reducers : {
        updateVehicles : (state, action) => {
            state.vehicles = action.payload
        },
        updateCount : (state, action) => {
            state.count = action.payload
        }
    }
});

export default vehicleSlice.reducer;