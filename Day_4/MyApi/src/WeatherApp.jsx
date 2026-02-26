import React, { useState } from "react";
import "./App.css";

// The WeatherApp component is a functional component that allows users to search for the current weather in a specific city. 
// It uses the useState hook to manage the state of the city input, weather data, loading status, and error messages.
export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
// The API_KEY variable is a placeholder for the actual API key that would be used to authenticate requests to the weather API.
  const API_KEY = "YOUR_API_KEY";
// The fetchWeather function is an asynchronous function that makes a network request to the weather API using the fetch() function.
 const fetchWeather = async () => {
  if (!city.trim()) {
    setError("Enter a city name");
    return;
  }

  try {
    setLoading(true);
    setError("");

    const response = await fetch(
      `https://openweathermap.org/api/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();
    console.log(data); // DEBUG

    if (data.cod !== 200) {
      throw new Error(data.message);
    }

    setWeather(data);
  } catch (err) {
    setError(err.message);
    setWeather(null);
  } finally {
    setLoading(false);
  }
};

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
    setCity(""); // clear input after submit
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Weather App</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          placeholder="Enter city"
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div>
          <h3>{weather.name}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}