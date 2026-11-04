const ProgramCard = ({ program }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
      <div className="w-full h-48 shrink-0">
        <img
          src={program.image}
          className="w-full h-full object-cover"
          alt={program.alt || program.title}
        />
      </div>
      <div className="p-6 flex flex-col grow">
        <h3 className="font-semibold text-lg mb-3 text-gray-800">
          {program.title}
        </h3>
        <p className="text-gray-600 text-sm mb-6 grow">
          {program.description}
        </p>
        <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 rounded-lg transition duration-200 mt-auto">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ProgramCard;
