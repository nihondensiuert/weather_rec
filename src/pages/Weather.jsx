import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WeatherCard from '../components/WeatherCard';
import WeatherChart from '../components/WeatherChart';
import './Weather.css';

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          'https://api.openweathermap.org/data/2.5/forecast?q=Tokyo&appid=2ef19fd6bcd00d3892f19136a0dd150c&units=metric&lang=ja'
        );
        
        if (!response.ok) {
          throw new Error('天気データの取得に失敗しました');
        }

        const data = await response.json();
        console.log('天気データ:', data);
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        console.error('天気データの取得に失敗:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return (
      <div className="page-container">
        <div className="loading">
          <div className="loading-spinner"></div>
          データを読み込み中...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-container">
        <div className="error">
          <h2>エラーが発生しました</h2>
          <p>{error}</p>
          <button onClick={() => window.location.reload()} className="retry-button">
            再試行
          </button>
        </div>
      </div>
    );
  }

  if (!weatherData || !weatherData.list) {
    return (
      <div className="page-container">
        <div className="error">データを取得できませんでした</div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1>天気予報</h1>
      <div className="content">
        <div className="weather-section">
          <h2>{weatherData.city.name}の天気</h2>
          <div className="weather-cards">
            {weatherData.list.slice(0, 3).map((item, index) => (
              <WeatherCard 
                key={index} 
                data={item}
              />
            ))}
          </div>
          <WeatherChart data={weatherData.list} />
        </div>
        <Link to="/" className="nav-link">ホームページに戻る</Link>
      </div>
    </div>
  );
}

export default Weather;