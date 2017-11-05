import { LOAD_CSV, LOAD_JSON } from '../upload/actions'
import { loadCSV, loadJSON } from './index'
import { STORE_DATASET } from './actions'

const Immutable = require('immutable')

const defaultState = Immutable.List()

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case STORE_DATASET:
      return Immutable.List(action.payload.data)
    case LOAD_CSV:
      var { file } = action.payload
      loadCSV(file)
      return state
    case LOAD_JSON:
      var { file } = action.payload
      loadJSON(file)
      return state
    default:
      return state
  }
}

export default reducer