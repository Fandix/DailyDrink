import axios from "../../Common/axios";

//====================================  Request Drink Response
export const RequestPost = () => {
  return {
    type: "REQUEST_POSTS"
  };
};

//====================================  Request Drink Response
const Fetch_Drink_State = (res, err) => {
  if (res) {
    return {
      type: "FETCH_DRINK_SUCCESS",
      payload: res.data
    };
  }
  return {
    type: "FETCH_DRINK_FAIL",
    payload: err
  };
};

export const Fetch_Drink = () => {
  return dispatch => {
    axios.get("https://stormy-citadel-71123.herokuapp.com/Drink")
      .then(res => {
        dispatch(Fetch_Drink_State(res, null));
      })
      .catch(err => {
        dispatch(Fetch_Drink_State(null, err));
      });
  };
};

//================================ Add Drink 
const addDrinkState = (res,err) => {
  if (res) {
    return {
      type: "ADD_DRINK_SUCCESS",
    };
  }
  return {
    type: "ADD_DRINK_FAIL",
  };
}

export const addDrink = (drink) => {
  return dispatch => {
    axios.post("https://stormy-citadel-71123.herokuapp.com/Drink",drink)
    .then(res => {
      dispatch(addDrinkState(res,null));
    })
    .catch(err => {
      dispatch(addDrinkState(null.err));
    })
    .then(res => {
      dispatch(Fetch_Drink())
    })
  }
}

//================================ Delete Drink 
const deleteDrinkState = (res,err) => {
  if (res) {
    return {
      type: "DELETE_DRINK_SUCCESS",
    };
  }
  return {
    type: "DELETE_DRINK_FAIL",
  };
}

export const deleteDrink = (id) => {
  return dispatch => {
    axios.delete(`https://stormy-citadel-71123.herokuapp.com/Drink/${id}`)
    .then(res => {
      dispatch(deleteDrinkState(res,null));
    })
    .catch(err => {
      dispatch(deleteDrinkState(null,err));
    })
    .then(res => {
      dispatch(Fetch_Drink())
    })
  }
}

//================================ Edit Drink 
const editDrinkState = (res,err) => {
  if (res) {
    return {
      type: "EDIT_DRINK_SUCCESS",
    };
  }
  return {
    type: "EDIT_DRINK_FAIL",
  };
}

export const editDrink = (id,data) => {
  return dispatch => {
    axios.put(`https://stormy-citadel-71123.herokuapp.com/Drink/${id}`,data)
    .then(res => {
      dispatch(editDrinkState(res,null));
    })
    .catch(err => {
      dispatch(editDrinkState(null,err));
    })
    .then(res => {
      dispatch(Fetch_Drink())
    })
  }
}