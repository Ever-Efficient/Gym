import React, { useState } from "react";
import Mpro1 from "../assets/images/Mpro1.jpg";
import Mpro3 from "../assets/images/Mpro3.jpg";
import Mpro4 from "../assets/images/Mpro4.jpg";

import Wpro1 from "../assets/images/Wpro1.jpg";
import Wpro2 from "../assets/images/Wpro2.jpg";
import Wpro3 from "../assets/images/Wpro3.jpg";

import Snowfall from "react-snowfall";

const Programs = () => {
  const [activeTab, setActiveTab] = useState("ladies");

  return (
    
    <div className="min-h-screen bg-[#898989] py-16">
       <Snowfall
        color="#82c3d9"
        snowflakeCount={120}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 50,
          pointerEvents: "none",
        }}
      />
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-white mb-3">
          Explore Our Programs
        </h1>

        <p className="text-center text-xl text-black mb-10 font-semibold">
          Find the perfect fitness program to match your goals and get started
          on your journey today.
        </p>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-white shadow-md rounded-xl flex p-1">
            <button
              onClick={() => setActiveTab("ladies")}
              className={`px-6 py-2 rounded-xl font-bold ${
                activeTab === "ladies"
                  ? "bg-yellow-400 text-black"
                  : "text-gray-600"
              }`}
            >
              For Ladies
            </button>

            <button
              onClick={() => setActiveTab("gents")}
              className={`px-6 py-2 rounded-xl font-bold ${
                activeTab === "gents"
                  ? "bg-yellow-400 text-black"
                  : "text-gray-600"
              }`}
            >
              For Gents
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {activeTab === "ladies" && (
            <>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
                <div className="w-full h-48 shrink-0">
                  <img
                    src={Wpro3}
                    className="w-full h-full object-cover"
                    alt="Ladies Toning"
                  />
                </div>
                <div className="p-6 flex flex-col grow">
                  <h3 className="font-semibold text-lg mb-3 text-gray-800">
                    Ladies' Toning & Fitness
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 grow">
                    Focus on full-body toning, strength, and posture with
                    targeted exercises.
                  </p>
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 rounded-lg transition duration-200 mt-auto">
                    Learn More
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
                <div className="w-full h-48 shrink-0">
                  <img
                    src={Wpro2}
                    className="w-full h-full object-cover"
                    alt="Weight Loss"
                  />
                </div>
                <div className="p-6 flex flex-col grow">
                  <h3 className="font-semibold text-lg mb-3 text-gray-800">
                    Weight Loss Program
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 grow">
                    Cardio & nutrition support tailored for metabolism and
                    sustainable weight loss.
                  </p>
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 rounded-lg transition duration-200 mt-auto">
                    Learn More
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
                <div className="w-full h-48 shrink-0">
                  <img
                    src={Wpro1}
                    className="w-full h-full object-cover"
                    alt="Zumba"
                  />
                </div>
                <div className="p-6 flex flex-col grow">
                  <h3 className="font-semibold text-lg mb-3 text-gray-800">
                    Zumba & Dance Fitness
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 grow">
                    High-energy sessions for fitness and stress relief through
                    fun dance routines.
                  </p>
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 rounded-lg transition duration-200 mt-auto">
                    Learn More
                  </button>
                </div>
              </div>
            </>
          )}

          {activeTab === "gents" && (
            <>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
                <div className="w-full h-48 shrink-0">
                  <img
                    src={Mpro4}
                    className="w-full h-full object-cover"
                    alt="Muscle Gain"
                  />
                </div>
                <div className="p-6 flex flex-col grow">
                  <h3 className="font-semibold text-lg mb-3 text-gray-800">
                    Muscle Gain Program
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 grow">
                    Intense strength training focused on hypertrophy and muscle
                    development.
                  </p>
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 rounded-lg transition duration-200 mt-auto">
                    Learn More
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
                <div className="w-full h-48 shrink-0">
                  <img
                    src={Mpro1}
                    className="w-full h-full object-cover"
                    alt="Fat Burn"
                  />
                </div>
                <div className="p-6 flex flex-col grow">
                  <h3 className="font-semibold text-lg mb-3 text-gray-800">
                    Fat Burn & Conditioning
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 grow">
                    HIIT, circuit training, and cardio-based routines for
                    maximum fat loss.
                  </p>
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 rounded-lg transition duration-200 mt-auto">
                    Learn More
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
                <div className="w-full h-48 shrink-0">
                  <img
                    src={Mpro3}
                    className="w-full h-full object-cover"
                    alt="Strength"
                  />
                </div>
                <div className="p-6 flex flex-col grow">
                  <h3 className="font-semibold text-lg mb-3 text-gray-800">
                    Strength & Powerlifting
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 grow">
                    Heavy lifting for building power and endurance with proper
                    technique.
                  </p>
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 rounded-lg transition duration-200 mt-auto">
                    Learn More
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Programs;
