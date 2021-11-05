import React from 'react';
import './button.scss';

const Button = ({button_text, action}) => {
    return(
        <div className="button purple" onClick={action}>
            <p className="button-text">{button_text}</p>
        </div>
    );
}
export default Button;
