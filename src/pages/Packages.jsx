import { useState } from "react";
import PackageCard from "../components/PackageCard";
import { PACKAGE_PLANS, COMPARISON_DATA } from "../data/packages";

const renderComparisonBadge = (value) => {
  let badgeClasses = "bg-blue-200 text-blue-900";
  if (value === "✓") {
    badgeClasses = "bg-green-200 text-green-900";
  } else if (value === "—") {
    badgeClasses = "bg-gray-200 text-gray-700";
  }

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${badgeClasses}`}
    >
      {value}
    </span>
  );
};

const Packages = () => {
  const [activeTab, setActiveTab] = useState("ladies");

  const currentPlans = PACKAGE_PLANS[activeTab] || [];
  const currentComparison = COMPARISON_DATA[activeTab] || [];

  return (
    <div className="min-h-screen bg-linear-to-br from-[#898989] to-[#898989] py-16">
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

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {currentPlans.map((plan) => (
            <PackageCard key={plan.name} plan={plan} />
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
                    key={row.feature}
                    className={
                      index % 2 === 0 ? "bg-[#949494]" : "bg-[#898989]"
                    }
                  >
                    <td className="py-4 px-6 font-bold text-white border-b border-gray-300">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-center border-b border-gray-300">
                      {renderComparisonBadge(row.flex)}
                    </td>
                    <td className="py-4 px-6 text-center border-b border-gray-300">
                      {renderComparisonBadge(row.committed)}
                    </td>
                    <td className="py-4 px-6 text-center border-b border-gray-300">
                      {renderComparisonBadge(row.allIn)}
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
