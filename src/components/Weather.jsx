import React, { useState } from 'react';

function Weather() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const api = {
    key: '25bdaaa15b692366ea50554b6453574f',
    base: 'https://api.openweathermap.org/data/2.5/'
  };

  const searchpass = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('City not found');
        }
        return res.json();
      })
      .then(result => {
        setWeather(result);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
        setWeather(null);
      });
  };

  return (
    <div className='flex flex-col mt-20 items-center min-h-screen '>
      <div className='flex flex-col mt-20 items-center min-h-screen'>
      <h1 className='text-3xl font-bold text-black mb-8'> Check Weather</h1>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Enter city name...'
        className='p-2 rounded-lg text-black mb-4 w-72 outline-none border-2'

      />
      <button
        onClick={searchpass}
        className='px-4 py-2 w-40 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500 transition duration-300'
      >
        Search
      </button>

      {error && <p className='mt-4 text-red-400'>{error}</p>}

      {weather && (
        <div className='mt-8 p-4 bg-white bg-opacity-20 rounded-lg shadow-lg'>
          <h2 className='text-2xl font-semibold'>{weather.name}, {weather.sys.country}</h2>
          <p className='text-xl'>{Math.round(weather.main.temp)}°C</p>
          <p className='text-lg'>{weather.weather[0].main}</p>
        </div>
      )}
      </div>
    </div>
  );
}

export default Weather;
