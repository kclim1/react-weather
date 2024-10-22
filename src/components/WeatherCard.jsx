/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { 
    WiDaySunny, 
    WiCloud, 
    WiRain, 
    WiThunderstorm, 
    WiSnow, 
    WiNightClear, 
    WiFog, 
    WiHurricane 
  } from 'react-icons/wi';
  
export const  WeatherCard = ({weatherData})=>{
    if(!weatherData){
        return null
    }
    const {city,list} = weatherData
    const firstForecast = list[0]; 
    const { dt_txt, main, weather, wind } = firstForecast;

    return(
        <div className="card">
            <h1>City: {city.name}</h1>
            <p><strong>Temperature:</strong> {main.temp}°C</p>
            <p><strong>Feels Like:</strong> {main.feels_like}°C</p>
            <p><strong>Humidity:</strong> {main.humidity}%</p>
            <p><strong>Wind Speed:</strong> {wind.speed} m/s</p>
            <p><strong>Condition:</strong> {`${weather[0].main} - ${weather[0].description}`}</p>
            <p><strong>Date & Time:</strong> {new Date(dt_txt).toLocaleString()}</p> 
        </div>
    )
}

