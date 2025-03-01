import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchInstitutionById } from '../services/api';

function InstitutionProfile() {
  const { id } = useParams();
  const [institution, setInstitution] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInstitution = async () => {
      try {
        const data = await fetchInstitutionById(id);
        setInstitution(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching institution:', err);
        setError('Failed to fetch institution details');
        setLoading(false);
      }
    };

    fetchInstitution();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!institution) return <div>No institution found</div>;

  return (
    <div className="institution-profile">
      <h1>{institution.name}</h1>
      <p>Type: {institution.type}</p>
      <p>City: {institution.city}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default InstitutionProfile;

