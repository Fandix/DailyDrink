import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

import FetchDrinkPresentation from "./ContainerComponents/FetchDrinkData";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div>
      <Provider store={store}>
        <FetchDrinkPresentation />
      </Provider>
      <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
  </div>,
  rootElement
);
