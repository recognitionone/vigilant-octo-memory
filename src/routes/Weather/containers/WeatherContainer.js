import { connect } from 'react-redux'
// import { increment, doubleAsync } from '../modules/weather'
import { getForecastAction } from '../modules/weather'
// import { weatherSampleSelector } from '../modules/weatherSelector'
import { createSelector } from 'reselect'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the weather:   */

import Weather from '../components/Weather'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = {
  getForecastAction,
}

// const weather = (state) => state
// const getGalleryStateList = createSelector(weather, state => state.city.name)

const mapStateToProps = (state) => {
  let today = state.weather.forecast.list[0].main
  console.log(today)
  return { today }
}

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

    import { createSelector } from 'reselect'
    const weather = (state) => state.weather
    const tripleCount = createSelector(weather, (count) => count * 3)
    const mapStateToProps = (state) => ({
      weather: tripleCount(state)
    })

    Selectors can compute derived data, allowing Redux to store the minimal possible state.
    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
    Selectors are composable. They can be used as input to other selectors.
    https://github.com/reactjs/reselect    */

export default connect(mapStateToProps, mapDispatchToProps)(Weather)
