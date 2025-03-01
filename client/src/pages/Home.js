import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Moroccan Education Platform</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/institution/1">Sample Institution</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;

