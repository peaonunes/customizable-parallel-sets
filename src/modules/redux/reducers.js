import { combineReducers, createStore, compose } from 'redux'
import featuresFilter from '../sidebar/reducer.js'
import dataset from '../dataReader/reducer.js'
import storeUtils from './storeUtils.js'

export default () => {
  const rootReducer = combineReducers({
    featuresFilter,
    dataset
  })

  const store = createStore(
    rootReducer,
    compose(
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

  storeUtils.init(store)

  return store
}
