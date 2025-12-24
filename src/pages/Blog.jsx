import Header from "../components/Header";
import Snowfall from "react-snowfall";

import W1 from "../assets/images/W1.jpg";
import W2 from "../assets/images/W2.png";
import W3 from "../assets/images/W3.jpg";

import H1 from "../assets/images/H1.jpg";
import H2 from "../assets/images/H2.jpg";
import H3 from "../assets/images/H3.jpg";

import M1 from "../assets/images/M1.jpg";
import M2 from "../assets/images/M2.jpg";
import M3 from "../assets/images/M3.jpg";

import T1 from "../assets/images/t1.png";
import T2 from "../assets/images/t2.png";
import TT from "../assets/images/tt.jpg";

const Blog = () => {
  const imageMap = {
    W1,
    W2,
    W3,
    H1,
    H2,
    H3,
    M1,
    M2,
    M3,
    T1,
    T2,
    TT,
  };

  // Data
  const sections = [
    {
      title: "Workout Routines",
      items: [
        { title: "Full Body Beginner Workout", image: "W1" },
        { title: "5-Day Split for Muscle Building", image: "W2" },
        { title: "20-Minute Daily Fat Burn Circuit", image: "W3" },
      ],
    },
    {
      title: "Healthy Recipes",
      items: [
        { title: "Protein-Packed Breakfast Bowl", image: "H1" },
        { title: "Grilled Chicken Salad", image: "H2" },
        { title: "Banana Protein Pancakes", image: "H3" },
      ],
    },
    {
      title: "Meal Plans",
      items: [
        { title: "Weight Loss Meal Plan", image: "M1" },
        { title: "Muscle Gain Meal Plan", image: "M2" },
        { title: "Balanced Fitness Maintenance Plan", image: "M3" },
      ],
    },
    {
      title: "Transformations",
      items: [
        { title: "Anila's 3-Month Journey", image: "T1" },
        { title: "Taniya's Strength Progress", image: "T2" },
        { title: "Sahan's 6-Pack Story", image: "TT" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#898989]">
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
        title="Welcome to our Fitness Blogs"
        subtitle="Stay motivated and informed with our curated fitness content! Whether you're starting your fitness journey or looking to level up, our blog is packed with helpful insights to support your goals"
        showButton={false}
      />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="space-y-16">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8 border-b-2 border-[#898989] pb-3">
                {section.title}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full group cursor-pointer"
                  >
                    <div className="h-70 relative overflow-hidden">
                      <img
                        src={imageMap[item.image]}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />

                      <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="p-4 grow flex flex-col">
                      <h3 className="text-lg font-bold text-gray-800 mb-2 text-center group-hover:text-yellow-500 transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
