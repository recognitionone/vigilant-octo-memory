import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Weather extends Component {
  render () {
    const wantedElements = [
      'temp',
      'temp_min',
      'temp_max',
      'pressure',
      'humidity',
      'hello',
      'loading']

    const weatherArr = [<li key='hello'>hello</li>]
    for (const [key, value] of Object.entries(this.props.forecast)) {
      if (wantedElements.indexOf(key) > -1) {
        weatherArr.push(<li
          key={key}
          value={value} >{key}:{value}</li>)
      }
    }

    return (
      <div>
        <button onClick={this.props.getForecastAction}>
          Get forecast
        </button>
        <ul>
          { weatherArr }
        </ul>
      </div>
    )
  }
}

Weather.propTypes = {
  getForecastAction: PropTypes.func.isRequired,
  forecast: PropTypes.object.isRequired
}

export default Weather
