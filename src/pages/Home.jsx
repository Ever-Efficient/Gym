import Header from "../components/Header";
import PricingCard from "../components/PricingCard";
import Gymgirl from "../assets/images/Gymgirl.png";
import { FEATURED_PRICING_PLANS } from "../data/pricing";
import { WHY_CHOOSE_US } from "../data/features";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="py-16 px-4 bg-linear-to-br from-gray-100 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-gray-800 mb-12">
            Featured Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_PRICING_PLANS.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
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
                {WHY_CHOOSE_US.map((item) => (
                  <div key={item.id} className="flex items-start">
                    <div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 mt-1">
                      {item.id}.
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
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
