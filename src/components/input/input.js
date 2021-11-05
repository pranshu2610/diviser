import React from "react";
import './input.scss';

const Input = ({placeholder, action}) => {
    return(
        <input className="input" placeholder={placeholder}/>
    )
}
export default Input;