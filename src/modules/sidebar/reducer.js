import { TOGGLE_SIDEBAR_FILTER } from './actions'
const Immutable = require('immutable')

const defaultState = Immutable.Set()

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case TOGGLE_SIDEBAR_FILTER:
      const { featureName } = action.payload

      if(state.contains(featureName)) return state.remove(featureName)
      else return state.add(featureName)
    default:
      return state
  }
}

export default reducer