import { LOAD_CSV } from '../upload/actions'
import { STORE_DATASET } from './actions'
import { loadCSV } from './index'

const Immutable = require('immutable')

const defaultState = Immutable.List()

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case STORE_DATASET:
      return Immutable.List(action.payload.data)
    case LOAD_CSV:
      const { file } = action.payload
      loadCSV(file)
      return state
    default:
      return state
  }
}

export default reducer