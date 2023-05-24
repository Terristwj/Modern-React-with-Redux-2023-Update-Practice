import { configureStore } from "@reduxjs/toolkit";
import {
  wishListReducer,
  addWish,
  removeWish,
  changeSearchTerm,
} from "./slices/WishListSlice";
import { formReducer, changeName, changeCost } from "./slices/FormSlice";

const store = configureStore({
  reducer: {
    wishList: wishListReducer,
    form: formReducer,
  },
});

export { store, changeName, changeCost, addWish, removeWish, changeSearchTerm };
