import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3'

export default function ProjectDistributionGraph({
  months,
  projects,
  entries,
}) {
  
  const [data, setData] = useState(entries[0])
  console.log("projects", projects);
  console.log("entries", entries)
  
  const svgRef = useRef();
  const svgStyle = {
    overflow: "visible",
    transform: "translateX(150px)",
    width: "400px",
    height: "200px",
  }

  useEffect(() => {
    const canvas = d3.select(svgRef.current)
    const xScale = d3.scaleLinear()
      .domain([0, months.length - 1])
      .range([0, 400])

    const yScale = d3.scaleLinear()
      .domain([0, 100])
      .range([200, 0])

    const xAxis = d3.axisBottom(xScale).ticks(months.length)

    canvas
      .select(".x-axis")
      .style("transform", "translateY(200px)")
      .call(xAxis)

    const yAxis = d3.axisLeft(yScale)

    canvas
      .select(".y-axis")
      .call(yAxis)
    
    const myLine = d3.line()
      .x((value, index) => xScale(index))
      .y(value => yScale(value))
      .curve(d3.curveCardinal)

    entries.map((entry) => {
      canvas
        .selectAll(".line")
        .data([entry])
        .join("path")
        .attr("class", "line")
        .attr("d", value => myLine(value))
        .attr("fill", "none")
        .attr("stroke", "blue")
      canvas
        .selectAll("circle")
        .data(entry)
        .join("circle")
        .attr("r", 5)
        .attr("cx", (value, index) => xScale(index))
        .attr("cy", value => yScale(value))
        .attr("stroke", "black")
        .attr("fill", "white")
    })
  }, [data])

  return (
    <>
      <svg ref={svgRef} style={svgStyle}> 
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </>
  )
}
