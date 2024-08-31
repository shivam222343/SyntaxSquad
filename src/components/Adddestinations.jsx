import React, { useState } from 'react';
import { db } from './firebase';
import { collection, addDoc } from "firebase/firestore";

function AddDestinations() {
    const [itinerary, setItinerary] = useState([]);
    const [showSummary, setShowSummary] = useState(false);
    const [finalSummary, setFinalSummary] = useState(false);

    const addDestination = () => {
        setItinerary([...itinerary, { destination: '', activities: [''] }]);
    };

    const handleDestinationChange = (index, event) => {
        const newItinerary = [...itinerary];
        newItinerary[index].destination = event.target.value;
        setItinerary(newItinerary);
    };

    const handleActivityChange = (destinationIndex, activityIndex, event) => {
        const newItinerary = [...itinerary];
        newItinerary[destinationIndex].activities[activityIndex] = event.target.value;
        setItinerary(newItinerary);
    };

    const addActivity = (index) => {
        const newItinerary = [...itinerary];
        newItinerary[index].activities.push('');
        setItinerary(newItinerary);
    };

    const removeDestination = (index) => {
        const newItinerary = itinerary.filter((_, i) => i !== index);
        setItinerary(newItinerary);
    };

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "itineraries"), {
                itinerary: itinerary,
            });
            console.log("Document successfully written!");
            setShowSummary(true);
        } catch (error) {
            console.error("Error writing document: ", error);
        }
    };

    const handleFinalSave = () => {
        setFinalSummary(true);
    };

    return (
        <div className='p-[10vw] border-2 bg-white'>
            <h2 className="text-2xl font-bold mb-4">Plan Your Itinerary</h2>
            <button
                onClick={addDestination}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 mb-4"
            >
                Add Destination
            </button>
            <form onSubmit={handleSave}>
                {itinerary.map((item, index) => (
                    <div key={index} className="mb-4 border p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                            <input
                                type="text"
                                value={item.destination}
                                onChange={(e) => handleDestinationChange(index, e)}
                                placeholder="Enter Destination"
                                className="inputs border p-2 rounded w-full mr-2"
                            />
                            <button
                                type="button"
                                onClick={() => removeDestination(index)}
                                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
                            >
                                Remove
                            </button>
                        </div>
                        <div className="ml-4">
                            <h4 className="text-lg font-semibold mb-2">Activities</h4>
                            {item.activities.map((activity, activityIndex) => (
                                <input
                                    key={activityIndex}
                                    type="text"
                                    value={activity}
                                    onChange={(e) => handleActivityChange(index, activityIndex, e)}
                                    placeholder="Enter Activity"
                                    className="inputs border p-2 rounded w-full mb-2"
                                />
                            ))}
                            <button
                                type="button"
                                onClick={() => addActivity(index)}
                                className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-700"
                            >
                                Add Activity
                            </button>
                        </div>
                    </div>
                ))}
                <div className="flex justify-end mt-4">
                    <button
                        type='submit'
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mr-2"
                    >
                        Save
                    </button>
                    <button
                        type='button'
                        onClick={handleFinalSave}
                        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
                    >
                        Save to Summary
                    </button>
                </div>
            </form>

            {showSummary && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ease-in-out">
                    <div className="bg-white p-6 rounded shadow-lg w-11/12 max-w-2xl transform transition-all">
                        <h3 className="text-2xl font-bold mb-4 text-center">Itinerary Summary</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            {itinerary.map((item, index) => (
                                <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-lg transform hover:scale-105 transition-transform">
                                    <h4 className="text-lg font-semibold mb-2 text-blue-500">{item.destination}</h4>
                                    <ul className="list-disc list-inside">
                                        {item.activities.map((activity, activityIndex) => (
                                            <li key={activityIndex}>{activity}</li>
                                      ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center">
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

            {finalSummary && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ease-in-out">
                    <div className="bg-white p-6 rounded shadow-lg w-11/12 max-w-2xl transform transition-all">
                        <h3 className="text-3xl font-bold mb-6 text-center text-green-600">Final Itinerary Summary</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            {itinerary.map((item, index) => (
                                <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-lg transform hover:scale-105 transition-transform">
                                    <h4 className="text-lg font-semibold mb-2 text-blue-500">{item.destination}</h4>
                                    <ul className="list-disc list-inside">
                                        {item.activities.map((activity, activityIndex) => (
                                            <li key={activityIndex}>{activity}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center">
                            <button
                                onClick={() => setFinalSummary(false)}
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
}

export default AddDestinations;
