import { createSlice } from "@reduxjs/toolkit";
import { addWish } from "./WishListSlice";

/**
 * formSlice
 * @summary - Input elements of item that is being addded
 * @property {string} name - Input of item name.
 * @property {number} cost - Input of item cost.
 */
const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {
    changeName(state, action) {
      // Payload === {name: string}
      state.name = action.payload;
    },
    changeCost(state, action) {
      // Payload === {cost: number}
      state.cost = action.payload;
    },
  },
  extraReducers(builder) {
    // When item is being added (On form submit)
    builder.addCase(addWish, (state) => {
      state.name = "";
      state.cost = 0;
    });
  },
});

export const { changeName, changeCost } = formSlice.actions;
export const formReducer = formSlice.reducer;
