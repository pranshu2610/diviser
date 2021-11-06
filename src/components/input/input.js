import React from "react";
import './input.scss';

const Input = ({placeholder, type, action, short}) => {
    return(
        <input type={type} className={`input ${short? 'short':''}`} placeholder={placeholder}/>
    )
}
export default Input;