import { createSlice } from "@reduxjs/toolkit";


const ItemActions = createSlice({
    name:'addToCard',
    initialState:{
        value:[]
    },
    reducers:{
        cardReducer:(state,action) =>{
            state.value.push(action.payload)
        }
    }
})

export const {addToCart} = ItemActions.actions
export default ItemActions.reducer