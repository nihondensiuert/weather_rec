import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="page-container">
      <h1>ホームページ</h1>
      <div className="content">
        <div className="welcome-section">
          <h2>ようこそ！</h2>
          <p>このアプリでは以下の機能を提供しています：</p>
          <ul className="feature-list">
            <li>天気予報の確認</li>
            <li>24時間の気温変化グラフ</li>
            <li>詳細な気象情報</li>
          </ul>
        </div>
        <div className="navigation-section">
          <Link to="/weather" className="nav-link">天気予報を見る</Link>
          <Link to="/about" className="nav-link">アプリについて</Link>
        </div>
        <div className="counter-section">
          <button onClick={() => setCount(count + 1)} className="counter-button">
            カウント: {count}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home; 