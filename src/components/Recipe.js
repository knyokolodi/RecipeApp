import React from 'react';
import {Link} from 'react-router-dom';

//API KEY From the website
const API_KEY = '51e61eeaac7b548372912b6a9652b0b6';

class Recipe extends React.Component{
    state = {
        activeRecipe:{

        }
    }

    componentDidMount = async () =>{
        // Get values from the search input
        const title = this.props.location.state.recipe;
        //Make an api call and get the data
        const req = await fetch(`http://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`);
        const res = await req.json();
        this.setState({
            activeRecipe: res.recipes[0]
        });
    }

    render(){
        const recipe = this.state.activeRecipe;

        return(
            <div className="container">
                <div className="col-md-6 offset-3">
                    <div className="recipe-container">
                        <img src={recipe.image_url} alt={recipe.title} className="active-recipe-image"/>
                        <div className="recipe-content">
                            <h6 className="text-uppercase">
                                {recipe.title}
                            </h6>
                            <p><strong>PUBLISHER: </strong><span>{recipe.publisher}</span></p>
                            <p><strong>WEBSITE: </strong><a href={recipe.publisher_url} target="_blank">{recipe.publisher_url}</a></p>
                            <button className="btn btn-outline-dark">
                                <Link to="/" className="links">GO BACK TO MENU</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Recipe;