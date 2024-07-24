import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa';
import AboutUsBackground from '../assets/background.jpg';
import Location from '../assets/location.jpg';

const ContactUs = () => {
  return (
    <div className='min-h-screen pt-4' style={{ backgroundImage: `url(${AboutUsBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      
      <div className='flex justify-center mx-96 mt-20'>
        <div className="w-1/2">
          <img className='rounded-md border border-zinc-950' src={Location} alt="Location" style={{ width: 'auto', height: 'auto' }} />
        </div>
        <div className="w-1/2">
          <section>
            <div className="max-w-md mx-auto bg-white bg-opacity-25 backdrop-blur-lg rounded-lg shadow-lg p-6">
              <h1 className="text-4xl font-bold text-center">Get in touch</h1>
              <p className="text-center pt-2 pb-4">Fill in the form to start a conversation</p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                  <span>121 Kollupitiya, Colombo</span>
                </p>
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5-V3z"></path>
                  </svg>
                  <span>0814566462</span>
                </p>
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span>www.majesticevents.com</span>
                </p>
              </div>
              <form noValidate="" className="flex flex-col space-y-6">
                <label className="block">
                  <span className="mb-1">Full name</span>
                  <input type="text" placeholder="Muhammed Nasmi" className="block w-full rounded-md shadow-sm  focus:ring-indigo-500 dark:bg-gray-800" />
                </label>
                <label className="block">
                  <span className="mb-1">Email address</span>
                  <input type="email" placeholder="mdnsmi2442@gmail.com" className="block w-full rounded-md shadow-sm  focus:ring-indigo-500 dark:bg-gray-800" />
                </label>
                <label className="block">
                  <span className="mb-1">Message</span>
                  <textarea rows="3" className="block w-full rounded-md shadow-sm  focus:ring-indigo-500 dark:bg-gray-800"></textarea>
                </label>
                <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring-indigo-500 dark:bg-indigo-400 dark:text-gray-900 focus:ring hover:ring">Submit</button>
              </form>
            </div>
          </section>
        </div>
      </div>
      <div className="flex justify-center mt-48">
        <FaFacebook size={30} className="mr-12 cursor-pointer" />
        <FaInstagram size={30} className="mr-12 cursor-pointer" />
        <FaLinkedin size={30} className="mr-12 cursor-pointer" />
        <FaPinterest size={30} className="mr-12 cursor-pointer" />
      </div>
    </div>
  );
}

export default ContactUs;