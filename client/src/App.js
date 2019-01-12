import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem.js';
import { connect } from 'react-redux'

import { UpdateText } from './_redux/actions/test'

import Login from './views/Login'

class App extends Component {
  state = {
    currentView: `Login`
  }

  componentSwitcher = () => {
    const components = {
      login: <Login />
      // , register: ()
      // , map: ()
      // , share: ()
    }

    return components[this.state.currentView]
  }

  render() {
    return (
      <div className="App">
        <Login />
      </div>
    )
  }
}

const mapStateToProps = ({ Test }) => {
  return {
    hmm: Test.text,
  }
}

export default connect(mapStateToProps)(App)
