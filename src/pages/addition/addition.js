import React,{useState} from 'react';
import CategoryItem from '../../components/categoryItem/categoryItem';
import Button from '../../components/button/button';

import trip from '../../assets/categories/trip.png';
import shop from '../../assets/categories/shop.png';
import movie from '../../assets/categories/movie.png';
import misc from '../../assets/categories/misc.png';
import './addition.scss';
import Input from '../../components/input/input';

const Addition = ({nextPage}) => {
    return(
        <div className="addition">
            <p className="welcome-title">Select Category</p>
            <div className="category-div">
                <CategoryItem name="Trip" imgSrc={trip}/>
                <CategoryItem name="Shop" imgSrc={shop}/>
                <CategoryItem name="Movie" imgSrc={movie}/>
                <CategoryItem name="Misc" imgSrc={misc}/>
            </div>
            <div className="input-space">
            <Input placeholder="Give it a name like Goa's Trip" />
            </div>
            <Button
                button_text="Next"
                action={nextPage} 
            />
        </div>
    )
}
export default Addition;