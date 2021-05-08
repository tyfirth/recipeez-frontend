import React from 'react';
import HomeContainer from './containers/HomeContainer'

  let apiKey = process.env.REACT_APP_apiKey

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <HomeContainer apiKey={`${apiKey}`}/>
      </div>
    );
  }
}


export default App;
