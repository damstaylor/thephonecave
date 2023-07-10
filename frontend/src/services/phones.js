import axios from 'axios';

const baseUrl = process.env.REACT_APP_BACKEND_URL;

export const getPhones = async () => {
  try {
    const response = await axios.get(`${baseUrl}/phones`);
    return response.data;
  } catch (error) {
    console.error('Error fetching phones:', error);
    throw error;
  }
};
