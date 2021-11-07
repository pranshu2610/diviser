import React,{useState} from 'react';
import CategoryItem from '../../components/categoryItem/categoryItem';
import Button from '../../components/button/button';

import trip from '../../assets/categories/trip.png';
import shop from '../../assets/categories/shop.png';
import movie from '../../assets/categories/movie.png';
import misc from '../../assets/categories/misc.png';
import './addition.scss';
import Input from '../../components/input/input';

import { useDispatch } from 'react-redux'
import { updateCategory } from '../../store/categorySlice';

const categoriesObj = {
    0: "Trip",
    1: "Shop",
    2: "Movie",
    3: "Misc"
}

const Category = ({nextPage}) => {
    const [category,setCategory] = useState(0);
    const [catName, setCatName] = useState("");

    const dispatch = useDispatch();
    const updateCategoryStore = () => {
        dispatch(updateCategory({type: categoriesObj[category], name: catName}))
        nextPage()
    }

    return(
        <div className="addition">
            <div className="category-div">
                <CategoryItem action={() => setCategory(0)} selected={category===0?true:false} name={categoriesObj[0]} imgSrc={trip}/>
                <CategoryItem action={() => setCategory(1)} selected={category===1?true:false} name={categoriesObj[1]} imgSrc={shop}/>
                <CategoryItem action={() => setCategory(2)} selected={category===2?true:false} name={categoriesObj[2]} imgSrc={movie}/>
                <CategoryItem action={() => setCategory(3)} selected={category===3?true:false} name={categoriesObj[3]} imgSrc={misc}/>
            </div>
            <div className="input-space">
            <Input placeholder="Give it a Name" value={catName} action={setCatName} />
            </div>
            <Button
                button_text="Next"
                action={updateCategoryStore} 
            />
        </div>
    )
}
export default Category;