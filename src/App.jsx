import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios, { Axios } from 'axios'
import WeatherCards from './components/WeatherCards'
import Loading from './components/Loading'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()

  useEffect(() => {

    const success = pos => {
      const info = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      }
      setCoords(info);
    }

    navigator.geolocation.getCurrentPosition(success);
  }, [])

  useEffect(() => {

    if (coords) {
      const api_key = 'd6fdb17ca743800da9fa32a48bfbe03f';
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${api_key}`;
      axios.get(url)
        .then(res => {
          const celcius = res.data.main.temp - 273.15
          const fahrenheit = (celcius * (9 / 5)) + 30
          setTemperature({ celcius, fahrenheit })

          setWeather(res.data)
        })
        .catch(err => console.log(err))
    }
  }, [coords])

  return (
    <div className="App">
      {
        weather ?

          <WeatherCards weather={weather} temperature={temperature} />

          :

          <Loading />
      }
    </div>
  )
}

export default App
