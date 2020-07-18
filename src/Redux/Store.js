import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { combineReducers } from "redux";

import { FetchDrinkReducer,addDrink,editDrink,deleteDrink } from "./Reducers/MainPageReducers.js";

const Reducers = combineReducers({
  FetchDrinkReducer,
  addDrink,
  editDrink,
  deleteDrink
});

const middleware = applyMiddleware(thunkMiddleware);

export default createStore(Reducers, middleware);
