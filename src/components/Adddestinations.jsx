import React from 'react'
import { useState } from 'react';

function Adddestinations() {
    const [itinerary, setItinerary] = useState([]);
  const addDestination = () => {
    setItinerary([...itinerary, { destination: '', activities: [] }]);
  };

  const handleDestinationChange = (index, event) => {
    const newItinerary = [...itinerary];
    newItinerary[index].destination = event.target.value;
    setItinerary(newItinerary);
  };

  return (
    <div className='p-20 bg-white'>
      <h2 className="text-2xl font-bold mb-4 ">Plan Your Itinerary</h2>
      <button
        onClick={addDestination}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 mb-4"
      >
        Add Destination
      </button>
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
    </div>
  );
};

export default Adddestinations