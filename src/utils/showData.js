import { createSlice } from "@reduxjs/toolkit";

const showDataSlice=createSlice({
    name:'ShowData',
    initialState:{
        home:null,
        trending:null
    },
    reducers:{
        addHome:(state,action)=>{
            state.home=action.payload
        },
        addTrending:(state,action)=>{
            state.trending=action.payload
        }
    }
})

export const {addHome,addTrending}=showDataSlice.actions
export  default showDataSlice.reducer