import React from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import FoodBox from './componets/FoodBox';
import { useState } from 'react';

function App() {
  const [listFoods, setFoods] = useState(foods);

  return (
    <div>
      {listFoods.map((eachFood, index) => {
        return <FoodBox eachFoodProps={eachFood} key={index + eachFood.name} />;
      })}
    </div>
  );
}

export default App;
