import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar.jsx'
import { WeatherData } from './components/WeatherData.jsx'


function App() {
  let [weatherData, setWeatherData] = useState({})
  return (
    <div>
      <Navbar setWeatherData={setWeatherData}/>
      <WeatherData weatherData={weatherData}/>
    </div>
  )
}

export default App
