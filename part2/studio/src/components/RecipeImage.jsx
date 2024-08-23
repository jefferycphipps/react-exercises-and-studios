import recipedata from "./recipe.json";


function RecipeImage() {
  const recipeImg = recipedata[0].recipeImage;
   return(
    <div className="recipeImage">
      <img src = {recipeImg} alt = "Picture of food" />
    </div>


   );
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 