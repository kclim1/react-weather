// eslint-disable-next-line no-unused-vars
import React, { useState , useEffect} from 'react'
import './styles/App.css'
import './styles/index.css'
import './styles/searchbar.css'
import './styles/currentcard.css'
import {CurrentWeatherCard} from './components/CurrentWeatherCard'
import {fetchCurrentWeather} from './services/fetchCurrentWeather'
// eslint-disable-next-line no-unused-vars
import { fetchForecastWeather } from './services/fetchForecastWeather'
import SearchBar from './components/SearchBar'

const App = ()=>{
    
    const [weatherData , setWeatherData] = useState(null)
    const [error,setError] = useState(null)
    
    const handleSearch = async (city)=>{
        try{
            const data = await fetchCurrentWeather(city)
            setWeatherData(data)
            setError(null)
        }catch(error){
            setError('problem encountered while fetching weather data')
            console.error(error,'problem at handleSearch') 
        }
    }

    useEffect(() => {
        if (!import.meta.env.VITE_OPENWEATHER_KEY) {
            console.error('API key missing');
            setError('API key missing');
        } 
    }, []);
    
    return(
        <div className="weather-app">
            <h2>Weather App & 5 Day Forecast</h2>
            <SearchBar onSearch={handleSearch}/>  
            {error && <p>{error}</p>}
            {weatherData && <CurrentWeatherCard weatherData={weatherData} />}
                   
        </div>
    )
}


export default App