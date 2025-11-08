import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import { donationData } from "../data/mockData.js"; 
import '../index.css';

const Hero = () => {
  const [showCampaignInfo, setShowCampaignInfo] = useState(false);

  // Calculate percentage for progress bar
  const percentage = Math.min(Math.round((donationData.raised / donationData.goal) * 100), 100);

  return (
    <div className="text-white bg-[#3D96AB] pt-16 sm:pt-16">
      <div className="max-w-[900px] w-full min-h-screen mx-auto text-center flex flex-col justify-center px-4 py-8">
        
        {/* Intro Text */}
        <p className="font-heading text-[#FFD13A] font-semibold p-2 tracking-widest text-sm sm:text-base">
          YORK REGION EDUCATIONAL SERVICES (YRES)
        </p>

        {/* Main Heading */}
        <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold md:py-4 leading-snug md:leading-tight">
          Empower Learning Through Your Generosity
        </h1>

        {/* Typed animation for engagement (hidden on mobile) */}
        <div className="hidden sm:flex justify-center items-center py-4 gap-3">
          <p className="font-subheading text-2xl md:text-3xl font-semibold">Support</p>
          <ReactTyped
            className="font-subheading text-[#FFD13A] text-2xl md:text-3xl font-semibold"
            strings={[
              "Our Students' Dreams",
              "Innovative Education Programs",
              "Accessible Learning Opportunities",
            ]}
            typeSpeed={80}
            backSpeed={50}
            loop
          />
        </div>

        {/* Description */}
        <p className="font-body text-md sm:text-lg md:text-xl font-medium text-gray-100 px-2 sm:px-4">
          Every donation helps YRES provide quality educational programs and
          resources for students in our community. Join us in shaping the future
          of learning.
        </p>

    <div className="mt-8 grid gap-6 md:grid-cols-3">
    {/* Card 1 */}
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-gray-900">
        <img className="w-full" src="/img/card1.jpg" alt="Donation 1" />
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Supporting Students</div>
        <p className="text-gray-700 text-base">
            Every small donation helps a student reach their dream. Your contribution makes a difference.
        </p>
        </div>
        <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #donation
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #YRES
        </span>
        </div>
    </div>

    {/* Card 2 */}
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-gray-900">
        <img className="w-full" src="/img/card2.jpg" alt="Donation 2" />
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Innovative Programs</div>
        <p className="text-gray-700 text-base">
            Your support helps create programs that encourage creativity and learning for all students.
        </p>
        </div>
        <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #education
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #YRES
        </span>
        </div>
    </div>

    {/* Card 3 */}
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-gray-900">
        <img className="w-full" src="/img/card3.jpg" alt="Donation 3" />
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Accessible Learning</div>
        <p className="text-gray-700 text-base">
            Donations make education more accessible for everyone. Help us provide resources to all learners.
        </p>
        </div>
        <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #learning
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #YRES
        </span>
        </div>
    </div>
    </div>


        {/* Buttons */}
        <div className="font-body flex flex-col sm:flex-row justify-center items-center gap-4 my-8">
          <a
            href="https://www.canadahelps.org/en/charities/yorkeducation/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#FFD13A] text-[#3D96AB] w-[200px] sm:w-[220px] rounded-md font-bold py-3 hover:bg-white hover:text-[#3D96AB] transition duration-300">
              Donate Now
            </button>
          </a>

          <button
            className="bg-white text-[#3D96AB] w-[200px] sm:w-[220px] rounded-md font-bold py-3 hover:bg-[#FFD13A] hover:text-[#3D96AB] transition duration-300"
            onClick={() => setShowCampaignInfo(!showCampaignInfo)}
          >
            {showCampaignInfo ? "Hide Campaign Info" : "Show Campaign Info"}
          </button>
        </div>


        {/* Campaign Info Display */}
        {showCampaignInfo && (
          <div className="bg-[#2B7A88] rounded-xl shadow-lg p-6 text-left mx-auto w-full sm:w-[450px] transition-all duration-500">
            <h2 className="font-subheading text-xl mb-2 text-[#FFD13A]">Campaign Overview</h2>

            <div className="mb-3">
              <p className="font-body text-md">Goal: {donationData.currency} {donationData.goal.toLocaleString()}</p>
              <p className="font-body text-md">Raised: {donationData.currency} {donationData.raised.toLocaleString()} ({percentage}%)</p>
              <p className="font-body text-md">Donors: {donationData.donors}</p>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-400 rounded-full h-4 mb-4">
              <div
                className="bg-[#FFD13A] h-4 rounded-full"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>

            {/* Optional recent donors */}
            {donationData.recentDonors && (
              <div>
                <h3 className="font-subheading text-md mb-1 text-[#FFD13A]">Recent Donors</h3>
                <ul className="font-body text-sm list-disc list-inside">
                  {donationData.recentDonors.map((donor, index) => (
                    <li key={index}>{donor.name}: {donationData.currency} {donor.amount.toLocaleString()}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
