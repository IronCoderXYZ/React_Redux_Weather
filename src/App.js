import React, { Component } from 'react';

import SearchBar from './containers/searchBar';
import WeatherList from './containers/weatherList';

import './styles/index.css';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

export default App;
