import { createSlice } from "@reduxjs/toolkit";

export const vehicleSlice = createSlice({
    name : 'vehicle',
    initialState : {
        vehicles : [
            {
                plate_number: "test 1",
                brand: "toyota",
                model: "corolla",
                status: "active",
                image_src: "https://ez-fleet.local.com/img/vehicles/hatchback.png",
                updated_date: "2023-03-24T04:51:38.000000Z",
                creation_date: "2023-03-24T04:51:38.000000Z",
                vehicle_no: 11
            },
            {
                plate_number: "test 2",
                brand: "mitsubishi",
                model: "lancer",
                status: "inactive",
                image_src: "https://ez-fleet.local.com/img/vehicles/sedan.png",
                updated_date: "2023-03-24T04:51:38.000000Z",
                creation_date: "2023-03-24T04:51:38.000000Z",
                vehicle_no: 12
            },
            {
                plate_number: "test 3",
                brand: "kawasaki",
                model: "rouser",
                status: "repair",
                image_src: "https://ez-fleet.local.com/img/vehicles/motorcycle.png",
                updated_date: "2023-03-24T04:51:38.000000Z",
                creation_date: "2023-03-24T04:51:38.000000Z",
                vehicle_no: 13
            },
            {
                plate_number: "test 3",
                brand: "kawasaki",
                model: "rouser",
                status: "repair",
                image_src: "https://ez-fleet.local.com/img/vehicles/motorcycle.png",
                updated_date: "2023-03-24T04:51:38.000000Z",
                creation_date: "2023-03-24T04:51:38.000000Z",
                vehicle_no: 14
            },
            {
                plate_number: "test 3",
                brand: "kawasaki",
                model: "rouser",
                status: "repair",
                image_src: "https://ez-fleet.local.com/img/vehicles/motorcycle.png",
                updated_date: "2023-03-24T04:51:38.000000Z",
                creation_date: "2023-03-24T04:51:38.000000Z",
                vehicle_no: 15
            },
            {
                plate_number: "test 3",
                brand: "kawasaki",
                model: "rouser",
                status: "repair",
                image_src: "https://ez-fleet.local.com/img/vehicles/motorcycle.png",
                updated_date: "2023-03-24T04:51:38.000000Z",
                creation_date: "2023-03-24T04:51:38.000000Z",
                vehicle_no: 16
            },
            {
                plate_number: "test 3",
                brand: "kawasaki",
                model: "rouser",
                status: "repair",
                image_src: "https://ez-fleet.local.com/img/vehicles/motorcycle.png",
                updated_date: "2023-03-24T04:51:38.000000Z",
                creation_date: "2023-03-24T04:51:38.000000Z",
                vehicle_no: 17
            },
            {
                plate_number: "test 3",
                brand: "kawasaki",
                model: "rouser",
                status: "repair",
                image_src: "https://ez-fleet.local.com/img/vehicles/motorcycle.png",
                updated_date: "2023-03-24T04:51:38.000000Z",
                creation_date: "2023-03-24T04:51:38.000000Z",
                vehicle_no: 18
            },
            {
                plate_number: "test 3",
                brand: "kawasaki",
                model: "rouser",
                status: "repair",
                image_src: "https://ez-fleet.local.com/img/vehicles/motorcycle.png",
                updated_date: "2023-03-24T04:51:38.000000Z",
                creation_date: "2023-03-24T04:51:38.000000Z",
                vehicle_no: 19
            },
            {
                plate_number: "test 3",
                brand: "kawasaki",
                model: "rouser",
                status: "repair",
                image_src: "https://ez-fleet.local.com/img/vehicles/motorcycle.png",
                updated_date: "2023-03-24T04:51:38.000000Z",
                creation_date: "2023-03-24T04:51:38.000000Z",
                vehicle_no: 20
            },
            {
                plate_number: "test 3",
                brand: "kawasaki",
                model: "rouser",
                status: "repair",
                image_src: "https://ez-fleet.local.com/img/vehicles/motorcycle.png",
                updated_date: "2023-03-24T04:51:38.000000Z",
                creation_date: "2023-03-24T04:51:38.000000Z",
                vehicle_no: 21
            },
        ],
    },
    reducers : {
        updateVehicles : (state, action) => {
            state.vehicles = action.payload
        }
    }
});

export default vehicleSlice.reducer;