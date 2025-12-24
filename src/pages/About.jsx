import Header from "../components/Header";
import vision from "../assets/images/vision.jpg";
import TrainerCard from "../components/TrainerCard";
import Snowfall from "react-snowfall";

//Trainer Images
import T1 from "../assets/images/T1.jpg";
import T10 from "../assets/images/T10.jpg";
import T3 from "../assets/images/T3.jpg";
import T8 from "../assets/images/T8.jpg";

//Gallery images
import G1 from "../assets/images/G1.jpg";
import G2 from "../assets/images/G2.jpg";
import G3 from "../assets/images/G3.jpg";
import G4 from "../assets/images/G4.jpg";
import G5 from "../assets/images/G5.jpg";
import G6 from "../assets/images/G6.jpg";
import G7 from "../assets/images/G7.jpg";
import G8 from "../assets/images/G8.jpg";

const AboutPage = () => {
  const trainers = [
    {
      name: "Ishara De Silva",
      role: "Group Workout & Zumba Instructor",
      specialty: "Cardio & Group Fitness",
      image: T3,
    },
    {
      name: "Nadeesha Fernando",
      role: "Certified Personal Trainer (Women's Fitness)",
      specialty: "Women's Fitness",
      image: T10,
    },
    {
      name: "Thilina Jayasinghe",
      role: "Strength & Conditioning Coach",
      specialty: "Strength Training",
      image: T1,
    },
    {
      name: "Dinuka Ranatunga",
      role: "Nutrition & Wellness Consultant",
      specialty: "Holistic Wellness",
      image: T8,
    },
  ];

  const galleryImages = [
    { id: 1, src: G1, alt: "Gym Facility 1" },
    { id: 2, src: G2, alt: "Gym Facility 2" },
    { id: 3, src: G3, alt: "Gym Members Training" },
    { id: 4, src: G4, alt: "Weight Training Area" },
    { id: 5, src: G5, alt: "Cardio Section" },
    { id: 6, src: G6, alt: "Group Class Session" },
    { id: 7, src: G7, alt: "Modern Equipment" },
    { id: 8, src: G8, alt: "Locker Room" },
  ];

  return (
    <div className="min-h-screen bg-white">
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
      <Header
        title="Your Strength, Your Journey"
        subtitle="Discover a community dedicated to helping you achieve your personal best. State-of-the-art facilities, expert trainers, and a motivating atmosphere await."
        showButton={false}
      />

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
            {galleryImages.map((image) => (
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
            {trainers.map((trainer, index) => (
              <TrainerCard key={index} trainer={trainer} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
