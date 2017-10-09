function renderParallelSet(selector, data) {
  const chart = d3.parsets();  
  const chartContainer = d3.select(selector);
  console.log(chartContainer)
  const width = chartContainer.node().getBoundingClientRect().width;

  chartContainer.select("svg").remove();

  var svg = chartContainer.append("svg")
    .attr("style", "background-color: #f5f5f5")
    .attr("width", width)
    .attr("height", chart.height());

  var filteredCategories = getFilteredCategories();

  chart.dimensions(filteredCategories);
  chart.width(width);

  const chartData = data.reduce((list, element) => {
    list.push({
      Status: element.status,
      Category: element.category,
    });

    return list;
  }, []);

  svg.datum(chartData).call(chart);
}

var data = [
  {
    status: 200,
    category: "cosmeticos"
  },
  {
    status: 404,
    category: "cosmeticos"
  }
]

const setupParsetFunction = require('./d3.parsets.js');
setupParsetFunction(d3);

window.onload = function() {
  console.log('window - onload'); // 4th

  renderParallelSet(".content", data);
};