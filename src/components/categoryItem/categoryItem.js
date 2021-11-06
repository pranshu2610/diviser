import React from "react";
import './categoryItem.scss';

const CategoryItem = ({name,imgSrc, selected, action}) => {
    return(
        <div onClick={action} className={`c-item ${selected?'selected':''}`}>
            <img className='c-img' alt={name} src={imgSrc}/>
            <p className="c-name">{name}</p>
        </div>
    )
}
export default CategoryItem;