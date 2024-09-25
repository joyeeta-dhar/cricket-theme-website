npx create-react-app cricket-theme-website
cd cricket-theme-website
npm start
cricket-theme-website/
│
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Home.js
│   │   ├── LiveScores.js
│   │   ├── Teams.js
│   │   ├── News.js
│   │   └── Game.js
│   ├── App.js
│   └── index.js
└── package.json
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Cricket World</h1>
        <ul className="flex space-x-4">
          <li>
            <Link className="text-white hover:underline" to="/">Home</Link>
          </li>
          <li>
            <Link className="text-white hover:underline" to="/live-scores">Live Scores</Link>
          </li>
          <li>
            <Link className="text-white hover:underline" to="/teams">Teams</Link>
          </li>
          <li>
            <Link className="text-white hover:underline" to="/news">News</Link>
          </li>
          <li>
            <Link className="text-white hover:underline" to="/game">Play Game</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
import React from 'react';

const Home = () => {
  return (
    <div className="bg-[url('/path-to-cricket-image.jpg')] bg-cover bg-center h-screen text-center text-white">
      <div className="flex justify-center items-center h-full">
        <div>
          <h1 className="text-5xl font-bold">Welcome to Cricket World</h1>
          <p className="mt-4 text-2xl">Your one-stop destination for all cricket updates, live scores, and more!</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
import React, { useState, useEffect } from 'react';

const LiveScores = () => {
  const [scores, setScores] = useState([
    { match: 'India vs Pakistan', score: '250/6 (50 overs)', status: 'Live' },
    { match: 'Australia vs England', score: '189/3 (40 overs)', status: 'Live' },
  ]);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Live Cricket Scores</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {scores.map((match, index) => (
          <div key={index} className="bg-white shadow-lg p-4 rounded-lg">
            <h3 className="text-xl font-semibold">{match.match}</h3>
            <p className="text-gray-700">{match.score}</p>
            <span className="text-green-600">{match.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveScores;
import React from 'react';

const teams = [
  { name: 'India', logo: '/path-to-india-logo.png' },
  { name: 'Australia', logo: '/path-to-australia-logo.png' },
  { name: 'England', logo: '/path-to-england-logo.png' },
  // Add more teams
];

const Teams = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Popular Cricket Teams</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teams.map((team, index) => (
          <div key={index} className="bg-white shadow-lg p-4 rounded-lg text-center">
            <img src={team.logo} alt={${team.name} Logo} className="h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">{team.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
import React from 'react';

const News = () => {
  const articles = [
    { title: 'India Wins Against Pakistan', summary: 'India defeated Pakistan in a thrilling match...' },
    { title: 'Australia Makes History', summary: 'Australia set a new world record in cricket history...' },
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Cricket News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="bg-white shadow-lg p-4 rounded-lg">
            <h3 className="text-xl font-semibold">{article.title}</h3>
            <p className="text-gray-700">{article.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
import React from 'react';
import CardGame from './CardGame'; // Import the card game from previous code

const Game = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Play Cricket Game</h2>
      <CardGame />
    </div>
  );
};

export default Game;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LiveScores from './components/LiveScores';
import Teams from './components/Teams';
import News from './components/News';
import Game from './components/Game';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/live-scores" element={<LiveScores />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/news" element={<News />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
