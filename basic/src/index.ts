import * as d3 from "d3";
import * as d3Scale from "d3-scale";

const DUMMY_DATA = [
  { id: 1, value: 10 },
  { id: 2, value: 11 },
  { id: 3, value: 12 },
  { id: 4, value: 6 },
];

const xScale = d3
  .scaleBand()
  .domain(DUMMY_DATA.map((dataPoint) => dataPoint.id.toString()))
  .rangeRound([0, 250])
  .padding(0.1);
const yScale = d3.scaleLinear().domain([0, 15]).range([400, 0]);

const container = d3.select("svg").classed("container", true);

container
  .selectAll(".bar")
  .data(DUMMY_DATA)
  .enter()
  .append("rect")
  .classed("bar", true)
  .attr("width", xScale.bandwidth())
  .attr("height", (data) => 400 - yScale(data.value))
  .attr("x", (data) => xScale(data.id.toString()))
  .attr("y", (data) => yScale(data.value));
