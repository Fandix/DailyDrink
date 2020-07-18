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

