import React from "react";
import './button.scss'

const HollowButton = ({name,action}) => {
    return(
        <div className="hollowbtn" onClick={action}>
            <p className='btn-text'>{name}</p>
        </div>
    )
}
export default HollowButton;