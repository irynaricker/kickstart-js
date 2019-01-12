import React, { Component } from 'react';
import { connect } from 'react-redux';
import ggLogo from '../assets/gg_logo.jpg';
import { loadProduce } from '../_redux/actions/searchActions';
import queryString from 'query-string';

import PropTypes from 'prop-types';

export default class Search extends Component {

    state = {
      produceType: '',
      variety: ''
    }

    componentDidMount() {
      const currentSearch = window.location.search;
      if(currentSearch) {
          const { type, variety } = queryString.parse(currentSearch);
          this.setState({ produceType: type, variety });
      }
    }

    componentDidUpdate(prevProps, prevState) {
        const { produceType: prevType } = prevState;
        if (prevType !== this.state.produceType) {
            this.handleSearch();
        }
    }

    handleSearch() {
        loadProduce(this.state.produceType, this.state.variety);
    }


  render() {
    const mapDescription = 'Map map map map';

    return (
        <header className="map-header">
          <img src={ggLogo} alt="Growing Gardens"/>
          <h3>{mapDescription}</h3>
        </header>
    );
    }
}

