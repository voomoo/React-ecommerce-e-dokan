import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
        searchInput: "",
        productsData: null,
        cartData: [],
        wishData: [],
    },
    reducers:{
        setSearchInput: (state, action) => {
            state.searchInput = action.payload;
        },
        setProductsData: (state, action) => {
            state.productsData = action.payload;
        },
        setCartData: (state, action) => {
            state.cartData = action.payload;
        },
        setWishData: (state, action) => {
            state.wishData = action.payload;
        }
    }
});

export const { setSearchInput, setProductsData, setCartData, setWishData } = productSlice.actions;

export const selectSearchInput = (state) => state.products.searchInput;
export const selectProductsData = (state) => state.products.productsData;
export const selectCartData = (state) => state.products.cartData;
export const selectWishData = (state) => state.products.wishData;

export default productSlice.reducer;