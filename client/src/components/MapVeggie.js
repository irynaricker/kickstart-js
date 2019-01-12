import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TomatoIcon from './../assets/tomato.png';

export default class MapVeggie extends Component {
  static propTypes = {
    produce: PropTypes.object,
    user: PropTypes.object,
  };

  render() {      
      const { produceType } = this.props.produce;

    return (
       <div className="map-veggie">
          <img style={{ height: '3em', width: 'auto' }} src={TomatoIcon} alt={`${produceType} available here!`}/>
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
