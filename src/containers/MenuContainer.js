import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class MenuContainer extends Component {

  render() {

    return (
      <div className='menu-container' class='bg-blue-400 p-4 flex justify-around text-lg font-bold'>

        <Link to='/about'>About</Link>
        <Link to='/favorites'>Favorites</Link>

      </div>
    )
  }
}


export default MenuContainer;
