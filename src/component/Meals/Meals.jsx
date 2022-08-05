import React, { useEffect, useState } from 'react';
import './Meals.css'
import Meal from '../Meal/Meal';
import Item from '../Item/Item';


const Meals = () => {
    const [meals,setMeals]= useState([])
    const [item ,setItem] =useState(0)
    // const [increase,setIncrease] = useState([])
    // // const increaseHandler =(id)=>{
    // //  const addLiked =[...increase,id]
    // //  setIncrease(addLiked)
    // // }
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php?fbclid=IwAR1jIHVD0EtsT9KKBiRRhh704uWronuEsqdg0Go2O0KzZHMgFZHF0jX0P0A')
        .then(res =>  res.json())
        .then(data =>setMeals(data.categories))
        
    },[])

    const seeItemHandler =(items)=>{
        const newItem= [...item,items]
         setItem(newItem)
    }
    return (
        <div className='meals'>
           
             <div className="meal-container">
                {
                  meals.map(meal =><Meal meal={meal} key={meal.idCategory}seeItemHandler={seeItemHandler} ></Meal>)  
                }
             </div>
             
             <div className="show-meal-container">
                <h1>Component</h1>
                {
                    item.map(singleItem=> <Item singleItem={singleItem}></Item>)
                }

             </div>
           
        </div>
    );
};

export default Meals;