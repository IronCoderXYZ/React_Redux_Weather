// NPM Imports
import { connect } from 'react-redux';
import React, { Component } from 'react';
// Local Imports
import Chart from '../components/chart';
import GoogleMap from '../components/mapView';

class WeatherList extends Component {
  renderWeather(cityData) {
    const { name, coord } = cityData.city;
    const lon = coord.lon;
    const lat = coord.lat;
    const tempList = cityData.list.map(weather => weather.main.temp);
    const pressureList = cityData.list.map(weather => weather.main.pressure);
    const humidityList = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td>
          <GoogleMap lon={lon} lat={lat} />
        </td>
        <td>
          <Chart color="red" data={tempList} units="K" />
        </td>
        <td>
          <Chart color="green" data={pressureList} units="hPa" />
        </td>
        <td>
          <Chart color="black" data={humidityList} units="%" />
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
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
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
