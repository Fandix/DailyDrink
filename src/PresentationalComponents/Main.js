import React from "react";
import { RequestPost, Fetch_Drink } from "../Redux/Action/MainPageAction";
import Header from "./General/Header/Header"
import Loading from "./General/Loading/Loading"
import DrinksDataList from "../ContainerComponents/DrinksList"
import DrinksListHeader from "./General/DrinksHeader/DrinksListHeader"
import style from "./Main.module.scss"

class FetchDrinkPresentation extends React.Component {
  state = {
    isFetch: false,
    drinkData: []
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(RequestPost());
    dispatch(Fetch_Drink());
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isFetch !== this.props.isFetch) {
      this.setState({
        isFetch: this.props.isFetch
      });
    }
    if (prevProps.DrinkDatas !== this.props.DrinkDatas) {
      this.setState({
        drinkData: this.props.DrinkDatas
      });
    }
  }

  render() {
    return (
        <div className={style.wrap}>
          <div className={style.box}>
            <div className={style.header}>
              <div className={style.mainHeader}>
                <Header />
              </div>
              <div className={style.drinksHeader}>
                <DrinksListHeader 
                  onAddClick = {this.props.onAddClick}
                />
              </div>
            </div>
              {
                  this.state.isFetch === true?
                  <div className={style.loading}><Loading /></div>
                  :<div className={style.content}>
                    <DrinksDataList 
                      drinkData={this.state.drinkData}
                    />
                  </div>
              }
          </div>
        </div>
    );
  }
}

export default FetchDrinkPresentation;
