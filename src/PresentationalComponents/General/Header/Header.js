import React from "react"
import style from "./Header.module.scss"

const Header = props => {
    return(
        <div className={style.wrap}>
            <div className={style.box}>
                <div className={style.img}>
                    <img src="/17_.png" alt="logo" />
                </div>
                <div className={style.title}>
                    <span>Daily Drinks</span>
                </div>
            </div>
        </div>
    )
}

export default Header