// NPM Imports
import { connect } from 'react-redux';
import React, { Component } from 'react';
// Local Imports
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const { name } = cityData.city;
    const temperatureList = cityData.list.map(weather => weather.main.temp);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart color="red" data={temperatureList} />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ weather }) => {
  return { weather };
};

export default connect(mapStateToProps)(WeatherList);
