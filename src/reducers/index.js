import {
  REQUEST_ANALYTICS, RECEIVE_ANALYTICS,
  UPDATE_QUERY, INVALIDATE_ANALYTICS
} from '../actions'

const rootReducer = (state = {
  isFetching: false,
  items: []
}, action) => {
  switch (action.type) {
    case INVALIDATE_ANALYTICS:
      return {
        ...state,
        didInvalidate: true,
        items: []
      }
    case REQUEST_ANALYTICS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
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
        lastUpdated: action.receivedAt,
        didInvalidate: false
      }
    default:
      return state
  }
}

export default rootReducer
