import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target: { value } }) {
    this.setState({ searchTerm: value });
  }

  render() {
    console.log(this.state.searchTerm);
    return (
      <form className="input-group">
        <input
          className="form-control"
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
