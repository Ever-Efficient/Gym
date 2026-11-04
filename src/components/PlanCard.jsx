const PlanCard = ({ plan }) => {
  return (
    <div
      className={`relative bg-white rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 ${
        plan.popular ? "ring-4 ring-yellow-400" : ""
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-yellow-400 text-black px-6 py-2 rounded-full font-bold text-sm shadow-lg">
            MOST POPULAR
          </span>
        </div>
      )}

      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
          <span className="text-gray-600 ml-2">{plan.period}</span>
        </div>

        <ul className="space-y-4 mb-8">
          {plan.features?.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-center">
              <svg
                className="w-5 h-5 text-green-500 mr-3 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
            plan.popular
              ? "bg-yellow-400 hover:bg-yellow-500 text-black"
              : "bg-gray-800 hover:bg-gray-900 text-white"
          }`}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
