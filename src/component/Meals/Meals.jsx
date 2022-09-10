import React, { useEffect, useState } from 'react';
import './Meals.css'
import Meal from '../Meal/Meal';
import Item from '../Item/Item';


const Meals = ({countReact,setFavorite,favorite}) => {

    const [meals,setMeals]= useState([])
    const [item ,setItem] =useState([])
    const [loader,setLoader] = useState(false)
    const [favId,setFavId] = useState([])
    // const [increase,setIncrease] = useState([])
    // // const increaseHandler =(id)=>{
    // //  const addLiked =[...increase,id]
    // //  setIncrease(addLiked)
    // // }
    const addToFavorite =(id)=>{
        const favoriteMeals = meals.find(meal=> meal._id===id)
        const isFoodExist = favorite.filter(fav =>fav._id===id)
        if(isFoodExist.length){
            alert('Already added')
        }
        else{
            setFavorite([...favorite,favoriteMeals])
            setFavId([...favId,id])
        }
       

    }

    useEffect(()=>{
        setLoader(true)
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php?fbclid=IwAR1jIHVD0EtsT9KKBiRRhh704uWronuEsqdg0Go2O0KzZHMgFZHF0jX0P0A')
        .then(res =>  res.json())
        .then(data =>{setMeals(data.categories) 
        setLoader(false)
        })
        
    },[])

    const seeItemHandler =(meal)=>{
        const newItem= [...item,meal]
         setItem(newItem)
    }
    return (
        <div className='meals'>
           
            {
                loader ? <h1>loading....</h1>:
                <div className="meal-container">
                 {
                   meals.map(meal =><Meal meal={meal} key={meal.idCategory} seeItemHandler={seeItemHandler} countReact={countReact} addToFavorite={addToFavorite} favId={favId}  ></Meal>)  
                 }
              </div>
            }
             
             <div className="show-meal-container">
               <h2> Food Item</h2>
               <p>Please! select some item.</p>
                {
                   item.map(mealItem =><Item mealItem={mealItem}></Item>)
                }

             </div>
           
        </div>
    );
};

export default Meals;