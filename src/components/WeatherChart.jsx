import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function WeatherChart({ data }) {
  if (!data) return null;

  const chartData = {
    labels: data.slice(0, 8).map(item => 
      new Date(item.dt * 1000).toLocaleTimeString('ja-JP', { 
        hour: '2-digit',
        minute: '2-digit'
      })
    ),
    datasets: [
      {
        label: '気温 (°C)',
        data: data.slice(0, 8).map(item => Math.round(item.main.temp)),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        tension: 0.3
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '24時間の気温予報'
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          callback: function(value) {
            return value + '°C';
          }
        }
      }
    }
  };

  return (
    <div className="weather-chart">
      <Line options={options} data={chartData} />
    </div>
  );
}

export default WeatherChart; 