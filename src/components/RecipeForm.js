import React, { Component } from 'react';
import {handleSearch} from '../actions/handleSearch';
// import uuid from 'uuid';
import {addRecipe} from '../actions/addRecipe'
import {connect} from 'react-redux'


class RecipeForm extends Component {

    state = {
      title: '',
      summary: '',
      image: ''
    }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addRecipe(this.state)
    this.setState({
      title: '',
      summary: '',
      image: ''
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }



  render() {
    return (
      <div className="add-recipe-form" class='flex justify-center p-4'>
        <form onSubmit={this.handleOnSubmit}>
        <label>Add a New Recipe</label><br/>
          <input
          class='border focus:outline-none focus:ring-2 focus:ring-bg-blue-700 hover:border-blue-500 focus:border-transparent rounded p-2 my-2'
          type='text'
          placeholder='Food Search'
          name='query'
          onChange={event => this.setState({query: event.target.value})}
          value={this.state.value}
          />
        <br/>
        <input type='text' placeholder='Title' name='title' class='border focus:outline-none focus:ring-2 focus:ring-bg-blue-700 hover:border-blue-500 focus:border-transparent rounded p-2 my-2' value={this.state.title} onChange={this.handleChange}/>
        <br/>
        <input type='text' placeholder='Summary'           class='border focus:outline-none focus:ring-2 focus:ring-bg-blue-700 hover:border-blue-500 focus:border-transparent rounded p-2 my-2' name='summary' value={this.state.summary} onChange={this.handleChange}/>
        <br/>
        <input type='text' placeholder='Image'           class='border focus:outline-none focus:ring-2 focus:ring-bg-blue-700 hover:border-blue-500 focus:border-transparent rounded p-2 my-2' name='image' value={this.state.image} onChange={this.handleChange}/>



        <br/>
          <input type='submit' class='rounded-md p-2 mx-auto bg-blue-500 hover:bg-blue-700 text-bold text-white' />
        </form>
      </div>

    )
  }
}

export default connect(null, {handleSearch, addRecipe})(RecipeForm);
