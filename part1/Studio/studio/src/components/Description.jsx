import styles from './Description.module.css';
import React from 'react';

class RecipeDescription extends React.Component {
    render() {
        return (
           <div>
            <div>
                <h1>Classic New York Cheesecake</h1>
                <p>This is a recipe for a classic style New York Cheesecake.</p>
            </div>
            <RecipeAuthor />
           </div>
        )
    }
}
    const authorLink = "https://www.onceuponachef.com/recipes/new-york-style-cheesecake.html";
    const authorPhoto = "https://i0.wp.com/www.onceuponachef.com/images/2019/08/jenn-kitchen-3.jpg?resize=768%2C521&ssl=1";
    const authorName = "Jenn Segal";

function RecipeAuthor() {
    

    return (
        <div className={styles.recipeAuthorBlock}>
          <img src={authorPhoto} alt= "Jenn Segal author of Classic New York cheesecake recipe" 
            className={styles.imageUpdates} />
           <div> 
            <h3>{authorName}</h3>
            <a href={authorLink}>Classic New York Cheesecake</a>
           </div>
        </div>
    );
}

export default RecipeDescription;