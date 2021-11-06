import React,{useState} from 'react';
import CategoryItem from '../../components/categoryItem/categoryItem';
import Button from '../../components/button/button';

import trip from '../../assets/categories/trip.png';
import shop from '../../assets/categories/shop.png';
import movie from '../../assets/categories/movie.png';
import misc from '../../assets/categories/misc.png';
import './addition.scss';
import Input from '../../components/input/input';

const Category = ({nextPage}) => {
    const [category,setCategory] = useState(0);
    return(
        <div className="addition">
            <div className="category-div">
                <CategoryItem action={() => setCategory(0)} selected={category===0?true:false} name="Trip" imgSrc={trip}/>
                <CategoryItem action={() => setCategory(1)} selected={category===1?true:false} name="Shop" imgSrc={shop}/>
                <CategoryItem action={() => setCategory(2)} selected={category===2?true:false} name="Movie" imgSrc={movie}/>
                <CategoryItem action={() => setCategory(3)} selected={category===3?true:false} name="Misc" imgSrc={misc}/>
            </div>
            <div className="input-space">
        
            </div>
            <Button
                button_text="Next"
                action={nextPage} 
            />
        </div>
    )
}
export default Category;