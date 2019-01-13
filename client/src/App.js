import React, { Component } from 'react';
import { connect } from 'react-redux'
import MapView from './views/MapView';
import Login from './views/Login';
import Register from './views/Register';
import './App.css';

export default class App extends Component {
  state = {
    currentView: `login`
  }

  componentSwitcher = () => {
    const components = {
      login: <Login nav={view => this.setState({ currentView: `map` })} />
      , register: <Register nav={view => this.setState({ currentView: view })} />
      , map: <MapView nav={view => this.setState({ currentView: view })} />
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

