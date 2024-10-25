# Weather App with React 

## Overview

The Weather Forecasting App is a dynamic web application built with React that provides real-time weather information for various locations. It fetches data from the OpenWeatherMap API and displays current weather conditions as well as a 5-day weather forecast. The app is designed to be visually appealing and user-friendly, offering a responsive layout that works across different devices.

## Features

- **Current Weather**: Displays the current temperature, humidity, wind speed, and weather conditions for a specified city.
- **5-Day Forecast**: Provides detailed weather forecasts for the next five days.
- **User Input**: Allows users to search for weather information by entering the name of a city.
- **Responsive Design**: Adapts to different screen sizes for optimal viewing on mobile and desktop devices.

## Technologies Used

- **React**: For building the user interface, managing state and side effects. 

- **Axios**: For making API requests to fetch weather data.

- **OpenWeatherMap API**: Provides weather data for locations around the globe.

- **CSS**: For styling and layout.

- **React**: A JavaScript library for building user interfaces, allowing for the creation of reusable UI components and efficient state management.

- **Vite**: A modern build tool that provides a faster development experience for React applications by using native ES modules and supporting hot module replacement.

- **Bootstrap**: A popular CSS framework that helps in creating responsive and visually appealing layouts, making it easier to design a consistent look and feel across the application.



## Installation

1. Clone the repository:

```bash
git clone https://github.com/kclim1/react-weather.git
```

## 2. Navigate to the project directory:

```bash
cd react-weather
```

## 3. Install Dependencies
```bash
npm install
```
## 4.Create a .env file in the root directory and add your OpenWeatherMap API key:
```bash
VITE_OPENWEATHER_KEY = your_api_key
```
## 5.Start Dev Server
```
npm run dev
```
## 6. Open app in your browser 
Navigate to http://localhost:5173/ 

---

## Usage
- Enter the city name and press enter or click search button to fetch current weather and 5 day forecast. 
- The Weather Forecasting App includes unit buttons that allow users to switch between different measurement systems for temperature and other weather data. The available options typically include:

- **Celsius (°C)**
- **Fahrenheit (°F)**

### How It Works

- **Switching Units**: When a user clicks on one of the unit buttons, the application immediately updates the displayed weather data to reflect the selected measurement system.
  
- **Automatic Data Update**: After clicking a unit button, the app automatically fetches the latest weather data using the selected unit, ensuring that the information displayed is always accurate and up-to-date. There’s no need for the user to refresh the page or perform additional actions—the change happens seamlessly.

This feature enhances the user experience by providing a quick and easy way to view weather information in their preferred unit of measurement.

---




