import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Moroccan Education Platform</h1>
      <p>Explore educational institutions across Morocco</p>
      <Link to="/institutions">View All Institutions</Link>
    </div>
  );
}

export default Home;