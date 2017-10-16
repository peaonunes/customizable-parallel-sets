import { combineReducers, createStore, compose } from 'redux';
import featuresFilter from '../sidebar/reducer.js';

export default () => {
  const rootReducer = combineReducers({
    featuresFilter
  })

  return createStore(
    rootReducer,
    compose(
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
}
