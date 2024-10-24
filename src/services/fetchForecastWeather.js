import axios from 'axios'

const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY


export const fetchForecastWeather = async (city)=>{
    
    try{
        const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
        const response = await axios.get(URL)
        return response.data
    }catch(error){
        console.error(error)
    }
}