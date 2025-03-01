import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function InstitutionDetail() {
  const [institution, setInstitution] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchInstitution = async () => {
      try {
        const url = id === 'first' 
          ? 'http://localhost:5000/api/institutions/first'
          : `http://localhost:5000/api/institutions/${id}`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch institution');
        }
        const data = await response.json();
        setInstitution(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchInstitution();
  }, [id]);

  if (!institution) return <div>Loading...</div>;

  return (
    <div>
      <h1>{institution.name}</h1>
      <p>Type: {institution.type}</p>
      <p>Location: {institution.location}</p>
      {/* Add more institution details as needed */}
    </div>
  );
}

export default InstitutionDetail;
