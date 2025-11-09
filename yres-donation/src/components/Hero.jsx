import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import { donationData } from "../data/mockData.js";
import donationImg from "../assets/donation.jpg";
import "../index.css";

const Hero = () => {
  const [showCampaignInfo, setShowCampaignInfo] = useState(false);

  // Calculate percentage for progress bar
  const percentage = Math.min(
    Math.round((donationData.raised / donationData.goal) * 100),
    100
  );

  return (
    <div className="text-gray-900 bg-white pt-20 sm:pt-20">
      <div className="pt-10 sm:pt-10">
        <img
          className="w-full h-auto max-h-70 object-cover object-[center_60%] rounded-lg shadow-md mt-16"
          src={donationImg}
          alt="Donation"
        />
      </div>
      <div className="max-w-[1500px] w-full min-h-screen mx-auto text-center flex flex-col justify-center px-4 py-8">
        <div className="text-gray-900 bg-white ">
          {/* Shadow Box wrapping hero content */}
          <div className="bg-white rounded-2xl shadow-xl max-w-[900px] mx-auto p-8">
            {/* Intro Text */}
            <p className="font-heading text-[#3D96AB] font-semibold p-2 tracking-widest text-sm sm:text-base">
              YORK REGION EDUCATIONAL SERVICES (YRES)
            </p>

            {/* Main Heading */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold md:py-4 leading-snug md:leading-tight">
              Empower Learning Through Your Generosity
            </h1>

            {/* Typed animation */}
            <div className="hidden sm:flex justify-center items-center py-4 gap-3">
              <p className="font-subheading text-2xl md:text-3xl font-semibold">
                Support
              </p>
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
            <p className="font-body text-md sm:text-lg md:text-xl font-medium text-gray-700 px-2 sm:px-4">
              Every donation helps YRES provide quality educational programs and
              resources for students in our community. Join us in shaping the
              future of learning.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {[
            {
              title: "Supporting Students",
              desc: "Every small donation helps a student reach their dream. Your contribution makes a difference.",
              img: "https://plus.unsplash.com/premium_vector-1682309404307-2f788cb0190f?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170",
              tags: ["#donation", "#YRES"],
            },
            {
              title: "Innovative Programs",
              desc: "Your support helps create programs that encourage creativity and learning for all students.",
              img: "https://plus.unsplash.com/premium_vector-1714618904671-6d93b0372517?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1171",
              tags: ["#education", "#YRES"],
            },
            {
              title: "Accessible Learning",
              desc: "Donations make education more accessible for everyone. Help us provide resources to all learners.",
              img: "https://plus.unsplash.com/premium_vector-1682299259831-f79d81c80037?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170",
              tags: ["#learning", "#YRES"],
            },
          ].map((card, i) => (
            <div
              key={i}
              className="w-full rounded overflow-hidden shadow-lg bg-gray-50 text-gray-900"
            >
              <img className="w-full" src={card.img} alt={card.title} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{card.title}</div>
                <p className="text-gray-700 text-base">{card.desc}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                {card.tags.map((tag, j) => (
                  <a
                    key={j}
                    href="https://x.com/york_education"
                    target="_blank"
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="font-body flex flex-col sm:flex-row justify-center items-center gap-10 mt-12">
          <a
            href="https://www.canadahelps.org/en/charities/yorkeducation/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#3D96AB] text-white w-[200px] sm:w-[220px] rounded-md font-bold py-3 hover:bg-[#2B7A88] transition duration-300">
              Donate Now
            </button>
          </a>

          <button
            className="bg-[#FFD13A] text-[#3D96AB] w-[200px] sm:w-[220px] rounded-md font-bold py-3 hover:bg-[#3D96AB] hover:text-white transition duration-300"
            onClick={() => setShowCampaignInfo(!showCampaignInfo)}
          >
            {showCampaignInfo ? "Hide Campaign Info" : "Show Campaign Info"}
          </button>
        </div>

{/* Campaign Info */}
{showCampaignInfo && (
  <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {donationData.map((campaign, index) => {
      const percentage = Math.min(
        Math.round((campaign.raised / campaign.goal) * 100),
        100
      );

      return (
        <div
          key={index}
          className="bg-gray-100 rounded-xl shadow-lg p-6 text-left transition-all duration-500 hover:shadow-xl"
        >
          <h2 className="font-subheading text-xl mb-2 text-[#3D96AB]">
            {campaign.campaign}
          </h2>

          <div className="mb-3">
            <p className="font-body text-md">
              Goal: {campaign.currency} {campaign.goal.toLocaleString()}
            </p>
            <p className="font-body text-md">
              Raised: {campaign.currency} {campaign.raised.toLocaleString()} ({percentage}%)
            </p>
            <p className="font-body text-md">Donors: {campaign.donors}</p>
          </div>

          {/* Progress Bar */}
          <div className="relative w-full bg-gray-300 rounded-full h-5 mb-4">
            <div
              className="bg-[#3D96AB] h-5 rounded-full transition-all duration-500"
              style={{ width: `${percentage}%` }}
            ></div>
            <span className="absolute inset-0 flex items-center justify-center font-bold text-white text-sm">
              {percentage}%
            </span>
          </div>

          {/* Recent Donors */}
          {campaign.recentDonors && campaign.recentDonors.length > 0 && (
            <div>
              <h3 className="font-subheading text-md mb-1 text-[#3D96AB]">
                Recent Donors
              </h3>
              <ul className="font-body text-sm list-disc list-inside text-gray-700">
                {campaign.recentDonors.map((donor, i) => (
                  <li key={i}>
                    {donor.name}: {campaign.currency}{" "}
                    {donor.amount.toLocaleString()}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
    })}
  </div>
)}

      </div>
    </div>
  );
};

export default Hero;
