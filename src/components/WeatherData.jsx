import React from 'react';
import './WeatherData.css';

export const WeatherData = ({ weatherData }) => {
    let cloud_url = "./cloudy_weather.mp4";
    let clear_sky_url = "./clear_sky.mp4";
    let hazy_url = "./hazy_weather.mp4";
    let rain_url = "./rain_weather.mp4";

    let weather_status = weatherData.description === 'Clear' ? clear_sky_url : 
                         weatherData.description === 'Clouds' ? cloud_url : 
                         weatherData.description === 'Rain' ? rain_url : hazy_url;
    return (
        <div className="WeatherData">
            <div className="video">
                <video src={weather_status} autoPlay loop muted playsInline></video>
            </div>
            <div className="data">
                <div className="city">
                    {weatherData.city ?
                        <div>
                            <h2>{weatherData.city}</h2><br />
                            <h2>{weatherData.temp}</h2>
                        </div>
                        : <h2>Search</h2>}
                </div>
                <div className="details">
                    <div>
                        <h4>Weather</h4><br />
                        <h5>{weatherData.description}</h5>
                    </div>
                    <div>
                        <h4>Feels Like</h4><br />
                        <h5>{weatherData.feels_like}</h5>
                    </div>
                    <div>
                        <h4>Humidity</h4><br />
                        <h5>{weatherData.humidity}</h5>
                    </div>
                    <div>
                        <h4>Wind Speed</h4><br />
                        <h5>{weatherData.wind_speed}</h5>
                    </div>
                    <div>
                        <h4>Pressure</h4><br />
                        <h5>{weatherData.pressure}</h5>
                    </div>
                    <div>
                        <h4>Visibility</h4><br />
                        <h5>{weatherData.visibility && (weatherData.visibility / 1000).toFixed(1) + "km"}</h5>
                    </div>
                    <div>
                        <h4>Sunrise</h4><br />
                        <h5>{weatherData.sunrise && new Date(weatherData.sunrise * 1000).toLocaleTimeString()}</h5>
                    </div>
                    <div>
                        <h4>Sunset</h4><br />
                        <h5>{weatherData.sunset && new Date(weatherData.sunset * 1000).toLocaleTimeString()}</h5>
                    </div>
                </div>

            </div>
        </div>
    )
}
