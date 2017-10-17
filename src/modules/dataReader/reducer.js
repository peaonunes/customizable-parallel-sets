import { STORE_DATASET } from './actions'
const Immutable = require('immutable')

const defaultState = Immutable.List()

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case STORE_DATASET:
      return Immutable.List(action.payload.data)
    default:
      return state
  }
}

export default reducer