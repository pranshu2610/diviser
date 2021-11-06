import React from 'react';
import './button.scss';

const Button = ({button_text, action, short}) => {
    return(
        <div className={`button purple ${short ? 'short': ''}`} onClick={action}>
            <p className="button-text">{button_text}</p>
        </div>
    );
}
export default Button;
