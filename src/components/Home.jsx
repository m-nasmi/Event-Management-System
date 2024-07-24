import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import bg from '../assets/background.jpg';
import AnniversaryParty from "../assets/anniversaryParty.jpeg";
import BirthdayParty from "../assets/birthdayParty.jpg";
import CollegeParty from "../assets/collegeEvents.jpg";
import GenderRevealParty from "../assets/genderRevealparty.jpg";
import MusicalConcert from "../assets/musicalConcert.jpeg";
import Wedding from '../assets/wedding.jpg';
import '../home.css'

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/addevent');
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen relative"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-extrabold text-white mb-8 drop-shadow-lg gradient-text">
          Welcome to Majestic Events...
        </h1>
        <p className="text-xl text-gray-300 mb-6 drop-shadow-lg">
          PLAN YOUR PERFECT EVENT WITH EASE AND STYLE!!!
        </p>
        <button
          onClick={handleGetStarted}
          className="bg-gradient-to-r from-blue-500 to-teal-500 text-white hover:from-blue-600 hover:to-teal-600 py-3 px-6 rounded-full text-lg shadow-lg transition-transform transform hover:scale-105"
        >
          Get Started
        </button>
      </div>
      
      <div className="w-full max-w-4xl mt-10 relative z-10">
        <Carousel
          showArrows={true} 
          autoPlay={true} 
          infiniteLoop={true} 
          className="my-8 custom-carousel"
        >
          <div>
            <img src={AnniversaryParty} alt="Anniversary Party" className="object-cover w-full h-80 rounded-lg shadow-lg" />
          </div>
          <div>
            <img src={BirthdayParty} alt="Birthday Party" className="object-cover w-full h-80 rounded-lg shadow-lg" />
          </div>
          <div>
            <img src={CollegeParty} alt="College Party" className="object-cover w-full h-80 rounded-lg shadow-lg" />
          </div>
          <div>
            <img src={GenderRevealParty} alt="Gender Reveal Party" className="object-cover w-full h-80 rounded-lg shadow-lg" />
          </div>
          <div>
            <img src={MusicalConcert} alt="Musical Concert" className="object-cover w-full h-80 rounded-lg shadow-lg" />
          </div>
          <div>
            <img src={Wedding} alt="Wedding" className="object-cover w-full h-80 rounded-lg shadow-lg" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;