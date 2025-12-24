import React, { useState } from "react";
import TrainerCard from "../components/TrainerCard";
import T1 from "../assets/images/T1.jpg";
import T2 from "../assets/images/T2.jpg";
import T3 from "../assets/images/T3.jpg";
import T4 from "../assets/images/T4.jpg";
import T5 from "../assets/images/T5.jpg";
import T6 from "../assets/images/T6.png";
import T7 from "../assets/images/T7.jpg";
import T8 from "../assets/images/T8.jpg";
import T9 from "../assets/images/T9.jpg";
import T10 from "../assets/images/T10.jpg";

import Snowfall from "react-snowfall";
const TrainersPage = () => {
  const [activeSpecialty, setActiveSpecialty] = useState("All");

  const trainers = [
    {
      name: "Nuwan Perera",
      role: "Strength Coach",
      tagline: "Strength comes from overcoming limits.",
      specialty: "Strength Training",
      image: T8,
    },
    {
      name: "Ishara Fernando",
      role: "Weight Training Specialist",
      tagline: "Lift strong, live stronger.",
      specialty: "Strength Training",
      image: T1,
    },
    {
      name: "Anjalee Wijesinghe",
      role: "Certified Yoga Instructor",
      tagline: "Breathe deeply, move freely, live fully.",
      specialty: "Yoga & Flexibility",
      image: T3,
    },
    {
      name: "Tharushi Senanayake",
      role: "Mobility & Stretching Expert",
      tagline: "Flexibility unlocks potential.",
      specialty: "Yoga & Flexibility",
      image: T10,
    },
    {
      name: "Dilan Jayawardena",
      role: "Cardio Performance Coach",
      tagline: "Train your heart to go the distance.",
      specialty: "Cardio & Endurance",
      image: T4,
    },
    {
      name: "Kavindi Silva",
      role: "HIT & Cardio Specialist",
      tagline: "Push your pace, chase your goals.",
      specialty: "Cardio & Endurance",
      image: T6,
    },
    {
      name: "Kasun Abeywickrama",
      role: "Bodybuilding Trainer",
      tagline: "Shape your body, Build your discipline.",
      specialty: "Bodybuilding",
      image: T7,
    },
    {
      name: "Shanika Ranasinghe",
      role: "Women's Strength Coach",
      tagline: "Muscle is earned, not given.",
      specialty: "Bodybuilding",
      image: T5,
    },
    {
      name: "Dinithi Rajapaksha",
      role: "Mind-Body Wellness Coach",
      tagline: "Balance your body, calm your mind.",
      specialty: "Holistic Wellness",
      image: T2,
    },
    {
      name: "Nadeesha Lakmai",
      role: "Functional Wellness Trainer",
      tagline: "Train with purpose. Live with energy.",
      specialty: "Holistic Wellness",
      image: T9,
    },
  ];

  const specialties = [
    "All",
    "Strength Training",
    "Yoga & Flexibility",
    "Cardio & Endurance",
    "Bodybuilding",
    "Holistic Wellness",
  ];

  const filteredTrainers =
    activeSpecialty === "All"
      ? trainers
      : trainers.filter((trainer) => trainer.specialty === activeSpecialty);

  return (
    <div className="min-h-screen bg-linear-to-br from-[#898989] to-[#898989] py-12 px-4 sm:px-6 lg:px-8">
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
      <div className="max-w-7xl mx-auto">
        <header className="align-text-top mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Meet Our Expert Trainers
          </h1>

          <div className="flex flex-wrap justify-top gap-3 mt-10">
            {specialties.map((specialty, index) => (
              <button
                key={index}
                onClick={() => setActiveSpecialty(specialty)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeSpecialty === specialty
                    ? "bg-yellow-300 text-black shadow-lg"
                    : "bg-white text-black hover:bg-yellow-300"
                }`}
              >
                {specialty}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredTrainers.map((trainer, index) => (
            <TrainerCard key={index} trainer={trainer} />
          ))}
        </div>

        {filteredTrainers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-xl">
              No trainers found for "{activeSpecialty}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainersPage;
