const TrainerCard = ({ trainer }) => {
  const initials = trainer.name
    ? trainer.name
        .split(" ")
        .map((name) => name[0])
        .join("")
    : "";

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-yellow-500">
      <div className="h-60 bg-gray-200 relative overflow-hidden">
        {trainer.image ? (
          <img
            src={trainer.image}
            alt={trainer.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        ) : null}

        <div
          className={`w-full h-full flex items-center justify-center bg-linear-to-br from-blue-500 to-purple-600 ${
            trainer.image ? "hidden" : "flex"
          }`}
        >
          <span className="text-white text-2xl font-bold">{initials}</span>
        </div>
      </div>

      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{trainer.name}</h3>
        <p className="text-yellow-600 font-bold mb-3">{trainer.role}</p>
        {trainer.tagline ? (
          <p className="text-black font-bold mb-4 leading-relaxed">
            {trainer.tagline}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default TrainerCard;
