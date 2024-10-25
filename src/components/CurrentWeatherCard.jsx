/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiThunderstorm,
  WiSnow,
  WiFog,
  WiHurricane,
} from "react-icons/wi";

export const CurrentWeatherCard = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  }
  const { cityName, weather, main, wind,dt } = weatherData;
  const date = new Date(dt * 1000); // Multiply by 1000 to convert from seconds to milliseconds
  const formattedDate = date.toLocaleString()

  const getWeatherIcon = (condition , size=100) => {
    switch (condition) {
      case "Clear":
        return <WiDaySunny size={size}/>;
      case "Clouds":
        return <WiCloud size={size}/>;
      case "Rain":
        return <WiRain size={size}/>;
      case "Thunderstorm":
        return <WiThunderstorm size={size} />;
      case "Snow":
        return <WiSnow size={size}/>;
      case "Fog":
        return <WiFog size={size}/>;
      case "Hurricane":
        return <WiHurricane size={size} />;
      default:
        return null;
    }
  };

  return (
    <div className="card-container">
      <h1>{cityName}</h1>
      <div className="weatherIcon" >{getWeatherIcon(weather[0].main)}</div>
      <p><strong>Date & Time:</strong> {formattedDate}</p>
      <p>
        <strong>Temperature:</strong> {main.temp}°C
      </p>
      <p>
        <strong>Feels Like:</strong> {main.feels_like}°C
      </p>
      <p>
        <strong>Humidity:</strong> {main.humidity}%
      </p>
      <p>
        <strong>Wind Speed:</strong> {wind.speed} m/s
      </p>
      <p>
        <strong>Condition:</strong>{" "}
        {`${weather[0].main}`}
      </p>
    </div>
  );
};
