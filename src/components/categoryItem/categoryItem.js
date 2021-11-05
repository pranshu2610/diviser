import React from "react";
import './categoryItem.scss';

const CategoryItem = ({name,imgSrc}) => {
    return(
        <div className="c-item">
            <img className='c-img' alt={name} src={imgSrc}/>
            <p className="c-name">{name}</p>
        </div>
    )
}
export default CategoryItem;