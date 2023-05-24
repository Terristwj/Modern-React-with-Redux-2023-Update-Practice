import { createSlice, nanoid } from "@reduxjs/toolkit";

/**
 * iWish
 * @property {string} id - Randomly generated.
 * @property {string} name - Not unique.
 * @property {number} cost
 */
export interface iWish {
  id: string;
  name: string;
  cost: number;
}
let initialWishList: iWish[] = [];

/**
 * wishListSlice
 * @summary - Stores user's wishlist and search result
 * @property {string} searchTerm - To check against each wish.
 * @property {iWish[]} wishesArray
 */
const wishListSlice = createSlice({
  name: "wishList",
  initialState: {
    searchTerm: "",
    wishesArray: initialWishList,
  },
  reducers: {
    changeSearchTerm(state, action) {
      // action.payload === {searchTerm: string}
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
      // Returns filtered wishlist
      state.wishesArray = state.wishesArray.filter((wish) => {
        return wish.id !== action.payload;
      });
    },
  },
});

export const { changeSearchTerm, addWish, removeWish } = wishListSlice.actions;
export const wishListReducer = wishListSlice.reducer;
