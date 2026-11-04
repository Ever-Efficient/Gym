const BlogCard = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full group cursor-pointer">
      <div className="h-70 relative overflow-hidden">
        <img
          src={item.image}
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
  );
};

export default BlogCard;
