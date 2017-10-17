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

export default {
  init,
  getStore,
  getState
}