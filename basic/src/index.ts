import * as d3 from "d3";

const DUMMY_DATA = [
  { id: 1, value: 10 },
  { id: 2, value: 11 },
  { id: 3, value: 12 },
  { id: 4, value: 6 },
];

const container = d3.select("svg").classed("container", true);

container
  .selectAll(".bar")
  .data(DUMMY_DATA)
  .enter()
  .append("rect")
  .classed("bar", true)
  .attr("width", 50)
  .attr("height", (data) => data.value * 50);
