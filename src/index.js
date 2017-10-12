import './assets/app.scss'
const d3 = require('d3')

document.addEventListener('DOMContentLoaded', () => {
  readData((data) => {
    const fields = getDataFields(data)
    renderSideBar(fields)
  })
})

function readData(callback) {
  const data = [
    {
      status: 200,
      gender: "Male"
    },
    {
      status: 422,
      gender: "Female"
    }
  ]

  if(callback) {
    callback(data)
  }
}

function getDataFields(data) {
  return Object.keys(data[0])
}

function renderSideBar(fields) {
  const sidebar = d3.select(".sidebar");
  sidebar
    .selectAll("input")
    .data(fields)
    .enter()
    .append("label")
      .attr("for", (d) => d)
      .text((d) => d)
    .append("input")
      .attr("checked", true)
      .attr("type", "checkbox")
      .attr("id", (d) => d)
      .on("click", (d) => console.log(`Pressed ${d}`))
}