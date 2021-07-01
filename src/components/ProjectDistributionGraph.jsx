import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3'

export default function ProjectDistributionGraph() {
  const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75])
  const svgRef = useRef();
  const svgStyle = {
    overflow: "visible",
    transform: "translateX(150px)",
  }

  useEffect(() => {
    const canvas = d3.select(svgRef.current)
    const xScale = d3.scaleLinear()
      .domain([0, data.length - 1])
      .range([0, 300])

    const yScale = d3.scaleLinear()
      .domain([0, 100])
      .range([150, 0])

    const xAxis = d3.axisBottom(xScale).ticks(data.length)

    canvas
      .select(".x-axis")
      .style("transform", "translateY(150px)")
      .call(xAxis)

    const yAxis = d3.axisLeft(yScale)
    
    canvas
      .select(".y-axis")
      .call(yAxis)
    
    const myLine = d3.line()
      .x((value, index) => xScale(index))
      .y(value => yScale(value))
      .curve(d3.curveCardinal)
    canvas
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("class", "line")
      .attr("d", value => myLine(value))
      .attr("fill", "none")
      .attr("stroke", "blue")
    canvas
      .selectAll("circle")
      .data(data)
      .join("circle")
      .attr("r", 5)
      .attr("cx", (value, index) => xScale(index))
      .attr("cy", value => yScale(value))
      .attr("stroke", "black")
      .attr("fill", "white")
  }, [data])

  return (
    <>
      <svg ref={svgRef} style={svgStyle}> 
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
      {/* <br />
      <button onClick={() => setData(data.map(value => value + 5))}>
        Update Data
      </button>
      <button onClick={() => setData(data.filter(value => value <= 35))}>
        Filter Data
      </button> */}
    </>
  )
}
