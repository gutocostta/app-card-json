import React, { Component } from 'react';

import Nav from './componentes/Nav';
import Card from './componentes/Card';

class App extends Component {
  render() {
    return (
      <div>
        
        <Nav />

        <div className="main"> 

          <Card />

        </div>

      </div>
    );
  }
}

export default App;
