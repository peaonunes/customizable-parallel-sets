import renderParallelSets from './modules/parallelSets'
import storeProvider from './modules/redux/reducers'
import storeUtils from './modules/redux/storeUtils'
import renderSidebar from './modules/sidebar'
import renderUpload from './modules/upload'
import readData from './modules/dataReader'
import Immutable from 'immutable'
import './assets/app.scss'

const store = storeProvider()
let innerState = Immutable.Map({})

document.addEventListener('DOMContentLoaded', () => {
  const innerRender = () => {
    const connectStates = ['dataset']

    if (storeUtils.shouldUpdate(innerState, connectStates)) {
      innerState = storeUtils.updateViewState(innerState, connectStates)

      if (storeUtils.getStateElement('dataset').size > 0) {
        render()
      }
    }

    renderIdle()
  }

  const store = storeUtils.getStore()
  store.subscribe(innerRender)
  innerRender()
})

const render = () => {
  console.log(`INFO: Rendering the content.`)
  setTimeout(() => {
    renderSidebar()
    renderParallelSets()
  }, 2000)
}

const renderIdle = () => {
  renderUpload()
  console.log(`INFO: App is idle.`)
}