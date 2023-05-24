import { createSlice, nanoid } from "@reduxjs/toolkit";

export interface iWish {
  id: string;
  name: string;
  cost: number;
}
let initialWishList: iWish[] = [];

const wishListSlice = createSlice({
  name: "wishList",
  initialState: {
    searchTerm: "",
    wishesArray: initialWishList,
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addWish(state, action) {
      // action.payload === {name:string, cost:number}
      state.wishesArray.push({
        id: nanoid(),
        name: action.payload.name,
        cost: action.payload.cost,
      });
    },
    removeWish(state, action) {
      // action.payload === {id:string}
      state.wishesArray = state.wishesArray.filter((wish) => {
        return wish.id !== action.payload;
      });
    },
  },
});

export const { changeSearchTerm, addWish, removeWish } = wishListSlice.actions;
export const wishListReducer = wishListSlice.reducer;
