import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3'

export default function ProjectDistributionGraph() {
  const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75])
  const svgRef = useRef();
  console.log(svgRef)

  useEffect(() => {
    const canvas = d3.select(svgRef.current)
    const myLine = d3.line()
      .x((value, index) => index * 50)
      .y(value => 150 - value)
      .curve(d3.curveCardinal)
    canvas
      .selectAll("path")
      .data([data])
      .join("path")
      .attr("d", value => myLine(value))
      .attr("fill", "none")
      .attr("stroke", "blue")
    canvas
      .selectAll("circle")
      .data(data)
      .join("circle")
      .attr("r", 5)
      .attr("cx", (value, index) => index * 50)
      .attr("cy", value => 150 - value)
      .attr("stroke", "black")
      .attr("fill", "white")
  }, [data])

  return (
    <>
      <svg ref={svgRef} />
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
