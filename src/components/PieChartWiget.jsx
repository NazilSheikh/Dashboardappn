import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChartWidget({ data, title }) {
  const chartData = {
    labels: ['Failed', 'Warning', 'Not Available', 'Passed'],
    datasets: [
      {
        data,
        backgroundColor: ['#d9534f', '#f0ad4e', '#999999', '#5cb85c'],
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="widget-card">
      <h3>{title}</h3>
      <Pie data={chartData} />
    </div>
  );
}

export default PieChartWidget;
