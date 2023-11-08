import React, { useEffect, useState } from "react";
import "../css/Style.css";

export default function Temp() {
  const [searchText, setSearchText] = useState("Gandhinagar");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const url = `https://api.weatherapi.com/v1/current.json?key=16b7a01ea69d4ac8bb160343230811&q=${searchText}&aqi=yes`;
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
          setWeatherData(data);
        } else {
          setError("Failed to fetch weather data");
        }
      } catch (error) {
        setError("An error occurred while fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [searchText]);

  const handleSearch = (e) => {
    let val = e.target.value;
    setSearchText(val);
  };

  return (
    <>
      <div className="box">
        <input type="search" className="search" onChange={handleSearch} />
        {loading && <p>Loading...</p>}
        {error && !loading && (
          <p className="error-message">{error}</p>
        )}
        {weatherData && !loading && !error && (
          <div className="info">
            <h2>City Name: {searchText}</h2>
            <p>Temperature: {weatherData.current.temp_c}°C</p>
            <p>Weather: {weatherData.current.condition.text}</p>
            {/* Add more data you want to display here */}
          </div>
        )}
      </div>
    </>
  );
}
