import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { combineReducers } from "redux";

import { FetchDrinkReducer } from "./Reducers/MainPageReducers.js";

const Reducers = combineReducers({
  FetchDrinkReducer
});

const middleware = applyMiddleware(thunkMiddleware);

export default createStore(Reducers, middleware);
