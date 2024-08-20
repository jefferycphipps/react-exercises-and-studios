import styles from './Ingredients.module.css';
import React from 'react';

export default function RecipeIngredients(){
    const ingredients = ["1 pound boneless, skinless chicken breasts", "¼ cup all-purpose flour", "¼ teaspoon kosher salt", "⅛ teaspoon ground black pepper", "4 tablespoons unsalted butter"];

    return(
        <div>
            <h3>Recipe Ingredients</h3>
                <ul className = {styles.ingredientList}>
                    <li>{ingredients[0]}</li>
                    <li>{ingredients[1]}</li>
                    <li>{ingredients[2]}</li>
                    <li>{ingredients[3]}</li>
                    <li>{ingredients[4]}</li>
                </ul>
        </div>
    );

}
