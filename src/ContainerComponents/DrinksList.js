import { connect } from "react-redux"  
import DrinksList from "../PresentationalComponents/DrinksList/DrinksList"
import { deleteDrink } from "../Redux/Action/MainPageAction"

const mapStateToProps = state => {
    return {
      editDrink:state.editDrink,
      deleteDrinks:state.deleteDrink
    };
  };
  
  const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        drinkData:ownProps.drinkData,
        deleteDrink:(id) => {
          dispatch(deleteDrink(id))
        },
        dispatch
    };
  };
  
  const DrinksDataList = connect(
    mapStateToProps,
    mapDispatchToProps
  )(DrinksList);
  
  export default DrinksDataList;