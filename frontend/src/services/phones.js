import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

export const getPhones = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/phones`);
    return response.data;
  } catch (error) {
    console.error('Error fetching phones:', error);
    throw error;
  }
};
