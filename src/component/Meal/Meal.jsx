import React from 'react';
import './Meal.css'

const Meal = (props) => {
    console.log(props)
    const {strCategory,strCategoryThumb,strCategoryDescription} = props.meal
  
    return (
        <div className='meal-div'>
             <img src={strCategoryThumb} alt="" />
           <div className='meal'>
            <p>{strCategory}</p>
            <p>Price: $450</p>
            <p>{strCategoryDescription.slice(0,250)}</p>
           </div>
        </div>
    );
};

export default Meal;