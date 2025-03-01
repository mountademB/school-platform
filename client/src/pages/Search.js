import React, { useState, useEffect } from 'react';
import SearchFilters from '../components/SearchFilters';
import Map from '../components/Map';
import { fetchInstitutions } from '../services/api';
import './Search.css'; // We'll create this CSS file next

function Search() {
  const [institutions, setInstitutions] = useState([]);
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchInstitutions(filters);
        setInstitutions(data);
        setLoading(false);
      } catch (err) {
        console.error('Error in fetchData:', err);
        setError(`Failed to fetch institutions: ${err.message}`);
        setLoading(false);
      }
    };

    fetchData();
  }, [filters]);


  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="search-page">
      <h1>Search Institutions</h1>
      <div className="search-container">
        <div className="filters-container">
          <SearchFilters setFilters={setFilters} />
        </div>
        <div className="results-container">
          <Map institutions={institutions} />
          <ul className="institution-list">
            {institutions.map(institution => (
              <li key={institution._id} className="institution-item">
                <h3>{institution.name}</h3>
                <p>{institution.type} - {institution.city}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Search;

