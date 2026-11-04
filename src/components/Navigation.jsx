import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { NAV_LINKS } from "../data/navigation";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <Link to="/" onClick={scrollToTop}>
              <img src={logo} alt="TGCPM Fitness Logo" className="h-10 w-10" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={scrollToTop}
                className="text-gray-700 hover:text-yellow-500 font-medium transition duration-300 hover:underline"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={scrollToTop}
                  className="text-gray-700 hover:text-yellow-500 font-medium transition duration-300 py-2 hover:underline"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
