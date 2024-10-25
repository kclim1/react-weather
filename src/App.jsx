// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./styles/App.css";
import "./styles/index.css";
import "./styles/searchbar.css";
import "./styles/currentcard.css";
import "./styles/forecastcard.css";
import { CurrentWeatherCard } from "./components/CurrentWeatherCard";
import { fetchCurrentWeather } from "./services/fetchCurrentWeather";
import { fetchForecastWeather } from "./services/fetchForecastWeather";
import SearchBar from "./components/SearchBar";
import { ForecastCard } from "./components/ForecastWeatherCard";
import ImperialButton  from "./components/ImperialButton";
import  MetricButton  from "./components/MetricButton";

const App = () => {
  const [forecastData, setForecastData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState("metric");
  const [city, setCity] = useState("");

  const selectMetric = () => {
    setUnit("metric");
    console.log("metric selected");
  };

  const selectImperial = () => {
    setUnit("imperial");
    console.log("imperial selected");
  };

  const handleSearch = async (city) => {
    try {
      setCity(city);
      const currentData = await fetchCurrentWeather(city, unit);
      const forecastData = await fetchForecastWeather(city, unit);
      setForecastData(forecastData);
      setWeatherData(currentData);
      setError(null);
    } catch (error) {
      setError("problem encountered while fetching weather data");
      console.error(error, "problem at handleSearch");
    }
  };

  useEffect(() => {
    if (!import.meta.env.VITE_OPENWEATHER_KEY) {
      console.error("API key missing");
      setError("API key missing");
    }
  }, []);

  useEffect(() => {
    if (city) {
      handleSearch(city);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unit]);

  return (
    <div className="weather-app">
      <div className="currentWeather">
        <h2>Weather App & 5 Day Forecast</h2>
        <SearchBar onSearch={handleSearch} />
        <div className="unit-buttons">
          <div className="unit-buttons">
            <MetricButton unit={unit} selectMetric={selectMetric} />
            <ImperialButton unit={unit} selectImperial={selectImperial} />
          </div>
        </div>
        {error && <p>{error}</p>}
        {weatherData && (
          <CurrentWeatherCard weatherData={weatherData} unit={unit} />
        )}
      </div>

      <div className="forecastWeather">
        {forecastData && (
          <ForecastCard forecastData={forecastData} unit={unit} />
        )}
      </div>
    </div>
  );
};

export default App;
