import { elementsProvider } from '../../utils/domUtils.js'
import storeUtils from '../redux/storeUtils.js'
import Immutable from 'immutable'
import actions from './actions'
import * as d3 from 'd3'

let viewState = Immutable.Map({})

export default () => {
  const innerRender = () => {
    const connectStates = []

    if (storeUtils.shouldUpdate(viewState, connectStates)) {
      viewState = storeUtils.updateViewState(viewState, connectStates)
      render()
    }
  }

  const store = storeUtils.getStore()

  d3.select(window).on('resize', render)
  store.subscribe(innerRender)
  innerRender()
}

const render = () => {
  bindUploadCSVInput(elementsProvider.UPLOAD_CSV_INPUT)
  bindUploadCSV(elementsProvider.UPLOAD_CSV_BUTTON)
}

const bindUploadCSVInput = (selector) => {
  const uploadInput = d3.select(selector)
  uploadInput.on("change", (node, index, array) => {
    return readData(node, index, array)
  })
}

const bindUploadCSV = (selector) => {
  d3.selectAll(selector).on("click", () => openFileSelector())
}

const openFileSelector = () => {
  $(elementsProvider.UPLOAD_CSV_INPUT).trigger("click")
}

const readData = (node, index, array) => {
  console.log('INFO: Reading data.')
  const fileInput = array[index]

  if (fileInput.files.length === 0) {
    console.error('Error: No file selected.')
    Materialize.toast('No file selected!', 4000)
    return
  }

  const file = fileInput.files[0]
  storeUtils.dispatch(actions.loadCSV(file))
  hideUploadPlaceholder()
  showLoader()
}

const hideUploadPlaceholder = () => {
  const selector = elementsProvider.UPLOAD_PLACE_HOLDER
  d3.select(selector).attr("style", "display: none;")
}

const showLoader = () => {
  const selector = elementsProvider.LOADER_SECTION
  d3.select(selector).attr("style", "display: block;")
}