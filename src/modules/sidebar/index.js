import { elementsProvider } from 'utils/domUtils.js'
import * as d3 from 'd3'

export default (data) => {
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
      .on("click", (d) => console.log(`INFO: Pressed ${d} checkbox.`))
}

const renderLabels = (options) => {
  options
    .append("label")
      .attr("for", (d) => d)
      .text((d) => d)
}

const getDataFields = (data) => {
  return Object.keys(data[0])
}