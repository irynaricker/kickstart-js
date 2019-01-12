import React, { Component } from 'react';
import { connect } from 'react-redux'
import MapView from './views/MapView';
import Login from './views/Login';
import './App.css';

class App extends Component {
  state = {
    currentView: `map`
  }

  componentSwitcher = () => {
    const components = {
      login: <Login />
      // , register: ()
      , map: <MapView/>
      // , share: ()
    }

    return components[this.state.currentView]
  }

  render() {
    return (
      <div className="App">
        {this.componentSwitcher()}
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
