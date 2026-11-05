import bg4 from "../assets/images/bg4.png";

const PackageCard = ({ plan }) => {
  return (
    <div
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

        <a
          href="https://wa.me/94777644590"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 text-center block cursor-pointer ${
            plan.popular
              ? "bg-yellow-500 hover:bg-yellow-600 text-black shadow-lg"
              : "bg-yellow-500 hover:bg-gray-900 text-white"
          }`}
        >
          Inquire on Whatsapp
        </a>
      </div>
    </div>
  );
};

export default PackageCard;
