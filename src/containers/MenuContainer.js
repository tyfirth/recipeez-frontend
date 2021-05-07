import React, {Component} from 'react';
import About from '../components/About'
import Favorites from '../components/Favorites'

class MenuContainer extends Component {

  render() {
    return(
      <div className='menu-container' class='bg-blue-400 p-4 flex justify-around text-lg font-bold'>
        <About />
        <Favorites />
      </div>
    )
  }
}

export default MenuContainer;
