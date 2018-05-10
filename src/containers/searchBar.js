// NPM Imports
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
// Local Imports
import { fetchWeather } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchWeather('Denver');
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.searchTerm);
    this.setState({ searchTerm: '' });

    // this.setState(prevState => {
    //   this.props.fetchWeather(prevState.searchTerm);
    //   return { searchTerm: '' };
    // });
  }

  onInputChange({ target: { value } }) {
    this.setState({ searchTerm: value });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="input-group">
        <input
          className="form-control"
          value={this.state.searchTerm}
          onChange={this.onInputChange}
          placeholder="Find a five-day forecast"
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Search
          </button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
