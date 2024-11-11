'use client';
import React from 'react';
import Link from 'next/link';
import { FaDesktop, FaMobileAlt, FaTelegramPlane, FaDollarSign, FaChartBar, FaTrophy, FaCog, FaSignInAlt } from 'react-icons/fa';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { MdLanguage } from 'react-icons/md';
import { useState , useEffect } from 'react';

const countries = [
    { code: 'EN', name: 'English', flag: '🇬🇧' },
    { code: 'HI', name: 'Hindi', flag: '🇮🇳' },
    { code: 'AR', name: 'Arabic', flag: '🇦🇪' },
    { code: 'ES', name: 'Spanish', flag: '🇪🇸' },
    { code: 'ID', name: 'Indonesian', flag: '🇮🇩' },
    { code: 'RU', name: 'Russian', flag: '🇷🇺' }
  ];


const Navbar = () => {
    const [time, setTime] = useState(new Date());
    const [showDropdown, setShowDropdown] = useState(false);
    const [country ,setSelectedCountry]=useState(countries[0]);
    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);
    const toggleDropdown = () => setShowDropdown(!showDropdown);
  return (
    <div className="bg-white h-10 flex items-stretch border-b border-gray-300">
      <div className="flex items-center space-x-0.5 h-full">
        <button className="bg-sky-700 text-white flex items-center justify-center h-full w-12">
          <FaDesktop className="text-xl" />
        </button>
        <button className="bg-sky-700 text-white flex items-center justify-center h-full w-12">
          <FaMobileAlt className="text-xl" />
        </button>
        <button className="bg-sky-700 text-white flex items-center justify-center h-full w-12">
          <FaTelegramPlane className="text-xl" />
        </button>
        <button className="bg-sky-500 text-white flex items-center justify-center h-full w-12">
          <FaDollarSign className="text-xl" />
        </button>
        <button className="bg-sky-700 text-white flex items-center justify-center h-full w-12">
          <FaChartBar className="text-xl" />
        </button>
        <button className="bg-sky-700 text-white flex items-center justify-center h-full w-12">
          <FaTrophy className="text-xl" />
        </button>
        <button className="bg-lime-500 text-white font-bold text-[14px] items-center justify-center px-2 w-30 h-full">
          33000 INR
          <div className="items-center justify-center text-[12px] font-bold ">BONUS</div>
        </button>
      </div>
      <div className="flex items-center space-x-0.5 ml-auto h-full">
        <Link href="/login" legacyBehavior>
          <a className="flex items-center  bg-sky-700 text-white h-full px-2 text-[10px] font-extrabold justify-center">
            <FaSignInAlt className="text-xl" />
            <span>LOG IN</span>
          </a>
        </Link>

        <Link href="/register" legacyBehavior>
          <a className="bg-lime-500 text-white text-[11px] font-bold h-full flex items-center justify-center px-2  ">
            REGISTRATION
          </a>
        </Link>
        <div className="bg-sky-700 text-white flex items-center justify-center h-full w-12">
          <FaCog className="text-xl" />
        </div>
        <div className="flex items-center space-x-1 bg-sky-600 text-white h-full px-4 justify-center">
          <AiOutlineClockCircle className="text-xl" />
          <span>{time.toLocaleTimeString()}</span>
        </div>

        {/* Language Selection */}
        <div className="relative h-full">
          <div
            onClick={toggleDropdown}
            className="flex items-center space-x-1 bg-blue-900 text-white h-full px-4 justify-center cursor-pointer"
          >
            <span>{country.flag}</span> {/* Default flag */}
            <span>{country.code}</span>
            <MdLanguage className="text-xl ml-1" />
          </div>
          {showDropdown && (
            <div className="absolute right-0 mt-1 w-30 bg-blue-900 text-white rounded shadow-lg border-2">
              {countries.map((country) => (
                <div
                  key={country.code}
                  className="flex items-center space-x-2 px-4 py-2 hover:bg-orange-600 cursor-pointer"
                  onClick={() => {
                    console.log(`Selected language: ${country.name}`);
                    setSelectedCountry(country);
                    setShowDropdown(false); // Close dropdown on selection
                  }}
                >
                  <span>{country.flag}</span>
                  <span>{country.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
