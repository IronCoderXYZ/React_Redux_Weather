import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
  }

  onInputChange({ target: { value } }) {
    this.setState({ searchTerm: value });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="input-group">
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
