import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
// import { addRecipe } from './actions/recipes';

class RecipeForm extends Component {
  state = {
    input: ''
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <input type='text' name='input' value={this.state.input} onChange={this.handleOnChange} />
        <input type='submit' />
      </form>
    )
  }
}

export default RecipeForm;
