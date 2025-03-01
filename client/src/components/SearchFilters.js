import React, { useState } from 'react';

function SearchFilters({ setFilters }) {
  const [city, setCity] = useState('');
  const [type, setType] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilters({ city, type, isPrivate });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="City" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">All Types</option>
        <option value="School">School</option>
        <option value="University">University</option>
      </select>
      <label>
        <input 
          type="checkbox" 
          checked={isPrivate} 
          onChange={(e) => setIsPrivate(e.target.checked)} 
        />
        Private Institution
      </label>
      <button type="submit">Apply Filters</button>
    </form>
  );
}

export default SearchFilters;

