import axios from 'axios';
import React, { useState } from 'react';

const Weather = () => {
  const [itinerary, setItinerary] = useState([]);
  const [weather, setWeather] = useState(null);

  const addDestination = () => {
    setItinerary([...itinerary, { destination: '', activities: [] }]);
  };

  const handleDestinationChange = (index, event) => {
    const newItinerary = [...itinerary];
    newItinerary[index].destination = event.target.value;
    setItinerary(newItinerary);
    fetchWeather(event.target.value);
  };

  const fetchWeather = (city) => {
    const apiKey = 'YOUR_WEATHERAPI_KEY'; // Replace with your actual WeatherAPI key
    axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
      .then(response => setWeather(response.data))
      .catch(error => {
        console.error("Error details:", error.response ? error.response.data : error.message);
      });
  };
  

  return (
    <div className='p-20 bg-gradient-to-t from-slate-900 to-blue-950 h-screen w-screen'>
      <h2 className="text-2xl font-bold mb-4 text-white">Plan Your Itinerary</h2>
      {itinerary.map((item, index) => (
        <div key={index} className="mb-4">
          <input
            type="text"
            value={item.destination}
            onChange={(e) => handleDestinationChange(index, e)}
            placeholder="Enter Destination"
            className="border p-2 rounded w-full"
          />
        </div>
      ))}
      {weather && (
        <div className="mt-4">
          <h3 className="text-xl font-bold">Weather in {weather.location.name}</h3>
          <p>{weather.current.condition.text}</p>
          <p>Temperature: {weather.current.temp_c}°C</p>
          <p>Feels Like: {weather.current.feelslike_c}°C</p>
          <p>Humidity: {weather.current.humidity}%</p>
          <p>Wind: {weather.current.wind_kph} kph</p>
        </div>
      )}
      <button onClick={addDestination} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">
        Add Destination
      </button>
    </div>
  );
};

export default Weather;

