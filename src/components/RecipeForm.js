import React, { Component } from 'react';
import {handleSearch} from '../actions/handleSearch';
import uuid from 'uuid';
import {connect} from 'react-redux'


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
      <div className="search-form" class='flex justify-center p-4'>
        <form onSubmit={this.handleOnSubmit}>
        <label>Whatcha hungry for?</label><br/>
          <input
          class='border border-transparent focus:outline-none focus:ring-2 focus:ring-bg-blue-700 hover:border-blue-500 focus:border-transparent rounded p-2'
          type='text'
          placeholder='Food Search'
          onChange={event => this.setState({query: event.target.value})}
          value={this.state.value}
          />
          <input type='submit' class='rounded-md p-2 mx-auto bg-blue-500 hover:bg-blue-700 text-bold text-white' />
        </form>
      </div>

    )
  }
}

export default connect(null, {handleSearch})(RecipeForm);
