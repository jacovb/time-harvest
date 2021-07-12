import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const colors = [
  "#006ba6",
  "#0496ff",
  "#ffbc42",
  "#ff686b",
  "#ffa69e",
  "#3c787e",
]

export default function ProjectDistricutionChart ({
  months,
  projects,
  entries,
}) {

  let dataForChart = projects.map((project, idx) => (
    { 
      label: `${projects[idx].projectNo} - ${projects[idx].name}`,
      data: entries[idx],
      borderColor: colors[idx],
      backgroundColor: `${colors[idx]}33`, // add 33 (alpha-transparence) to hex color for 20% opacity
      tension: 0.2,
    }
  ))

  const chartConfig = {
    type: 'line',
    data: {
      labels: months,
      datasets: dataForChart
    },
    options: {
      plugins: {
          title: {
              display: true,
              text: 'Monthly Hours per Project',
              padding: {
                top: 0,
                bottom: 10,
              }
          }
      }
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