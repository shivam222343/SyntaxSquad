import React, { useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const PlanYourTrip = () => {
  const [itinerary, setItinerary] = useState({ destination: '', days: '', interests: [] });
  const [showSummary, setShowSummary] = useState(false);

  const handleDestinationChange = (value) => {
    setItinerary({ ...itinerary, destination: value.label });
  };

  const handleDaysChange = (event) => {
    setItinerary({ ...itinerary, days: event.target.value });
  };

  const handleInterestClick = (interest) => {
    const newInterests = itinerary.interests.includes(interest)
      ? itinerary.interests.filter((i) => i !== interest)
      : [...itinerary.interests, interest];
    setItinerary({ ...itinerary, interests: newInterests });
  };

  const handleSave = () => {
    setShowSummary(true);
  };

  const p1 = [
    {
      id: 1,
      title: "Just Me",
      desc: "A sole traveler in exploration",
      icon: "🛩️",
      people: "1"
    },
    {
      id: 2,
      title: "Couple's Retreat",
      desc: "A romantic getaway for two",
      icon: "💑",
      people: "2"
    },
    {
      id: 3,
      title: "Family Adventure",
      desc: "Fun and activities for the whole family",
      icon: "👨‍👩‍👧‍👦",
      people: "4"
    },
    {
      id: 4,
      title: "Group Tour",
      desc: "Exploring new places with a group of friends",
      icon: "👫👬",
      people: "6"
    },
    {
      id: 5,
      title: "Solo Backpacker",
      desc: "Wandering and discovering on your own",
      icon: "🎒",
      people: "1"
    },
    {
      id: 6,
      title: "Business Trip",
      desc: "Traveling for work and meetings",
      icon: "💼",
      people: "1"
    },
    {
      id: 7,
      title: "Adventure Seekers",
      desc: "For those craving thrilling experiences",
      icon: "🏞️",
      people: "3"
    },
    {
      id: 8,
      title: "Luxury Escape",
      desc: "Indulge in a high-end vacation experience",
      icon: "🏝️",
      people: "2"
    },
    {
      id: 9,
      title: "Cultural Immersion",
      desc: "Experience and learn about new cultures",
      icon: "🏛️",
      people: "2"
    },
    {
      id: 10,
      title: "Wellness Retreat",
      desc: "Relax and rejuvenate with wellness activities",
      icon: "🧘",
      people: "1"
    },
    {
      id: 11,
      title: "Road Trip",
      desc: "Hit the road and explore various destinations",
      icon: "🚗",
      people: "3"
    },
    {
      id: 12,
      title: "Eco Travel",
      desc: "Sustainable travel with minimal environmental impact",
      icon: "🌍",
      people: "2"
    },
  ];

  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5'>
      <h2 className='font-bold text-3xl mt-10'>Tell Us Your Travel Preferences.</h2>
      <p className='mt-3 text-gray-500 text-xl'>
        Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
      </p>

      <div className='mt-10'>
        <div>
          <h2 className='text-xl my-3 font-medium'>What is your destination of choice?</h2>
        </div>
        <GooglePlacesAutocomplete
          apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
          selectProps={{
            onChange: handleDestinationChange
          }}
        />
      </div>

      <div className='mt-10 flex flex-col gap-[6px]'>
        <h2 className='text-xl my-3 font-medium'>How many days are you planning your trip?</h2>
        <input
          className='h-10 border-2 px-3 rounded-md'
          placeholder='Ex. 2'
          type="number"
          value={itinerary.days}
          onChange={handleDaysChange}
        />
      </div>

      <div className='mt-10 flex flex-col gap-[6px]'>
        <h2 className='text-xl my-3 font-medium'>What is your interest ?</h2>
        <div className='grid grid-cols-3 gap-5 pb-20'>
          {p1.map((item, index) => (
            <div
              key={index}
              onClick={() => handleInterestClick(item.title)}
              className={`p-4 border rounded-lg hover:shadow-xl cursor-pointer duration-200 ${itinerary.interests.includes(item.title) ? 'bg-blue-100' : 'bg-cyan-100'}`}
            >
              <h2 className='text-xl'>{item.icon}</h2>
              <h2>{item.title}</h2>
              <h2>{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleSave}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 mb-4"
      >
        Save Trip
      </button>

      {showSummary && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-11/12 max-w-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">Itinerary Summary</h3>
            <p><strong>Destination:</strong> {itinerary.destination}</p>
            <p><strong>Days:</strong> {itinerary.days}</p>
            <p><strong>Interests:</strong> {itinerary.interests.join(', ')}</p>
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setShowSummary(false)}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanYourTrip;
