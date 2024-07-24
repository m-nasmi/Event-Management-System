import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import bg from '../assets/background.jpg';

const EditEvent = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState({
    your_name: '',
    address: '',
    event_name: '',
    event_type: '',
    venue: '',
    date: '',
    email: '',
    contactNo: '',
    noOfPpl: '',
    price: '',
  });

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/event/getEvent/${eventId}`);
        setEvent(response.data);
      } catch (error) {
        console.error('Error fetching event:', error);
      }
    };

    fetchEvent();
  }, [eventId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/event/editEvent/${eventId}`, event);
      alert('Event updated successfully');
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
      }}
    >
    <div className="max-w-lg mx-auto mt-10 p-8 bg-cyan-100 rounded-xl shadow-lg space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800">Edit Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.keys(event).map((key) => (
          <div key={key} className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 mb-1">
              {key.replace('_', ' ')}
            </label>
            <input
              name={key}
              value={event[key]}
              onChange={handleChange}
              className="input-field border-2 border-gray-200 p-2 rounded-md"
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold hover:bg-blue-600 py-2 px-4 rounded-md mt-4"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default EditEvent;