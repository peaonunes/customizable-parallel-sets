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
  bindUploadInput(elementsProvider.UPLOAD_INPUT)
  bindUploadCSV(elementsProvider.UPLOAD_CSV_BUTTON)
  bindUploadJSON(elementsProvider.UPLOAD_JSON_BUTTON)
}

const bindUploadInput = (selector) => {
  const uploadInput = d3.select(selector)
  uploadInput.on('change', (node, index, array) => {
    return readData(node, index, array)
  })
}

const bindUploadCSV = (selector) => {
  d3.selectAll(selector).on('click', () => openFileSelector())
}

const bindUploadJSON = (selector) => {
  d3.selectAll(selector).on('click', () => openFileSelector())
}

const openFileSelector = () => {
  $(elementsProvider.UPLOAD_INPUT).trigger('click')
}

const readData = (node, index, array) => {
  console.log('INFO: Reading data.')
  Materialize.toast('Uploading file...', 3000, 'rounded')
  const fileInput = array[index]

  if (fileInput.files.length === 0) {
    console.error('Error: No file selected.')
    Materialize.toast('No file selected!', 4000)
    return
  }

  const file = fileInput.files[0]
  loadFile(file)
  hideUploadPlaceholder()
  showLoader()
}

const loadFile = (file) => {
  const extension = file.name.split('.').pop()
  if (extension === acceptedFormats.JSON)
    storeUtils.dispatch(actions.loadJSON(file))
  else if (extension === acceptedFormats.CSV)
    storeUtils.dispatch(actions.loadCSV(file))
  else
    extensionNotSuppoerted(extension)
}

const hideUploadPlaceholder = () => {
  const selector = elementsProvider.UPLOAD_PLACE_HOLDER
  d3.select(selector).attr('style', 'display: none;')
}

const showLoader = () => {
  const selector = elementsProvider.LOADER_SECTION
  d3.select(selector).attr('style', 'display: block;')
}

const acceptedFormats = {
  JSON: 'json',
  CSV: 'csv'
}

const extensionNotSuppoerted = (extension) => {
  console.error(`Error: extension ${extension} not supported.`)
  Materialize.toast('Extension ${extension} not supported!', 4000)
}