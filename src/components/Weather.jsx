import clear_icon from "../assets/clear.png";
import humidity_icon from "../assets/humidity.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import rain_icon from "../assets/rain.png";
import search_icon from "../assets/search.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";

import "./Weather.css";
export default function Weather() {
  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <img src={search_icon} alt="search_icon" />
      </div>
      <img src={clear_icon} alt="clear-icon" className="weather-icon" />
      <p className="temperature">15 ℃</p>
      <p className="location">Paris</p>
      <div className="weather-data">
        <div className="col">
              <img src={humidity_icon} alt="humidity-icon" />
              <div>
                <p>91%</p>
                <span>Humidity</span>
              </div>
              <img src={wind_icon} alt="wind-icon" />
              <div>
                <p>30Km/hr</p>
                <span>Wind Speed</span>
              </div>
        </div>
      </div>
    </div>
  );
}
