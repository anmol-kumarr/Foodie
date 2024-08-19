import { createSlice } from "@reduxjs/toolkit";

const locationSlice=createSlice({
    name:'location',
    initialState:{
        city:'Bengaluru',
        long:'77.594566',
        lat:'12.971599'
    },
    reducers:{
        addLocation:(state,action)=>{
            return state=action.payload
        }
    }
})
export const {addLocation}=locationSlice.actions
export default locationSlice.reducer