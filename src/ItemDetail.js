import React,{useState,useEffect} from "react";
import './App.css';

function ItemDetail({match}) {
    useEffect(() => {
            fetchItem();
            console.log(match)
    }, [])
    const [meal,setMeal] = useState({})
    
    const fetchItem = async () => {
        const fetchItem = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${match.params.id}`
            );
            const meal = await fetchItem.json();
            setMeal(meal.meals[0])
                console.log(meal.meals[0].strMealThumb);
               
    };
    
  return (
    <div>
     <h1>{meal.strMeal}</h1>
     <img className="Img-link" src={meal.strMealThumb} alt=""/>
     <h1 className= "meal">{meal.strInstructions}</h1>
         </div>
  );
}

export default ItemDetail;
