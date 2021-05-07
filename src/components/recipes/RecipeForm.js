import React, { Component } from 'react';
import uuid from 'uuid';
// import { addRecipe } from './actions/recipes';

class RecipeForm extends Component {

    state = {
      query: ''
    }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.handleSearch(this.state.query)
  }



  render() {
    return (
      <div class="search-form">
        <div class='bg-blue-200 border-black'>
        <form onSubmit={this.handleOnSubmit}>
        <label>Whatcha hungry for?</label><br/>
          <input
          class='border-black'
          type='text'
          placeholder='Food Search'
          onChange={event => this.setState({query: event.target.value})}
          value={this.state.value}
          />
          <input type='submit' />
        </form>
        </div>
      </div>

    )
  }
}

export default RecipeForm;
