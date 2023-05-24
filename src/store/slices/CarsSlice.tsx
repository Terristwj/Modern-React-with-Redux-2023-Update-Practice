import { createSlice, nanoid } from "@reduxjs/toolkit";

interface Car {
  id: string;
  name: string;
  cost: number;
}
let initialCars: Car[] = [];

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    cars: initialCars,
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      // action.payload === {name:string, cost:number}
      state.cars.push({
        id: nanoid(),
        name: action.payload.name,
        cost: action.payload.cost,
      });
    },
    removeCar(state, action) {
      // action.payload === {id:string}
      state.cars = state.cars.filter((car) => {
        return car.id !== action.payload;
      });
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
