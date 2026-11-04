import bg1 from "../assets/images/bg1.png";
import bg2 from "../assets/images/bg2.png";
import bg4 from "../assets/images/bg4.png";

const BACKGROUND_BY_PLAN_ID = {
  1: bg1,
  2: bg4,
  3: bg2,
};

const PricingCard = ({ plan }) => {
  const bgImage = BACKGROUND_BY_PLAN_ID[plan.id] || bg1;
  const textColor = plan.highlight ? "text-yellow-500" : "text-yellow-400";

  return (
    <div
      className={`relative rounded-2xl overflow-hidden shadow-xl border h-full transform transition-all duration-500 ease-out hover:scale-[1.03] hover:shadow-2xl hover:shadow-yellow-500/30 group ${
        plan.highlight
          ? "border-yellow-500  hover:scale-[1.08] hover:border-yellow-400 hover:ring-4 hover:ring-yellow-500/50"
          : "border-gray-300 hover:border-yellow-400"
      }`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80 transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-90"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500" />

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-linear-to-r from-yellow-500/10 via-transparent to-yellow-500/10"></div>
      </div>

      <div className="relative z-10 p-8 text-center h-full flex flex-col">
        <h3
          className={`text-3xl font-bold mb-4 ${textColor} group-hover:text-white transition-colors duration-300`}
        >
          {plan.name}
        </h3>

        <div className="mb-6">
          <span
            className={`text-4xl font-bold ${textColor} group-hover:text-white transition-colors duration-300`}
          >
            Rs. {plan.price}
          </span>
          <span
            className={`ml-2 text-lg ${textColor} group-hover:text-white transition-colors duration-300`}
          >
            /{plan.period}
          </span>
        </div>

        <ul className="space-y-4 text-left mb-8 grow">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className={`w-6 h-6 mr-3 mt-1 transition-colors duration-300 group-hover:scale-110 ${
                  plan.highlight
                    ? "text-yellow-500 group-hover:text-white"
                    : "text-yellow-400 group-hover:text-white"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
              </svg>
              <span
                className={`text-lg ${textColor} group-hover:text-white transition-colors duration-300`}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <button
          className={`w-full py-4 rounded-xl font-bold text-lg mt-auto transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
            plan.highlight
              ? "bg-yellow-500 hover:bg-yellow-500 text-black hover:shadow-black/50"
              : "bg-yellow-500 hover:bg-gray-800 text-white hover:shadow-white/50"
          }`}
        >
          Choose Plan
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
