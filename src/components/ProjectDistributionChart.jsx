import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

export default function ProjectDistricutionChart ({
  months,
  projects,
  entries,
}) {

  let myDataSet = projects.map((project, idx) => (
    { 
      label: `${projects[idx].projectNo} - ${projects[idx].name}`,
      data: entries[idx]
    }
  ))

  const chartConfig = {
    type: 'line',
    data: {
      labels: months,
      datasets: myDataSet
    }
  }

  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);
  console.log("projects", projects)
  console.log("myDataSet", myDataSet)

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chart(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance)
    }
  }, [chartContainer])

  return (
    <div>
      <canvas ref={chartContainer}/>
    </div>
  )

}