import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: { 
    AddItems: (state, action) => {
      const existItem = state.find((item) => item.id === action.payload.id);
      if (existItem) {
        existItem.qty += 1;
      } else {
        state.push({ ...action.payload, qty: 1 });
      }
    },
    RemoveItems: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    Increment: (state, action) => {
      const existItem = state.find((item) => item.id === action.payload);
      if (existItem) {
        existItem.qty += 1;
      }
    },
    Decrement: (state, action) => {
      const existItem = state.find((item) => item.id === action.payload);
      if (existItem && existItem.qty > 1) {
        existItem.qty -= 1;
      }
    }
    
    
    
  }
});

export const { AddItems, RemoveItems,Increment,Decrement} = cartSlice.actions;
export default cartSlice.reducer;


