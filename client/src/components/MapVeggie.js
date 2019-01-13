import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CarrotIcon from './../assets/carrot.png';

export default class MapVeggie extends Component {
  static propTypes = {
    produce: PropTypes.object,
    user: PropTypes.object,
  };

  render() {      
      const { produceType } = this.props.produce;

    return (
       <div className="map-veggie">
          <img style={{ height: '3em', width: 'auto' }} src={CarrotIcon} alt={`${produceType} available here!`}/>
       </div>
    );
  }
}