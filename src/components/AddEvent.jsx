import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import bg from '../assets/background.jpg';

const AddEvent = () => {
  const [your_name, setYourname] = useState('');
  const [address, setAddress] = useState('');
  const [event_name, setEventname] = useState('');
  const [event_type, setEventype] = useState('');
  const [venue, setVenue] = useState('');
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [noOfPpl, setnoOfPpl] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');

  const url = `http://localhost:8080/event/addEvent`;

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const eventTypes = [
    'Musical Concert',
    'Gender Reveal Party',
    'Birthday Party',
    'Anniversary Party',
    'College Events',
    'Wedding'
  ];

  const eventPackages = {
    '0-20': 10000,
    '20-50': 20000,
    '50-100': 30000,
    '100-200': 50000,
    '200+': 100000,
  };

  const handlePackageChange = (selectedPackage) => {
    setnoOfPpl(selectedPackage);
    setPrice(eventPackages[selectedPackage] || '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (contactNo.length !== 10 || isNaN(contactNo)) {
      alert('Contact Number needs to be valid and must be exactly 10 characters');
      return;
    }
    if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }

    try {
      await axios.post(url, {
        your_name,
        address,
        event_name,
        event_type,
        venue,
        email,
        date,
        contactNo,
        noOfPpl,
        price,
      });

      setYourname('');
      setAddress('');
      setEventname('');
      setEventype('');
      setVenue('');
      setEmail('');
      setDate('');
      setContactNo('');
      setnoOfPpl('');
      setPrice('');

      console.log('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
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
      <h2 className="text-2xl font-bold text-center text-gray-800">Event Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-600 mb-1">Your Name</label>
          <input
            value={your_name}
            onChange={(e) => setYourname(e.target.value)}
            placeholder="Enter your name"
            className="input-field border-2 border-gray-200 p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-600 mb-1">Address</label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
            className="input-field border-2 border-gray-200 p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-600 mb-1">Event Name</label>
          <input
            value={event_name}
            onChange={(e) => setEventname(e.target.value)}
            placeholder="Enter event name"
            className="input-field border-2 border-gray-200 p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-600 mb-1">Event Type</label>
          <select
            value={event_type}
            onChange={(e) => setEventype(e.target.value)}
            className="input-field border-2 border-gray-200 p-2 rounded-md"
          >
            <option value="" disabled>
              Select Event Type
            </option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-600 mb-1">Venue</label>
          <input
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            placeholder="Enter the location"
            className="input-field border-2 border-gray-200 p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-600 mb-1">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="input-field border-2 border-gray-200 p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-600 mb-1">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="someone@gmail.com"
            className="input-field border-2 border-gray-200 p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-600 mb-1">Contact No.</label>
          <input
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
            placeholder="0XXXXXXXXX"
            className="input-field border-2 border-gray-200 p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-600 mb-1">Attendees</label>
          <select
            value={noOfPpl}
            onChange={(e) => handlePackageChange(e.target.value)}
            className="input-field border-2 border-gray-200 p-2 rounded-md"
          >
            <option value="" disabled>
              Select Attendees
            </option>
            {Object.keys(eventPackages).map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-600 mb-1">Price</label>
          <input
            value={price}
            placeholder="Price"
            className="input-field border-2 border-gray-200 p-2 rounded-md"
            readOnly
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white font-semibold hover:bg-blue-600 py-2 px-4 rounded-md mt-4"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default AddEvent;