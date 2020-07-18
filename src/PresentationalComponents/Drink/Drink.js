import React from "react"
import style from "./Drink.module.scss"
import _EditPanel from "../EditPanel/EditPanel"

const Drink = props => {
    const { drink,deleteDrink,dispatch } = props;
    const { name,count,amout,note,id } = drink;
    const open = () => {
        _EditPanel.open(dispatch,drink)
    }

    return(
        <div className={style.wrap}>
            <div className={style.box}>
                <div className={style.name}>
                    <span>{name}</span>
                </div>
                <div className={style.count}>
                    <span>{count}</span>
                </div>
                <div className={style.amout}>
                    <span>{amout}</span>
                </div>
                <div className={style.decri}>
                    <span>{note}</span>
                </div>
                <div className={style.setting}>
                    <div className={style.edit}>
                        <button onClick={open}>Edit</button>
                    </div>
                    <div className={style.delete}>
                        <button onClick={() => deleteDrink(id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drink