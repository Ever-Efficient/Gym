import { useState } from "react";
import ProgramCard from "../components/ProgramCard";
import { PROGRAMS_DATA } from "../data/programs";

const Programs = () => {
  const [activeTab, setActiveTab] = useState("ladies");

  return (
    <div className="min-h-screen bg-[#898989] py-16">
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
          {PROGRAMS_DATA[activeTab]?.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
