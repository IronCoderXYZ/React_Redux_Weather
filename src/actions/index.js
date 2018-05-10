import Axios from 'axios';

const API_KEY = 'c6ee01a3a5024100f9a2fed514003331';
const BASE_URL = 'api.openweathermap.org/data/2.5/forecast?appid=';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = cityName => {
  const FULL_URL = `${BASE_URL}${API_KEY}&q=${cityName},us`;

  const request = Axios.get(FULL_URL);

  return {
    payload: request,
    type: FETCH_WEATHER
  };
};
