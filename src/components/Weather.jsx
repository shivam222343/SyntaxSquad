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
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then(response => setWeather(response.data))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Plan Your Itinerary</h2>
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
          <h3 className="text-xl font-bold">Weather in {weather.name}</h3>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C</p>
        </div>
      )}
      <button onClick={addDestination} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">
        Add Destination
      </button>
    </div>
  );
};

export default Weather;
