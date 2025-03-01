import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchInstitutions = async (filters = {}) => {
  try {
    const response = await axios.get(`${API_URL}/institutions`, { params: filters });
    return response.data;
  } catch (error) {
    console.error('Error fetching institutions:', error);
    throw error;
  }
};

export const fetchInstitutionById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/institutions/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching institution details:', error);
    throw error;
  }
};

// If you still need this function, keep it. Otherwise, you can remove it.
export const fetchInstitutionDetails = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/institutions/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching institution details:', error);
    throw error;
  }
};

