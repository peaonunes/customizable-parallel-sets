import Immutable from 'immutable'

let storeRef

const init = (store) => {
  storeRef = store
}

const getStore = () => {
  return storeRef
}

const getState = () => {
  return storeRef.getState()
}

const getStateElement = (name) => {
  return storeRef.getState()[name]
}

const shouldUpdate = (viewState, connectStates) => {
  if (viewState.size === 0 || connectStates.length === 0)
    return true

  let nextState = Immutable.Map({})

  connectStates.forEach((stateName) => {
    nextState = nextState.mergeDeep(Immutable.Map({[stateName]: storeRef.getState()[stateName]}))
  })

  return !nextState.equals(viewState)
}

const updateViewState = (viewState, connectStates) => {
  if (connectStates.length === 0) return []

  var nextViewState = Immutable.Map({})

  connectStates.forEach((stateName) => {
    nextViewState = nextViewState.set(stateName, storeRef.getState()[stateName])
  })

  return nextViewState
}

const dispatch = (actionFunction) => {
  storeRef.dispatch(actionFunction())
}

export default {
  init,
  getStore,
  getState,
  getStateElement,
  shouldUpdate,
  updateViewState,
  dispatch
}