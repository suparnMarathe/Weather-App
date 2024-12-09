import clear_icon from "../assets/clear.png";
import humidity_icon from "../assets/humidity.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import rain_icon from "../assets/rain.png";
import search_icon from "../assets/search.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";

import "./Weather.css";
import { useEffect, useRef } from "react";
import { useState } from "react";
export default function Weather() {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };
  async function search(city) {
    if (city === "") {
      alert("Please enter city!");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=883b23343b8a4cccc93b4a44228fd3f5  `;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        const icon = allIcons[data.weather[0].icon] || clear_icon;
        setWeatherData({
          humidity: data.main.humidity,
          temperature: Math.floor(data.main.temp),
          location: data.name,
          windSpeed: data.wind.speed,
          icon: icon,
        });
        setErrorMessage("");
      } else {
        setWeatherData(false);
        setErrorMessage(data.message);
      }
    } catch (error) {
      setWeatherData(false);
      setErrorMessage("An error occured while fetching the data!");
    }
  }
  useEffect(() => {
    search("Pune");
  }, []);
  return (
    <div className="weather">
      <div className="search-bar">
        <input ref={inputRef} type="text" placeholder="Search" />
        <img
          src={search_icon}
          alt="search_icon"
          onClick={() => search(inputRef.current.value)}
        />
      </div>
      {weatherData ? (
        <>
          <img
            src={weatherData.icon}
            alt="clear-icon"
            className="weather-icon"
          />
          <p className="temperature">{weatherData.temperature} ℃</p>
          <p className="location">{weatherData.location}</p>
          <div className="weather-data">
            <div className="col">
              <img src={humidity_icon} alt="humidity-icon" />
              <div>
                <p>{weatherData.humidity}%</p>
                <span>Humidity</span>
              </div>
              <img src={wind_icon} alt="wind-icon" />
              <div>
                <p>{weatherData.windSpeed}Km/hr</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>{errorMessage}</>
      )}
    </div>
  );
}
