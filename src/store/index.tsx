// Step 1: Import Redux:TK
import { configureStore } from "@reduxjs/toolkit";

// Step 2: Import all types, reducers, actions
import {
  iWish,
  wishListReducer,
  addWish,
  removeWish,
  changeSearchTerm,
} from "./slices/WishListSlice";
import { formReducer, changeName, changeCost } from "./slices/FormSlice";

// Step 3: Assemble the configurations
const store = configureStore({
  reducer: {
    wishList: wishListReducer,
    form: formReducer,
  },
});

// Step 4: Export everything
export type { iWish };
export { store, changeName, changeCost, addWish, removeWish, changeSearchTerm };

/**
 * IMPORTANT
 * Every Redux:TK feature must be imported from here
 */
