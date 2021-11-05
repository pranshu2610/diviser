import React from "react";
import './input.scss';

const Input = ({placeholder, action, short}) => {
    return(
        <input className={`input ${short? 'short':''}`} placeholder={placeholder}/>
    )
}
export default Input;