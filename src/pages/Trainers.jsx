import { useState } from "react";
import TrainerCard from "../components/TrainerCard";
import { ALL_TRAINERS, TRAINER_SPECIALTIES } from "../data/trainers";

const TrainersPage = () => {
  const [activeSpecialty, setActiveSpecialty] = useState("All");

  const filteredTrainers =
    activeSpecialty === "All"
      ? ALL_TRAINERS
      : ALL_TRAINERS.filter((trainer) => trainer.specialty === activeSpecialty);

  return (
    <div className="min-h-screen bg-linear-to-br from-[#898989] to-[#898989] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="align-text-top mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Meet Our Expert Trainers
          </h1>

          <div className="flex flex-wrap justify-top gap-3 mt-10">
            {TRAINER_SPECIALTIES.map((specialty) => (
              <button
                key={specialty}
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
          {filteredTrainers.map((trainer) => (
            <TrainerCard key={trainer.name} trainer={trainer} />
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
