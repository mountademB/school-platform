import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InstitutionDetails = ({ id }) => {
  const [institution, setInstitution] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInstitution = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/institutions/${id}`);
        setInstitution(response.data);
      } catch (err) {
        console.error('Error fetching institution details:', err);
        setError('Failed to fetch institution details');
      }
    };

    fetchInstitution();
  }, [id]);

  if (error) return <div>{error}</div>;
  if (!institution) return <div>Loading...</div>;

  return (
    <div className="institution-details">
      <h2>{institution.name}</h2>
      {/* Rest of your JSX */}
    </div>
  );
};

export default InstitutionDetails;