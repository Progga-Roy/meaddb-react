import React from 'react';
import './Item.css'

const Item = (props) => {
  
    const {strCategory,strCategoryThumb} = props.mealItem
    return (
        <div className='mealItem'>
            <img src={strCategoryThumb} alt="" />
        
            <p>{strCategory}</p>
        </div>
    );
};

export default Item;