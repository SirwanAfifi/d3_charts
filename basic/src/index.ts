import * as d3 from "d3";

const DUMMY_DATA = [
  { id: 1, value: 50 },
  { id: 2, value: 200 },
  { id: 3, value: 20 },
  { id: 4, value: 100 },
  { id: 4, value: 100 },
  { id: 4, value: 100 },
];

const container = d3
  .select("#wrapper")
  .classed("container", true)
  .style("border", "1px solid red");

container
  .selectAll(".bar")
  .data(DUMMY_DATA)
  .enter()
  .append("div")
  .classed("bar", true)
  .style("width", "50px")
  .style("height", (data) => data.value + "px");
