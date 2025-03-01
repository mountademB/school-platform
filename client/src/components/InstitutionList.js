import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  List, 
  ListItem, 
  ListItemText, 
  Typography, 
  Paper 
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

// Rest of your code remains the same...

const StyledPaper = styled(Paper)(({ theme }) => ({
  width: '100%',
  maxWidth: 360,
  backgroundColor: theme.palette.background.paper,
}));
function InstitutionList() {
  const [institutions, setInstitutions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInstitutions = async () => {
      try {
        const response = await axios.get('/api/institutions');
        setInstitutions(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch institutions');
        setLoading(false);
      }
    };

    fetchInstitutions();
  }, []);

  if (loading) return <Typography>Loading institutions...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <StyledPaper>
      <List>
      {institutions.map((institution) => (
        <ListItem key={institution._id} component={Link} to={`/institution/${institution._id}`}>
          <ListItemText 
            primary={institution.name}
            secondary={`${institution.type} in ${institution.city}`}
          />
        </ListItem>
      ))}

      </List>
    </StyledPaper>
  );

};

export default InstitutionList;
