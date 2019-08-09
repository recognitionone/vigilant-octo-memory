import React from 'react'
import PropTypes from 'prop-types'

export const Weather = ({ getForecastAction }) => (
  <div style={{ margin: '0 auto' }} >
    <h2>any</h2>
    {console.log('Weather.js')}
    <button className='btn btn-primary' onClick={getForecastAction}>
      Get Forecast
    </button>
  </div>
)
Weather.propTypes = {
  getForecastAction: PropTypes.func.isRequired,
}

export default Weather
