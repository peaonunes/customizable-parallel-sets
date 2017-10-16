import { elementsProvider } from '../../utils/domUtils.js'
import actions from './actions.js'
import * as d3 from 'd3'

let storeRef;

export default (data, store) => {
  storeRef = store;
  const fields = getDataFields(data)
  renderSideBar(elementsProvider.SIDEBAR_OPTIONS, fields)
}

const renderSideBar = (selector, fields) => {
  const sidebar = d3.select(selector);

  const options = sidebar
                    .selectAll("input")
                    .data(fields)
                    .enter()
                    .append("div")
                      .attr("class", "col s12")

  renderCheckboxes(options)
  renderLabels(options)
}

const renderCheckboxes = (options) => {
  options
    .append("input")
      .attr("type", "checkbox")
      .attr("checked", "checked")
      .attr("id", (d) => d)
      .on("click", (d) => toggleFeature(d))
}

const renderLabels = (options) => {
  options
    .append("label")
      .attr("for", (d) => d)
      .text((d) => d)
}

const toggleFeature = (featureName) => {
  console.log(`INFO: Toggled ${featureName} checkbox.`)
  storeRef.dispatch(actions.toggleSidebarFilter(featureName))
}

const getDataFields = (data) => {
  return Object.keys(data[0])
}