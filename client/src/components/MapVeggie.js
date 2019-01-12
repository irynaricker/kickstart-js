import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CarrotIcon from './../assets/carrot.png';

export default class MapVeggie extends Component {
  static propTypes = {
    produce: PropTypes.object,
    user: PropTypes.object,
    currentZoom: PropTypes.number
  };

  getResposiveHeight(zoom) {
      return zoom;
  }

  render() {
      const exampleProduce = {
          'type': 'Carrot'
      }
      
      const { type } = exampleProduce;
      const { currentZoom } = this.props;
      const iconHeight = this.getResposiveHeight(currentZoom)

      console.log('current zoom:' + currentZoom);
    return (
       <div className="map-veggie">
          <img style={{ height: '3em', width: 'auto' }} src={CarrotIcon} alt={`${type} available here!`}/>
       </div>
    );
  }
}

// const mapStateToProps = ({ Test }) => {
//   return {
//     hmm: Test.text,
//   }
// }

// export default connect(mapStateToProps)(MapView)
