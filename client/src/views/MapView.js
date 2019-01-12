import React, { Component } from 'react';
import { connect } from 'react-redux';
import ggLogo from '../assets/gg_logo.jpg';
import GoogleMapReact from 'google-map-react';
import MapVeggie from '../components/MapVeggie';
import './MapView.css';

//import { UpdateText } from './_redux/actions/test'

class MapView extends Component {
    static defaultProps = {
        center: {
            lat: 45.5287776,
            lng: -122.6431699
        },
        zoom: 13
        };
  state = {
  };

  componentDidMount() {
  }


  render() {
    const mapDescription = 'Map map map map';

    return (
      <div id="map-view">
        <header className="map-header">
          <img src={ggLogo} alt="Growing Gardens"/>
          <h3>{mapDescription}</h3>
        </header>
        {/* // Important! Always set the container height explicitly */}
        <div id="map" style={{ height: '90vh', width: '100%' }}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDK6IbyqSKZFxGg6pcUPaprF8HDHRHcRVY' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
        >
            <MapVeggie
            lat={45.5287205}
            lng={-122.6432165}
            // produce=thisProduce
            // user= thisUser
            />
        </GoogleMapReact>
        </div>
    </div>
    );
    }
}
     

const mapStateToProps = ({ Test }) => {
  return {
    hmm: Test.text,
  }
}

export default connect(mapStateToProps)(MapView)

