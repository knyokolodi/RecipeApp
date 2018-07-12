import React from 'react';
import {Link} from 'react-router-dom';

const Recipes = props => (
    <div className="container">
        <div className="row">
            {props.recipes.map((recipe) => {
            return(
            <div key={recipe.recipe_id} className="col-md-4">
                <div className="recipe-container">
                    <img src={recipe.image_url} alt={recipe.title} className="recipe-image"/>
                    <div className="recipe-content">
                        <h6 className="text-uppercase">
                            {recipe.title.length < 30 ? `${recipe.title}` : `${recipe.title.substring(0,30)}...`}
                        </h6>
                        <p><strong>PUBLISHER: </strong><span>{recipe.publisher}</span></p>
                        <button className="btn btn-outline-dark text-uppercase">
                            <Link to={{
                                    pathname:`/recipe/${recipe.recipe_id}`,
                                    state:{recipe:recipe.title}
                                }} className="links">view recipe</Link>
                        </button>
                    </div>
                </div>
            </div>
                )
            })}
        </div>
    </div>
)

export default Recipes;