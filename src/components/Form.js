import React from 'react';

const Form = props =>(
    <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
            <form onSubmit={props.getRecipe}>
                <div className="form-container">
                    <input type="text" name="recipeName" className="form-control" placeholder="Recipe name"/>
                    <button className="btn btn-outline-dark">Search Recipe</button>
                </div>
            </form>
        </div>
        <div className="col-md-4"></div>
        
    </div>
)

export default Form;