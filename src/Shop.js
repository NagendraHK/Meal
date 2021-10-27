import React,{useState,useEffect} from "react";
import './App.css';
import {Link} from "react-router-dom"
function Shop() {

    useEffect(() => {
              fetchItems();
    },[])
    const [meals,setMeals] = useState([])

    const fetchItems = async () => {
        const data = await fetch(
            "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
            );
            const items = await data.json();
                console.log(items.meals);
                setMeals(items.meals)
    };
  return (
    <div>
      {meals.map(meal=>(
          <h1>
              <Link to={`/shop/${meal.idMeal}`}>
              {meal.strMeal}
              </Link></h1>
      ))}
    </div>
  );
}

export default Shop;
