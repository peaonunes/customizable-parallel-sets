import './d3.parsets.scss';
import { elementsProvider } from 'utils/domUtils.js'

const d3v3 = require('./d3v3');
const setupParsetFunction = require('./d3.parsets');

setupParsetFunction(d3v3);
let chart = d3v3.parsets();

export default (data) => {
  renderParallelSet(data);
}

const renderParallelSet = (data) => {
  const chartContainer = document.getElementById("parallel_set_container")
  const width = chartContainer.getBoundingClientRect().width - 20;
  // TODO: Fix get width to pick correct dom width
  const tmpWidth = 700;

  const chartContent = d3v3.select(elementsProvider.PARALLEL_SET_CONTENT);
  chartContent.select("svg").remove();
  var svg = chartContent.append("svg")
    .attr("style", "background-color: #f5f5f5")
    .attr("width", tmpWidth)
    .attr("height", chart.height());

  chart.dimensions(Object.keys(data[0]));
  chart.width(tmpWidth);

  svg.datum(data).call(chart);
}