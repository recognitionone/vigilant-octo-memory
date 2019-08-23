import { connect } from 'react-redux'
import { getForecastAction } from '../modules/weather'
import Weather from '../components/Weather'
import {
  weatherSampleSelector,
  getCityName,
  getCityLat,
  getCityLon } from '../modules/weather.selector'

console.log(weatherSampleSelector)

const mapDispatchToProps = {
  getForecastAction,
}

const mapStateToProps = (state) => {
  const cityName = getCityName(state)
  const cityLat = getCityLat(state)
  const cityLon = getCityLon(state)
  const forecast = weatherSampleSelector(state)
  const city = { cityName, cityLat, cityLon }
  return { city, forecast }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)
