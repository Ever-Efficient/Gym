import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { NAV_LINKS } from "../data/navigation";
import { FOOTER_CONTACTS, SOCIAL_LINKS } from "../data/footer";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <div className="flex items-center mb-3">
            <Link to="/" onClick={scrollToTop}>
              <img
                src={logo}
                alt="TGCPM Fitness"
                className="h-10 w-auto mr-3"
              />
            </Link>
          </div>

          <h3 className="text-2xl font-bold mb-3">
            Your journey to a stronger you starts here.
          </h3>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-3">QUICK LINKS</h3>
          <ul className="space-y-1 text-lg">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-white transition duration-300 block hover:underline"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-3">OUR CONTACTS</h3>
          <div className="space-y-1 text-gray-400 text-lg">
            <p>Address: {FOOTER_CONTACTS.address}</p>
            <p>Phone No: {FOOTER_CONTACTS.phone}</p>
            <p>Email: {FOOTER_CONTACTS.email}</p>
            <p>{FOOTER_CONTACTS.extra}</p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-3">FOLLOW US</h3>
          <div className="flex space-x-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center hover:bg-yellow-500 transition duration-300"
                title={social.name}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.svgPath} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
        <p>
          &copy; 2025 @ All Rights Reserved | ********* | Designed & Developed
          by{" "}
          <a
            href="https://everefficient.lk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-300 font-medium transition duration-300"
          >
            EVER EFFICIENT Business Management (Pvt) Ltd
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
