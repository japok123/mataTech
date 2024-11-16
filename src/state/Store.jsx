
import { configureStore } from "@reduxjs/toolkit";
import itemReducer from '../state/Items/ItemsState'
export const store = configureStore({
    reducer: {
        items:itemReducer
    }
});