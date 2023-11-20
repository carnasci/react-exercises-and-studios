import recipe from "./recipe.json";
import "./styling.css";

function RecipeImage() {
  let recipeImage = recipe.map((data) => {
    return <img src={data.recipeImage} className="recipeImage" alt={data.name}></img>
  })
   return <>{recipeImage}</>;
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 