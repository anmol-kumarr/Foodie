import { configureStore } from "@reduxjs/toolkit";
import locationSlice from "./locationSlice";
import showData from "./showData";

const store=configureStore({
    reducer:{
        location:locationSlice,
        showData:showData
    }
})
export default store