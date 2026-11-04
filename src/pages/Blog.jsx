import Header from "../components/Header";
import BlogCard from "../components/BlogCard";
import { BLOG_SECTIONS } from "../data/blogs";

const Blog = () => {
  return (
    <div className="min-h-screen bg-[#898989]">
      <Header
        title="Welcome to our Fitness Blogs"
        subtitle="Stay motivated and informed with our curated fitness content! Whether you're starting your fitness journey or looking to level up, our blog is packed with helpful insights to support your goals"
        showButton={false}
      />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="space-y-16">
          {BLOG_SECTIONS.map((section) => (
            <div key={section.title} className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8 border-b-2 border-[#898989] pb-3">
                {section.title}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item) => (
                  <BlogCard key={item.id || item.title} item={item} />
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
