import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Recipes from './components/Recipes';
import Header from './components/Header';

class App extends Component {
//Declare a state React16
state = {
  recipes : []
}
//Get Recipe Function
getRecipe = async (e) =>{
  //API KEY From the website
  const API_KEY = '51e61eeaac7b548372912b6a9652b0b6';
  // Get values from the search input
  const recipeName = e.target.elements.recipeName.value;
  e.preventDefault();

  const api_call = await fetch(`http://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`);
  const data = await api_call.json();
  this.setState({recipes:data.recipes});
}
//Get localStrorage Data
componentDidMount = () =>{
  const json_data = localStorage.getItem("recipes");
  const recipes = JSON.parse(json_data);
  this.setState({recipes:recipes});
}
//Store data in localStorage
componentDidUpdate = () =>{
  const recipes = JSON.stringify(this.state.recipes);
  localStorage.setItem("recipes", recipes);
}
  render() {
    return (
      <div className="container">
        <Header/>
        <Form getRecipe = {this.getRecipe}/>
        <Recipes recipes = {this.state.recipes}/>
      </div>
    );
  }
}

export default App;
