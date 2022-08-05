import React, { useEffect, useState } from 'react';
import './Meals.css'
import Meal from '../Meal/Meal';

const Meals = () => {
    const [meals,setMeals]= useState([])
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php?fbclid=IwAR1jIHVD0EtsT9KKBiRRhh704uWronuEsqdg0Go2O0KzZHMgFZHF0jX0P0A')
        .then(res =>  res.json())
        .then(data =>setMeals(data.categories))
        
    },[])
    return (
        <div className='meals'>
           
             <div className="meal-container">
                {
                  meals.map(meal =><Meal meal={meal} key={meal.idCategory}></Meal>)  
                }
             </div>
             <div className="show-meal-container">
                <h1>Show meals</h1>
             </div>
           
        </div>
    );
};

export default Meals;