import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
// import { addRecipe } from './actions/recipes';

class RecipeForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      query: ''
    }
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.handleFetch(this.state.query)
  }



  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
        <label>Whatcha hungry for?</label><br/>
          <input
          type='text'
          placeholder='Food Search'
          onChange={event => this.setState({query: event.target.value})}
          value={this.state.value}
          />
          <input type='submit' />
        </form>
      </div>

    )
  }
}

export default RecipeForm;
