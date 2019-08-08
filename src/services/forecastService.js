import getWeatherUrl from '../utils/url'

export default class ForecastService {
  static getForecast () {
    return fetch(getWeatherUrl())
        .then(
            (response) => response.json(),
            (error) => console.log('Error: ', error))
  }
}
