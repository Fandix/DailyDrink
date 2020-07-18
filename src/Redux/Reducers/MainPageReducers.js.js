const fetchDrinkInit = {
    DrinkDatas: [],
    isFetch: false,
    didInvalidata: false,
    fetchFail: false
  };
  
  export const FetchDrinkReducer = (state = fetchDrinkInit, action) => {
    switch (action.type) {
      case "REQUEST_POSTS":
        return {
          ...state,
          isFetch: true,
          didInvalidata: false,
          fetchFail: false
        };
      case "FETCH_DRINK_SUCCESS":
        return {
          ...state,
          isFetch: false,
          didInvalidata: false,
          fetchFail: false,
          DrinkDatas: action.payload
        };
      case "FETCH_DRINK_FAIL":
        return {
          ...state,
          isFetch: false,
          didInvalidata: false,
          fetchFail: true
        };
  
      default:
        return state;
    }
  };
 
//=================================   Add Drink
const addDrinkInit = {
    addSuccess : false,
    addFail : false,
}

export const addDrink = (state=addDrinkInit,action) => {
  switch (action.type) {
    case "ADD_DRINK_INIT":
      return{
        ...state,
        addSuccess : false,
        addFail : false,
      }
    case "ADD_DRINK_SUCCESS":
      return{
        ...state,
        addSuccess : true,
        addFail : false,
      }
    case "ADD_DRINK_FAIL":
      return{
        ...state,
        addSuccess : false,
        addFail : true,
      }
    default:
      return state;
  }
}

//=================================   Edit Drink
const editDrinkInit = {
  editSuccess : false,
  editFail : false,
}

export const editDrink = (state=editDrinkInit,action) => {
  switch (action.type) {
    case "EDIT_DRINK_INIT":
      return{
        ...state,
        editSuccess : false,
        editFail : false,
      }
    case "EDIT_DRINK_SUCCESS":
      return{
        ...state,
        editSuccess : true,
        editFail : false,
      }
    case "EDIT_DRINK_FAIL":
      return{
        ...state,
        editSuccess : false,
        editFail : true,
      }
    default:
      return state;
  }
}

//=================================   Delete Drink

const deleteDrinkInit = {
  deleteSuccess : false,
  deleteFail : false,
}

export const deleteDrink = (state=deleteDrinkInit,action) => {
  switch (action.type) {
    case "DELETE_DRINK_INIT":
      return{
        ...state,
        deleteSuccess : false,
        deleteFail : false,
      }
    case "DELETE_DRINK_SUCCESS":
      return{
        ...state,
        deleteSuccess : true,
        deleteFail : false,
      }
    case "DELETE_DRINK_FAIL":
      return{
        ...state,
        deleteSuccess : false,
        deleteFail : true,
      }
    default:
      return state;
  }
}