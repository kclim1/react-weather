import axios from 'axios'

const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;

export const fetchCurrentWeather = async (city) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
  try {
    const response = await axios.get(URL);
    return response.data; 
  } catch (error) {
    console.error('Problem Encountered While Fetching Data:', error);
    throw error;
  }
};

