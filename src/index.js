import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./Redux/Store";

import FetchDrinkPresentation from "./ContainerComponents/FetchDrinkData";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <FetchDrinkPresentation />
  </Provider>,
  rootElement
);
