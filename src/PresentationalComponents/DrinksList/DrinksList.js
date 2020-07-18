import React from "react"
import style from "./DrinksList.module.scss"
import Drink from "../Drink/Drink"
import { CSSTransition,TransitionGroup } from "react-transition-group";
import "./Anim.css"

const DrinksList = props => {
    const { drinkData,deleteDrink,dispatch } = props;
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