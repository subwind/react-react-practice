import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import PropTypes from 'prop-types'; // ES6
//var PropTypes = require('prop-types'); // ES5 with npm

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

App.propTypes={
  todo:PropTypes.object,
  name:PropTypes.string
}

App.defaultProps = {
 todo: {}, 
 name: '', 
}

render(<App />, document.getElementById('root'));
