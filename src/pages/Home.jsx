import Header from "../components/Header";
import PricingCard from "../components/PricingCard";
import Gymgirl from "../assets/images/Gymgirl.png";
import Snowfall from "react-snowfall";

const Home = () => {
  const pricingPlans = [
    {
      id: 1,
      name: "Basic",
      price: "4,500",
      period: "Per month",
      features: [
        "Weekday gym access (Mon-Fri)",
        "Basic strength training",
        "General fitness tips",
        "Monthly progress check",
      ],
    },
    {
      id: 2,
      name: "Premium",
      price: "12,000",
      period: "Per month",
      features: [
        "24/7 gym access",
        "3 sessions weekly",
        "Custom workouts & diet",
        "Access to group classes",
        "Progress tracking & support",
      ],
      highlight: true,
    },
    {
      id: 3,
      name: "Standard",
      price: "7,500",
      period: "Per month",
      features: [
        "Full week access",
        "Men's & women's workout plan",
        "Personal training sessions",
        "Diet consultation",
        "Group classes",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
      <Header />

      <section className="py-16 px-4 bg-linear-to-br from-gray-100 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-gray-800 mb-12">
            Featured Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-linear-to-br from-gray-900 via-black to-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white mb-8">
                Why Choose Us?
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="shrink-0 w-12 h-12  rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 mt-1">
                    1.
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Expert Trainers
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Work with certified professionals who tailor workouts to
                      your goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="shrink-0 w-12 h-12  rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 mt-1">
                    2.
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Separate Men & Women Programs
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Customized fitness plans for both men and women for
                      optimal results.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="shrink-0 w-12 h-12  rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 mt-1">
                    3.
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Modern Equipment
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Access high-quality, up-to-date gym equipment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="shrink-0 w-12 h-12  rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 mt-1">
                    4.
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Flexible Packages
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Choose from affordable plans that suit your lifestyle.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="shrink-0 w-12 h-12  rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 mt-1">
                    5.
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Motivating Environment
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Train in a clean, safe, and energetic space.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src={Gymgirl}
                  alt="Gym Training"
                  className="rounded-2xl shadow-2xl w-full max-w-md lg:max-w-lg object-cover h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
