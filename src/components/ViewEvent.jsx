import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import { TiDocumentText } from 'react-icons/ti';
import { MdOutlineModeEdit, MdDeleteOutline } from 'react-icons/md';
import bg from '../assets/background.jpg';

const ViewEvent = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:8080/event/getAll');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleEdit = (eventId) => {
    navigate(`/editevents/${eventId}`);
  };

  const generatePDF = (event) => {
    const doc = new jsPDF();
    doc.text(`Event Name: ${event.event_name}`, 20, 10);
    doc.text(`Event Type: ${event.event_type}`, 20, 20);
    doc.text(`Venue: ${event.venue}`, 20, 30);
    doc.text(`Date: ${event.date}`, 20, 40);
    doc.text(`Email: ${event.email}`, 20, 50);
    doc.text(`Contact No: ${event.contactNo}`, 20, 60);
    doc.text(`No of People: ${event.noOfPpl}`, 20, 70);
    doc.text(`Price: Rs.${event.price}`, 20, 80);

    doc.save(`event_details_${event.id}.pdf`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/event/deleteEvent/${id}`);
      setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
    } catch (error) {
      console.error('Error deleting event', error);
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
      <div className="max-w-7xl mx-auto mt-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-cyan-100 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-2">{event.event_name}</h3>
              <p className="text-gray-600"><strong>Type:</strong> {event.event_type}</p>
              <p className="text-gray-600"><strong>Venue:</strong> {event.venue}</p>
              <p className="text-gray-600"><strong>Date:</strong> {event.date}</p>
              <p className="text-gray-600"><strong>Email:</strong> {event.email}</p>
              <p className="text-gray-600"><strong>Contact No:</strong> {event.contactNo}</p>
              <p className="text-gray-600"><strong>No of People:</strong> {event.noOfPpl}</p>
              <p className="text-gray-600"><strong>Price:</strong> Rs.{event.price}</p>
              <div className="flex items-center mt-4 space-x-4">
                <button
                  onClick={() => handleEdit(event.id)}
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(event.id)}
                  className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
                <button
                  onClick={() => generatePDF(event)}
                  className="hover:text-green-600 bottom-4 right-4 bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600"
                >
                  <TiDocumentText size={20} className="mr-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewEvent;