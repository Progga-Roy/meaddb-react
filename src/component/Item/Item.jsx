import React from 'react';

const Item = (props) => {
    const {strCategory,strCategoryThumb} =props.singleItem
    return (
        <div>
            <img src={strCategory} alt="" />
            <p>{strCategoryThumb}</p>
        </div>
    );
};

export default Item;