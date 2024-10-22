// eslint-disable-next-line no-unused-vars
import React, { useState , useEffect} from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'
import fetchCurrentWeather from './services/fetchAPI'
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

    useEffect(()=>{
        if(!import.meta.env.API_KEY){
            console.error('API key missing')
            setError('api key missing')
        }
    },[])
    
    return(
        <div className="weather-app">
            <h2>Weather App & 5 Day Forecast</h2>
            <SearchBar onSearch={handleSearch}/>  
            {error && <p>{error}</p>}
            {weatherData && <WeatherCard weatherData={weatherData} />}
                   
        </div>
    )
}


export default App