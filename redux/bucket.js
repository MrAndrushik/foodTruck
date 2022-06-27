import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: "bucket",
    initialState: {
        collection: [],
        liked: [],
        period: 1,
    },
    reducers: {
        toggleToLiked(state, action) {
            if (
                state.liked.filter((item) => item.id === action.payload.id)
                    .length > 0
            ) {
                state.liked = state.liked.filter(
                    (item) => item.id !== action.payload.id
                );
            } else {
                state.liked.push(action.payload);
            }
        },
        clearLiked(state) {
            state.liked = [];
        },
        addToCart(state, action) {
            if (
                state.collection.filter((item) => item.id === action.payload.id)
                    .length > 0
            ) {
                state.collection.map((item) =>
                    item.id === action.payload.id
                        ? (item.activeTariff = action.payload.activeTariff)
                        : item
                );
            } else {
                const quantity = { quantity: 1 };
                const obj = Object.assign(quantity, action.payload);
                state.collection.push(obj);
            }
        },
        incrQuantity(state, action) {
            state.collection.filter((item) => item.id === action.payload.id)[0]
                .quantity++;
        },
        decrQuantity(state, action) {
            if (
                state.collection.filter(
                    (item) => item.id === action.payload.id
                )[0].quantity === 1
            ) {
                state.collection = state.collection.filter(
                    (item) => item.id !== action.payload.id
                );
            } else {
                state.collection.filter(
                    (item) => item.id === action.payload.id
                )[0].quantity--;
            }
        },
        incPeriod(state) {
            state.period++;
        },
        decrPeriod(state) {
            if (state.period !== 1) {
                state.period--;
            }
        },
        clearBucket(state) {
            state.collection = [];
        },
        deleteProduct(state, action) {
            state.collection = state.collection.filter(
                (item) => item.id !== action.payload.id
            );
        },
    },
});

export default toolkitSlice.reducer;
export const {
    toggleToLiked,
    clearLiked,
    addToCart,
    incrQuantity,
    decrQuantity,
    incPeriod,
    decrPeriod,
    clearBucket,
    deleteProduct,
} = toolkitSlice.actions;
