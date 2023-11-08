import React, { useEffect, useState } from "react";
import "../css/Style.css";

export default function Temp() {
  const [searchText, setSearchText] = useState("Gandhinagar");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [click, setClick] = useState(false);

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
          setClick(true); // Set click to true when data is fetched
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
    <div className="container weather-container my-5">
      <div className="card horizontal-card p-4">
        <div className="row">
          <div className="col-md-4">
            <img
              src="images/logo.png"
              alt="Weather Icon"
              className="img-fluid"
            />
          </div>
          <div className="col-md-8">
            <h1 className="text-center">Weather App</h1>
            <div className="input-group mb-3">
              <input
                type="search"
                className="form-control"
                placeholder="Enter a city name"
                onChange={handleSearch}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary"
                  type="button"
                  // onClick={fetchWeatherData} // Call the function here
                >
                  <img src="images/search-icon.png" alt="Search" height="20px" width="20px" />
                </button>
              </div>
            </div>
            {loading && <p className="loading text-center">Loading...</p>}
            {error && !loading && (
              <div className="alert alert-danger my-3">{error}</div>
            )}
            {weatherData && !loading && !error && click && (
              <div className="my-3">
                <h2>Weather Information</h2>
                <table className="table">
                  <tbody>
                    <tr>
                      <th>City Name</th>
                      <td>{weatherData.location.name}</td>
                    </tr>
                    <tr>
                      <th>Temperature</th>
                      <td>{weatherData.current.temp_c}°C</td>
                    </tr>
                    <tr>
                      <th>Weather</th>
                      <td>{weatherData.current.condition.text}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
