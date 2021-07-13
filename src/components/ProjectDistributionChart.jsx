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
    },
    transitions: {
      show: {
        animations: {
          x: {
            from: 0
          },
          y: {
            from: 0
          }
        }
      },
      hide: {
        animations: {
          x: {
            to: 0
          },
          y: {
            to: 0
          }
        }
      }
    }
  }

  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chart(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance)
    }
  }, [chartContainer])

  const updateDataset = (newData) => {
    if (chartInstance) {
      chartInstance.data.datasets = newData;
      chartInstance.update();
    }
  }

  const updateMonthLabels = (newMonthRange) => {
    if (chartInstance) {
      chartInstance.data.labels = newMonthRange;
      chartInstance.update();
    }
  }

  useEffect(() => {
    updateDataset(dataForChart);
  }, [dataForChart])

  useEffect(() => {
    updateMonthLabels(months);
  }, [months])

  return (
    <div>
      <canvas 
        className="chart" 
        ref={chartContainer}
        width={window.innerWidth}
      />
    </div>
  )

}