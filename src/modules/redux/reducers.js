import { combineReducers, createStore, compose } from 'redux'
import featuresFilter from '../sidebar/reducer.js'
import dataset from '../dataReader/reducer.js'

export default () => {
  const rootReducer = combineReducers({
    featuresFilter,
    dataset
  })

  return createStore(
    rootReducer,
    compose(
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
}
