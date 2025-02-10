import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="page-container">
      <h1>このアプリについて</h1>
      <div className="content">
        <p>このアプリは東京の天気予報を表示する簡単なデモアプリケーションです。</p>
        <p>OpenWeatherMap APIを使用して天気データを取得しています。</p>
        <Link to="/" className="nav-link">ホームページに戻る</Link>
      </div>
    </div>
  );
}

export default About; 