import React from 'react';
import './Meal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/free-solid-svg-icons'


const Meal = (props) => {
    
    const {strCategory,strCategoryThumb,strCategoryDescription} = props.meal
    // const {increaseHandler} = props
    const {seeItemHandler} = props
  
      const clickLikedBtn =()=>{
        document.getElementById('heart').style.backgroundColor = 'red'
      }
    return (
        <div className='meal-div'>
             <img src={strCategoryThumb} alt="" />
           <div className='meal'>
            <p className='name'>{strCategory}</p>
            <p className='description'>{strCategoryDescription.slice(0,200)}</p>
           <div className='detail'>
           <p>Price: $450</p>
           <button onClick={()=>seeItemHandler(props.items)}>See Items</button>
           <p> <FontAwesomeIcon icon={faHeart} onClick={()=>clickLikedBtn} id="heart"></FontAwesomeIcon > </p>
           </div>
           </div>
        </div>
    );
};

export default Meal;