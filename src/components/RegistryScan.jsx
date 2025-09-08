import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

function RegistryScanBarChart({ title, dataCounts }) {
  const data = {
    labels: ['Vulnerabilities'],
    datasets: [
      {
        label: 'Critical',
        data: [dataCounts.critical],
        backgroundColor: '#d9534f'  // Red
      },
      {
        label: 'High',
        data: [dataCounts.high],
        backgroundColor: '#f0ad4e'  // Orange
      },
      {
        label: 'Medium',
        data: [dataCounts.medium],
        backgroundColor: '#ffd700'  // Yellow
      },
      {
        label: 'Low',
        data: [dataCounts.low],
        backgroundColor: '#999999'  // Gray
      }
    ]
  };

  const options = {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
          }
        }
      },
      legend: {
        display: true,
        position: 'bottom'
      }
    },
    scales: {
      x: {
        stacked: true,
        beginAtZero: true
      },
      y: {
        stacked: true
      }
    }
  };

  return (
    <div className="widget-card">
      <h3>{title}</h3>
      <Bar data={data} options={options} />
    </div>
  );
}

export default RegistryScanBarChart;
