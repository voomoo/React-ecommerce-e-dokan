import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducers/productSlice";

export default configureStore({
    reducer:{
        products: productReducer,
    }
})