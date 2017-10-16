import { elementsProvider } from '../../utils/domUtils.js'
import setupParsetFunction from './d3.parsets'
import './d3.parsets.scss'
import d3v3 from './d3v3'

setupParsetFunction(d3v3)
const parallelSetChart = d3v3.parsets()

export default (data) => {
  renderParallelSet(data)
}

const renderParallelSet = (data) => {
  const width = getWidth()
  const svg = reloadSvg(width)
  renderParset(data, width, svg)
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

const renderParset = (data, width, svg) => {
  parallelSetChart.dimensions(Object.keys(data[0]))
  parallelSetChart.width(width)

  svg.datum(data).call(parallelSetChart)
}