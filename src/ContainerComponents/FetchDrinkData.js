import { connect } from "react-redux";
import FetchDrinkPresentation from "../PresentationalComponents/Main";
import _AddPanel from "../PresentationalComponents/AddPanel/AddPanel"

const mapStateToProps = state => {
  return {
    DrinkDatas: state.FetchDrinkReducer.DrinkDatas,
    isFetch: state.FetchDrinkReducer.isFetch
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch,
    onAddClick:() => {
      _AddPanel.open(dispatch)
    }
  };
};

const fetchDrinkData = connect(
  mapStateToProps,
  mapDispatchToProps
)(FetchDrinkPresentation);

export default fetchDrinkData;
