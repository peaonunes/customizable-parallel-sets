import { elementsProvider } from '../../utils/domUtils.js'
import setupParsetFunction from './d3.parsets'
import storeUtils from '../redux/storeUtils.js'
import Immutable from 'immutable'
import './d3.parsets.scss'
import d3v3 from './d3v3'

setupParsetFunction(d3v3)
const parallelSetChart = d3v3.parsets()
let viewState = Immutable.Map({})

export default (daa) => {
  const innerRender = () => {
    const connectStates = ['dataset', 'featuresFilter']

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
  const dataset = viewState.get('dataset')

  hideLoader()
  renderParallelSet(dataset)
}

const hideLoader = () => {
  const selector = elementsProvider.LOADER_SECTION
  d3.select(selector).attr("style", "display: none;")
}

const renderParallelSet = (dataset) => {
  Materialize.toast('Rendering...', 3000, 'rounded')
  const width = getWidth()
  const svg = reloadSvg(width)
  renderParset(dataset, width, svg)
}

const renderParset = (dataset, width, svg) => {
  parallelSetChart.dimensions(getDimensions(dataset))
  parallelSetChart.width(width)

  svg.datum(dataset.toJS()).call(parallelSetChart)
}

const getDimensions = (dataset) => {
  const allDimensions = Object.keys(dataset.get(0))
  const dimensionsToFilter = viewState.get('featuresFilter')

  return allDimensions.filter((dimension) => !dimensionsToFilter.includes(dimension))
}

const getWidth = () => {
  const width = d3v3.select(elementsProvider.PARALLEL_SET_CONTAINER).node().getBoundingClientRect().width - 30

  return width
}

const reloadSvg = (width) => {
  const parallelSetChartContent = d3v3.select(elementsProvider.PARALLEL_SET_CONTENT)
  parallelSetChartContent.select("svg").remove()
  var svg = parallelSetChartContent.append("svg")
    .attr("width", width)
    .attr("height", parallelSetChart.height())
  
  return svg
}