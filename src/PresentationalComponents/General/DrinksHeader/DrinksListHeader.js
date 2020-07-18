import React from "react"
import style from "./DrinksListHeader.module.scss"
const DrinksListHeader = props => {
    const { onAddClick } = props
    return(
        <div className={style.wrap}>
            <div className={style.box}>
                <div className={style.add}>
                    <button onClick={() => onAddClick()}>add</button>
                </div>
                <div className={style.header}>
                    {/********** Header **********/}
                    <div className={style.drinkName}>
                        <span>Name</span>
                    </div>
                    <div className={style.count}>
                        <span>Count</span>
                    </div>
                    <div className={style.money}>
                        <span>Amount</span>
                    </div>
                    <div className={style.describe}>
                        <span>Note</span>
                    </div>
                    <div className={style.setting}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DrinksListHeader