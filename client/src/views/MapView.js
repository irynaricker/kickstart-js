import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import MapVeggie from '../components/MapVeggie';
import Search from '../components/Search';

import fancyMapStyles from './../assets/map-styles.json';
import './MapView.css';

class MapView extends Component {
    static defaultProps = {
        center: {
            lat: 45.5287776,
            lng: -122.6431699
        },
        zoom: 13,
        results: []
        };
    
    static propTypes = {
        results: PropTypes.array,
    }

    componentDidUpdate(prevProps) {
        if( prevProps.results !== this.props.results ) {
            console.log(this.props.results);
        }
    }

    mapControlOptions() {
        return {
            'gestureHandling': 'greedy',
            'mapTypeControl': false
          }
    }

    render() {
        const mapDescription = 'Map map map map';
        const exampleProduce = { 
            "produceType": "vegetable",
            "variety":"orange",
            "produceAmount": 12,
            "produceName": "Pinapple",
            "availability":{
                "date": "12334566"
            },
            "pickUpLocation": {
                "address": "2203 NE Oregon St",
                "city": "Portland",
                "state": "OR",
                "zip":98765
                },
            "organic": true,
            "seedSource": "Oregon",
            "description": ""
            }
        const exampleResults = [ exampleProduce, exampleProduce ];


        return (
        <div id="map-view">
            <Search />
            {/* // Important! Always set the container height explicitly */}
            <div id="map" style={{ height: '90vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDK6IbyqSKZFxGg6pcUPaprF8HDHRHcRVY' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    options={{ 
                        styles: fancyMapStyles,
                        ...this.mapControlOptions()
                    }}
                    >
                    {this.props.results.map( (result, i) => {
                        return <MapVeggie
                            key = {i}
                            lat={result.pickUpLocation.lat}
                            lng={result.pickUpLocation.lng}
                            produce={result}
                            //user
                        />
                    })}
                </GoogleMapReact>
            </div>
        </div>
        );
    }
}
     
const mapStateToProps = ({ produce }) => {
    return {
       results: produce.results,
       error: produce.error
    }
  }
  
export default connect(mapStateToProps)(MapView)

