import recipedata from './recipe.json'

function AuthorInfo() {
  const recipeAuthor = <div>{recipedata[0].author}</div>;
  const recipeAuthorImage = <div><img src={recipedata[0].authorImage}  className='authorImage'/></div>;
  const recipeWebsite = <a href={recipedata[0].website}>Website</a>;
  
  return(
    <div>
      {recipeAuthorImage}
      {recipeAuthor}
      {recipeWebsite}
    </div>
   );
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 