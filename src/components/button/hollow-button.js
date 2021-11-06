import React from "react";
import './button.scss'

const HollowButton = ({name, selected,action}) => {
    return(
        <div className={`hollowbtn ${selected?'selected':''}`} onClick={action}>
            <p className='btn-text'>{name}</p>
        </div>
    )
}
export default HollowButton;