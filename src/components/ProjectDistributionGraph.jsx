import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3'

const data = [25, 30, 45, 60, 20]

export default function ProjectDistributionGraph() {
  const svgRef = useRef();
  console.log(svgRef)

  useEffect(() => {
    console.log(svgRef)
    const canvas = d3.select(svgRef.current)
  }, [])

  return (
    <svg ref={svgRef} />
  )
}
