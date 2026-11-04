import Header from "../components/Header";
import TrainerCard from "../components/TrainerCard";
import vision from "../assets/images/vision.jpg";
import { ABOUT_PAGE_TRAINERS } from "../data/trainers";
import { GALLERY_IMAGES } from "../data/gallery";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header
        title="Your Strength, Your Journey"
        subtitle="Discover a community dedicated to helping you achieve your personal best. State-of-the-art facilities, expert trainers, and a motivating atmosphere await."
        showButton={false}
      />

      {/* Vision & Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                  Our Vision and Mission
                </h2>
              </div>

              <div className="space-y-4 border-2 border-yellow-500 rounded-lg p-6 bg-white shadow-md">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Our Vision
                </h3>
                <p className="text-black font-semibold text-lg leading-relaxed">
                  To be the most trusted and results-driven fitness center that
                  empowers individuals to lead healthier, stronger, and more
                  confident lives.
                </p>
              </div>

              <div className="space-y-4 border-2 border-yellow-500 rounded-lg p-6 bg-white shadow-md">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Our Mission
                </h3>
                <p className="text-black font-semibold text-lg leading-relaxed">
                  To provide a supportive, inclusive, and professional
                  environment where people of all fitness levels can achieve
                  their goals through expert guidance, modern facilities, and
                  tailored fitness programs.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md lg:max-w-lg">
                <div className="bg-gray-200 rounded-2xl overflow-hidden aspect-square">
                  <img
                    src={vision}
                    alt="Our Vision and Mission"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gym Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Gym Gallery
            </h2>
            <p className="text-xl text-gray-600 font-semibold max-w-3xl mx-auto mb-8">
              Take a look at our state-of-the-art facilities, modern equipment,
              and vibrant community
            </p>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {GALLERY_IMAGES.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-semibold">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-black font-medium text-xl">
              More than just a gym - it's a lifestyle destination
            </p>
          </div>
        </div>
      </section>

      {/* Featured Trainers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#898989]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Expert Trainers
            </h2>
            <p className="text-xl text-white font-semibold max-w-3xl mx-auto mb-8">
              Our certified trainers are the heartbeat of our gym. Passionate,
              knowledgeable, and dedicated to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ABOUT_PAGE_TRAINERS.map((trainer) => (
              <TrainerCard key={trainer.name} trainer={trainer} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
