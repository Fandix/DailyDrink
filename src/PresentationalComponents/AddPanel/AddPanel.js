import React from "react"
import { render } from "react-dom"
import style from "./AddPanel.module.scss"
import { GiCancel } from "react-icons/gi";
import { addDrink } from "../../Redux/Action/MainPageAction"

class AddPanel extends React.Component{
    state = {
        active:false,
        callback:() => {},
        name : "",
        count : 0,
        amout : "",
        note : ""
    }
    //=================================//
    close = () => {
        this.setState({
            active:false
        })
    }
    //=================================//
    open = (callback) => {
        this.setState({
            active:true,
            callback:callback
        })
    }
    //=================================//
    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]:value
        })
    }
    //=================================//
    onSubmit = (e) => {
        e.preventDefault();
        const { name,count,amout,note } = this.state
        const drink = {
            name,
            count,
            amout,
            note
        }
        this.state.callback(addDrink(drink));
        this.setState({
            name : "",
            count : 0,
            amout : "",
            note : ""
        })
        this.close();
    }

    render(){
        const _class = {
            true : style.active,
            false : style.nonActive
        }
        return(
            <div className={_class[this.state.active]}>
                <div className={style.overLayer} onClick={this.close}></div>
                <div className={style.panel}>
                    <div className={style.header}>
                        <GiCancel onClick={this.close}/>
                    </div>
                    <form className={style.content} onSubmit={this.onSubmit}>
                        <div className={style.name}>
                            <label>Name : </label>
                            <input 
                                name = "name"
                                onChange = {this.onChange}
                                value={this.state.name}
                            />
                        </div>
                        <div className={style.count}>
                            <label>Count : </label>
                            <input
                                type = "number"
                                min = "1"
                                max = "10"
                                name = "count"
                                onChange = {this.onChange}
                                value={this.state.count}
                            />
                        </div>
                        <div className={style.amout}>
                            <label>Amout : </label>
                            <input 
                                name = "amout"
                                onChange = {this.onChange}
                                value={this.state.amout}
                            />
                        </div>
                        <div className={style.note}>
                            <label>Note : </label>
                            <textarea 
                                name = "note"
                                onChange = {this.onChange}
                                placeholder = "Note..."
                                value={this.state.note}
                            />
                        </div>
                        <div className={style.btn}>
                        <div className={style.submit}>
                            <button type="submit"> Add </button>
                        </div>
                        <div className={style.cancel}>
                            <button type="button" onClick={this.close}> Cancel </button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        )
    }
}

const _div = document.createElement("div");
document.body.appendChild(_div);

const _AddPanel = render(<AddPanel /> , _div);
export default _AddPanel;