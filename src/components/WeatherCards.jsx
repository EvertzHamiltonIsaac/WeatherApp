import React from 'react'
import { useState } from 'react'


const WeatherCards = ({ weather, temperature }) => {

    const [isCelcius, setIsCelcius] = useState(true)

    const changeUnit = () => {
        setIsCelcius(!isCelcius)
    }


    console.log(weather);

    return (
        <main className="mainWeather">
            <section className='weatherContainer'>

                <header className="weatherTittle">
                    <h1>Weather App</h1>
                    <h3>{weather?.name}, {weather?.sys.country}</h3>
                </header>

                <article className="weatherBody">

                    <div className="sectionWeatherImg">
                        <img src={`http://openweathermap.org/img/wn/${weather && weather?.weather[0].icon}@4x.png`} alt={weather && weather?.weather[0].description} />
                    </div>

                    <div className="sectionWeatherText">

                        <header className='sectionWeatherText_tittle'><h4>"{weather?.weather[0].description}"</h4></header>

                        <ul className='weatherText_info'>
                            <li><span className='weatherText_tag'>Wind speed</span>: {`${weather?.wind.speed} m/s`}</li>
                            <li><span className='weatherText_tag'>Clouds</span>: {`${weather?.clouds.all} %`}</li>
                            <li><span className='weatherText_tag'>Pressure</span>: {`${weather?.main.pressure} mb`}</li>
                            <li><span className='weatherText_tag'>Pressure</span>: {`${weather?.main.humidity} %`}</li>
                        </ul>

                    </div>

                </article>

                <article className="weatherFooter">
                    <p>{isCelcius ? `${temperature?.celcius.toFixed(1)} °C` : `${temperature?.fahrenheit.toFixed(1)} °F`}</p>
                    <button onClick={changeUnit}>Change Unit</button>
                </article>

            </section>
        </main>
    )
}

export default WeatherCards