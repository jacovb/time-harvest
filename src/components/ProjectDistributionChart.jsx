import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

export default function ProjectDistricutionChart ({
  months,
  projects,
  entries,
}) {

  let dataForChart = projects.map((project, idx) => (
    { 
      label: `${projects[idx].projectNo} - ${projects[idx].name}`,
      data: entries[idx]
    }
  ))

  const chartConfig = {
    type: 'line',
    data: {
      labels: months,
      datasets: dataForChart
    }
  }

  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);
  console.log("projects", projects)
  console.log("dataForChart", dataForChart)

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chart(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance)
    }
  }, [chartContainer])

  return (
    <div>
      <canvas 
        className="chart" 
        ref={chartContainer}
      />
    </div>
  )

}