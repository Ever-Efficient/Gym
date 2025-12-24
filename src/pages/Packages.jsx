import React, { useState } from "react";
import bg4 from "../assets/images/bg4.png";
import Snowfall from "react-snowfall";
const Packages = () => {
  const [activeTab, setActiveTab] = useState("ladies");

  const plans = {
    ladies: [
      {
        name: "Monthly Flex",
        price: "Rs. 15,000",
        period: "Per month",
        features: [
          "Unlimited Gym Access",
          "Access to All Woman-Friendly Classes",
          "Monthly Wellness Assessment",
        ],
      },
      {
        name: "Committed",
        price: "Rs. 12,000",
        period: "Per month",
        features: [
          "Unlimited Gym Access",
          "Access to All Classes",
          "2 Personal Training Sessions per Month",
          "Personalized Nutrition Guidance",
        ],
      },
      {
        name: "All-In",
        price: "Rs. 9,000",
        period: "Per month",
        features: [
          "Unlimited Gym Access",
          "Access to All Classes",
          "4 Personal Training Sessions",
          "Premium Nutrition Plan",
          "Locker Service",
        ],
      },
    ],
    gents: [
      {
        name: "Monthly Flex",
        price: "Rs. 15,000",
        period: "Per month",
        features: [
          "Unlimited Gym Access",
          "Access to All Classes",
          "Monthly Fitness Assessment",
        ],
      },
      {
        name: "Committed",
        price: "Rs. 12,000",
        period: "Per month",
        features: [
          "Unlimited Gym Access",
          "Access to All Classes",
          "2 Personal Training Sessions per Month",
          "Nutrition Plan Access",
        ],
      },
      {
        name: "All-In",
        price: "Rs. 9,000",
        period: "Per month",
        features: [
          "Unlimited Gym Access",
          "Access to All Classes",
          "4 Personal Training Sessions",
          "Personalized Nutrition Plan",
          "Locker Service",
        ],
      },
    ],
  };

  const comparisonData = {
    ladies: [
      {
        feature: "Unlimited Gym Access",
        flex: "✓",
        committed: "✓",
        allIn: "✓",
      },
      {
        feature: "Access to All Classes",
        flex: "✓",
        committed: "✓",
        allIn: "✓",
      },
      {
        feature: "Monthly Wellness Assessment",
        flex: "✓",
        committed: "—",
        allIn: "—",
      },
      {
        feature: "Personal Training Sessions",
        flex: "0",
        committed: "2 per month",
        allIn: "4 per month",
      },
      {
        feature: "Nutrition Plan",
        flex: "—",
        committed: "Basic",
        allIn: "Premium",
      },
      { feature: "Locker Service", flex: "—", committed: "—", allIn: "✓" },
    ],
    gents: [
      {
        feature: "Unlimited Gym Access",
        flex: "✓",
        committed: "✓",
        allIn: "✓",
      },
      {
        feature: "Access to All Classes",
        flex: "✓",
        committed: "✓",
        allIn: "✓",
      },
      {
        feature: "Monthly Fitness Assessment",
        flex: "✓",
        committed: "—",
        allIn: "—",
      },
      {
        feature: "Personal Training Sessions",
        flex: "0",
        committed: "2 per month",
        allIn: "4 per month",
      },
      {
        feature: "Nutrition Plan Access",
        flex: "—",
        committed: "✓",
        allIn: "✓",
      },
      { feature: "Locker Service", flex: "—", committed: "—", allIn: "✓" },
    ],
  };

  const currentPlans = plans[activeTab];
  const currentComparison = comparisonData[activeTab];

  return (
    <div className="min-h-screen bg-linear-to-br from-[#898989] to-[#898989] py-16">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Unlock Your Potential: Choose Your Plan
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white shadow-2xl rounded-2xl flex p-1 border border-gray-200">
            <button
              onClick={() => setActiveTab("ladies")}
              className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
                activeTab === "ladies"
                  ? "bg-yellow-500 text-black shadow-lg"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              For Ladies
            </button>
            <button
              onClick={() => setActiveTab("gents")}
              className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
                activeTab === "gents"
                  ? "bg-yellow-500 text-black shadow-lg"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              For Gents
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {currentPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden group ${
                plan.popular ? "ring-4 ring-yellow-400" : ""
              }`}
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0.0)), url(${bg4})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "520px",
              }}
            >
              <div className="p-8 relative z-1 h-full flex flex-col">
                <div className="grow">
                  <h3 className="text-2xl font-bold text-yellow-500 mb-4">
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-yellow-500">
                      {plan.price}
                    </span>
                    <span className="text-yellow-500 ml-2">{plan.period}</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-yellow-500 font-medium">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? "bg-yellow-500 hover:bg-yellow-600 text-black shadow-lg"
                      : "bg-yellow-500 hover:bg-gray-900 text-white"
                  }`}
                >
                  Inquire on Whatsapp
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-[#898989] rounded-2xl shadow-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-top text-black mb-8">
            Compare Our Plans
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-full">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-4 px-6 text-lg font-bold text-black bg-[#7a7a7a]">
                    Features
                  </th>
                  <th className="text-center py-4 px-6 text-lg font-bold text-black bg-[#7a7a7a]">
                    Monthly Flex
                  </th>
                  <th className="text-center py-4 px-6 text-lg font-bold text-black bg-[#7a7a7a]">
                    Committed
                  </th>
                  <th className="text-center py-4 px-6 text-lg font-bold text-black bg-[#7a7a7a]">
                    All-In
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentComparison.map((row, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0 ? "bg-[#949494]" : "bg-[#898989]"
                    }
                  >
                    <td className="py-4 px-6 font-bold text-white border-b border-gray-300">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-center border-b border-gray-300">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          row.flex === "✓"
                            ? "bg-green-200 text-green-900"
                            : row.flex === "—"
                            ? "bg-gray-200 text-gray-700"
                            : "bg-blue-200 text-blue-900"
                        }`}
                      >
                        {row.flex}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center border-b border-gray-300">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          row.committed === "✓"
                            ? "bg-green-200 text-green-900"
                            : row.committed === "—"
                            ? "bg-gray-200 text-gray-700"
                            : "bg-blue-200 text-blue-900"
                        }`}
                      >
                        {row.committed}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center border-b border-gray-300">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          row.allIn === "✓"
                            ? "bg-green-200 text-green-900"
                            : row.allIn === "—"
                            ? "bg-gray-200 text-gray-700"
                            : "bg-blue-200 text-blue-900"
                        }`}
                      >
                        {row.allIn}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
