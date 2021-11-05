import React from 'react';
import './imagecan.scss';

const ImageCanvas = ({imgSrc}) => {
    return(
        <div className="imgcanvas">
            <img className="mainImg" src={imgSrc} alt="coin"/>
        </div>
    )
}
export default ImageCanvas;