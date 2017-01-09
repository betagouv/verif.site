import {
  REQUEST_ANALYTICS, RECEIVE_ANALYTICS,
  UPDATE_QUERY
} from '../actions'

const rootReducer = (state = {
  isFetching: false,
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_ANALYTICS:
      return {
        ...state,
        isFetching: true
      }
    case UPDATE_QUERY:
      return {
        ...state,
        query: action.query
      }
    case RECEIVE_ANALYTICS:
      return {
        ...state,
        isFetching: false,
        items: action.analytics,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

export default rootReducer
