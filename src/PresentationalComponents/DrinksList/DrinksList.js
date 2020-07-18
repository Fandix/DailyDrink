import React from "react"
import style from "./DrinksList.module.scss"
import Drink from "../Drink/Drink"
import { editDrinkInit,deleteDrinkInit } from "../../Redux/Action/MainPageAction"
import { CSSTransition,TransitionGroup } from "react-transition-group";
import { toast } from 'react-toastify';
import "./Anim.css"

const DrinksList = props => {
    const { drinkData,deleteDrink,dispatch,editDrink,deleteDrinks } = props;

    if(editDrink.editSuccess === true){
        toast.success("Edit Success !")
        dispatch(editDrinkInit())

    }else if(editDrink.editFail === true){
        toast.success("Edit Fail !")
        dispatch(editDrinkInit())
    }else if(deleteDrinks.deleteSuccess === true){
        toast.success("Delete Success !")
        dispatch(deleteDrinkInit());
    }else if(deleteDrinks.deleteFail === true){
        toast.success("Delete Fail !")
        dispatch(deleteDrinkInit());
    }

    return(
        <div className={style.wrap}>
            <div className={style.box}>
                <TransitionGroup component={null}>
                {
                    drinkData.map(drink => {
                        return(
                            <CSSTransition classNames="product-fade" timeout={500} key={drink.id}>
                                <div className={style.drinks}>
                                    <Drink 
                                        drink={drink}
                                        deleteDrink={deleteDrink}
                                        dispatch={dispatch}
                                    />
                                </div>
                            </CSSTransition>
                        )
                    })
                }
                </TransitionGroup>
            </div>
        </div>
    )
}

export default DrinksList