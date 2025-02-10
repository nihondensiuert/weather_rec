import React from 'react';
import './WeatherCard.css';

function WeatherCard({ data }) {
  if (!data) return null;

  const date = new Date(data.dt * 1000);
  const temp = Math.round(data.main.temp);
  const description = data.weather[0].description;
  const icon = data.weather[0].icon;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;

  return (
    <div className="weather-card">
      <div className="date">
        {date.toLocaleDateString('ja-JP', {
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric'
        })}
      </div>
      <img 
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
        className="weather-icon"
      />
      <div className="temperature">{temp}°C</div>
      <div className="description">{description}</div>
      <div className="weather-details">
        <div className="detail">湿度: {humidity}%</div>
        <div className="detail">風速: {windSpeed}m/s</div>
      </div>
    </div>
  );
}

export default WeatherCard; 