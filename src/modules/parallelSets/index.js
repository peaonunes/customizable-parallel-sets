import './d3.parsets.scss'
import { elementsProvider } from 'utils/domUtils.js'
import d3v3 from './d3v3'
import setupParsetFunction from './d3.parsets'

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
  const parallelSetChartContainer = document.getElementById("parallel_set_container")
  const width = parallelSetChartContainer.getBoundingClientRect().width - 20;
  // TODO: Fix get width to pick correct dom width
  const tmpWidth = 700
  return tmpWidth
}

const reloadSvg = (width) => {
  const parallelSetChartContent = d3v3.select(elementsProvider.PARALLEL_SET_CONTENT)
  parallelSetChartContent.select("svg").remove()
  var svg = parallelSetChartContent.append("svg")
    .attr("style", "background-color: #f5f5f5")
    .attr("width", width)
    .attr("height", parallelSetChart.height())
  
  return svg
}

const renderParset = (data, width, svg) => {
  parallelSetChart.dimensions(Object.keys(data[0]))
  parallelSetChart.width(width)

  svg.datum(data).call(parallelSetChart)
}