import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3'

export default function ProjectDistributionGraph(props) {
  const d3Container = useRef(null);
  
  useEffect(() => {
    drawGraph()
  }, [props.data, d3Container.current])

  function drawGraph() {
    if (props.data && d3Container.current) {
      const svg = d3.select(d3Container.current);
      const update = svg
        .append('g')
        .selectAll('text')
        .data(props.data);

      update.enter()
        .append('text')
        .attr('x', (d, i) => i * 25)
        .attr('y', 40)
        .style('font-size', 24)
        .text((d) => d);

      update
        .attr('x', (d, i) => i * 40)
        .text((d) => d)

      update.exit()
        .remove();
    }
  }

  return (
    <svg 
      className="d3-component"
      width={400}
      height={200}
      ref={d3Container}
    
    />
  )

}