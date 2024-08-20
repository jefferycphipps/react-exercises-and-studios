import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor(){
    const authorLink ="https://easychickenrecipes.com/about-us/";
    const authorPhoto = "https://easychickenrecipes.com/wp-content/uploads/2020/02/SMALL-headshot-the-cookie-rookie-2018-1-of-1-2.jpg";
    const authorName = "Becky Hardin";
    
    return(
        <div className = {styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt = "Becky Hardin" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Blog name</a> 
            </div>
        </div>
    );
}

class RecipeDescription extends React.Component{
    render(){
        return(
        <div> 
            <div>
                <h1>Chicken Marsala</h1>
                <p>This chicken Marsala recipe is easy enough for a weeknight meal. Chicken breast and mushrooms are cooked in creamy marsala wine sauce with shallots and garlic for a flavorful dish that doesn't require hours in the kitchen.</p>
            </div>
            <RecipeAuthor />
        </div>
        );
        
    }
}

export default RecipeDescription;