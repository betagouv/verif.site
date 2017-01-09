export const REQUEST_ANALYTICS = 'REQUEST_ANALYTICS'
export const RECEIVE_ANALYTICS = 'RECEIVE_ANALYTICS'
export const UPDATE_QUERY = 'UPDATE_QUERY'

export const updateQuery = query => ({
  type: UPDATE_QUERY,
  query
})

export const requestAnalytics = () => ({
  type: REQUEST_ANALYTICS
})

export const receiveAnalytics = (json) => ({
  type: RECEIVE_ANALYTICS,
  analytics: Object.keys(json.data).map(child => json.data[child]),
  receivedAt: Date.now()
})

const fetchAnalytics = () => dispatch => {
  dispatch(requestAnalytics())
  return fetch('https://www.data.gouv.fr/api/1/datasets/5805f1e2c751df2bb879df72/')
    .then((response) => response.json())
    .then(dataset => {
      const resource = dataset.resources[0]
      return resource.url.replace(/^http:\/\//i, 'https://')
    })
    .then(url => fetch(url))
    .then((response) => response.json())
    .then(json => dispatch(receiveAnalytics(json)))
}

const shouldFetchAnalytics = (state) => {
  const analytics = state.analytics

  if (!analytics) {
    return true
  }

  return !analytics.isFetching
}

export const fetchAnalyticsIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchAnalytics(getState())) {
    return dispatch(fetchAnalytics())
  }
}
