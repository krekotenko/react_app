import Recipe from './Recipe';
import Summary from './Summary';
import AddColorForm from './AddColorForm';
import StarRating from './StarRating';
import App from '../App';
import React from 'react'

const logColor = (title, color) =>
    console.log(`New Color: ${title} | ${color}`);

const Menu = ({ recipes }) =>
    <article>
        <header>
            <h1>Delicious Recipes</h1>
        </header>
        <div className="recipes">
            { recipes.map((recipe, i) =>
                <Recipe key={i} {...recipe} />)
            }
        </div>
        { recipes.map((recipe, i) =>
            <Summary key={i} {...recipe} />)
        }
       {/* <AddColorForm onNewColor={logColor} />*/}
        {/*<StarRating totalStars={7} starsSelected={7}/>*/}
        <App />
    </article>
export default Menu
