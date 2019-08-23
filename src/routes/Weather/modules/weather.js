import ForecastService from '../../../services/forecastService'

// ------------------------------------
// Constants
// ------------------------------------
export const GET_FORECAST_SUCCESS = 'GET_FORECAST_SUCCESS'

export const getForecastSuccess = (forecast) => ({
  type: GET_FORECAST_SUCCESS,
  payload: { forecast }
})

export const getForecastAction = () => {
  return function (dispatch) {
    return ForecastService.getForecast()
        .then(
            (forecast) => dispatch(getForecastSuccess(forecast))
        )
        .then(
          forecast => (forecast.payload.forecast)
          )
  }
}
// ------------------------------------
// Actions
// ------------------------------------

export const actions = {
  getForecastAction,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_FORECAST_SUCCESS] : (state, action) => action.payload
}

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = { loading: 'loading' }
export default function weatherReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
