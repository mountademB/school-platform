import React from 'react';
import { useNavigate } from 'react-router-dom';

function SampleInstitution() {
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/institutions/first');
      if (!response.ok) {
        throw new Error('Failed to fetch first institution');
      }
      const data = await response.json();
      navigate(`/institution/${data._id}`);
    } catch (error) {
      console.error('Error:', error);
      // Handle the error appropriately (e.g., show an error message to the user)
    }
  };

  return (
    <button onClick={handleClick}>
      Sample Institution
    </button>
  );
}

export default SampleInstitution;