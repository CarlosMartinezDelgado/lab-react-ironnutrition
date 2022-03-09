import React from 'react';

function FoodBox(props) {
  const { name, calories, image } = props.eachFoodProps;

  return (
    <div>
      <img src={image} width="100px" />

      <p>
        <strong>{name}</strong> <br />
        <small>{calories}</small>
      </p>

      <button className="button is-info">+</button>
    </div>
  );
}
export default FoodBox;
