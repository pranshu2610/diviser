import React from "react";
import './input.scss';

const Input = ({value, placeholder, type, action, short}) => {
    return(
        <input value={value} onChange={e=>action(e.target.value)} type={type} className={`input ${short? 'short':''}`} placeholder={placeholder}/>
    )
}
export default Input;