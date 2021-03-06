import React, { Component } from 'react';
import { connect } from 'react-redux'
import ggLogo from '../assets/gg_logo.jpg';
import { loadProduce } from '../_redux/actions/searchActions';
import queryString from 'query-string';

class Search extends Component {

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
        this.props.dispatch(loadProduce(this.state.produceType, this.state.variety));
    }

    handleSelect(e) {
        this.setState({produceType: e.target.value});
    }

  render() {
    return (
        <header className="map-header">
          <img src={ggLogo} alt="Growing Gardens"/>
          <ol>
              <li>Select the type of produce you would like to find in your area. </li>
              <li>Click on the produce type icon. </li>
              <li>Click Get! to schedule a pickup time. </li>
          </ol>

        <div id="search">
            <label htmlFor="type">
                <h3>Type:</h3>
            </label>
            <select id="type-select" onChange={(e) => this.handleSelect(e)}>
                <option value="vegetable">
                    Vegetables
                </option>
                <option value="carrot">
                    Carrots
                </option>
                <option value="tomato">
                    Tomatoes
                </option>
            </select>
          </div>
        </header>
    );
    }
}

export default connect()(Search)