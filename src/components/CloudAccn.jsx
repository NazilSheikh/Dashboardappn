
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function CloudAccountPieChart({ title, connected, notConnected }) {
  const data = {
    labels: ['Connected', 'Not Connected'],
    datasets: [
      {
        data: [connected, notConnected],
        backgroundColor: ['#007bff', '#d3d3d3'],  
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="widget-card">
      <h3>{title}</h3>
      <Pie data={data} />
    </div>
  );
}

export default CloudAccountPieChart;
