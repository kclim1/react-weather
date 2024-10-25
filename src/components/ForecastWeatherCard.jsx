// eslint-disable-next-line no-unused-vars
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
  

  
export const ForecastCard = ({forecastData})=>{
    if(!forecastData){
        return null
    }
    const {list} = forecastData

    const weatherIcon = (condition,size=100)=>{
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
    }
    const targetTime = '15:00:00'
    const filteredList = list.filter((item) => item.dt_txt.includes(targetTime));

    return (
        <div className="forecast-container">
          {filteredList.map((item, index) => {
            const [date] = item.dt_txt.split(' ');
      
            return (
              <div key={index} className="forecast-item">
                <h3> {date}</h3>
                
                <div className="weather-icon">
                  {weatherIcon(item.weather[0].main)}
                </div>
                <p>Condition: {item.weather[0].main}</p>
                <p>Temperature: {item.main.temp}°C</p>
                <p>Humidity: {item.main.humidity}%</p>
              </div>
            );
          })}
        </div>
      );
};

ForecastCard.propTypes = {
    forecastData: PropTypes.object.isRequired,
};

