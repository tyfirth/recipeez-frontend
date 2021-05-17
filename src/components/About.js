import React, {Component} from 'react';

class About extends Component {
  render() {
    return (
      <div className='about' class='text-center'>
        <h1>Welcome to Tyler's Recipe App!</h1>
        <br/>
        <h3>Made with React...and a dash of love.</h3>
        <br/>
        <p>
          You can add recipes in the Recipe Form, add a title, summary and image to display. You can also like your favorite recipes to save them for later.
        </p>
      </div>
    )
  }


}

export default About;
