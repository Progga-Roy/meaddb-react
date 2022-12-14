import React from 'react';
import './Meal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/free-solid-svg-icons'


const Meal = (props) => {
    
    const {strCategory,strCategoryThumb,strCategoryDescription} = props.meal
    const {seeItemHandler} = props;
    const {addToFavorite,favId} = props;

  
      // const clickLikedBtn =()=>{
      //   document.getElementById('heart').style.backgroundColor = 'red'
      // }
    return (
        <div className='meal-div'>
             <img src={strCategoryThumb} alt="" />
           <div className='meal'>
            <p className='name'>{strCategory}</p>
            <p className='description'>{strCategoryDescription.slice(0,200)}</p>
           <div className='detail'>
           <p>Price: $450</p>
           <button onClick={()=>seeItemHandler(props.meal)}>See Items</button>
           <p> <FontAwesomeIcon className={ favId.includes(props.meal._id)?'heartBtn': ''} onClick={()=>addToFavorite(props.meal._id)} icon={faHeart} id="heart"></FontAwesomeIcon > </p>
           </div>
           </div>
        </div>
    );
};

export default Meal;