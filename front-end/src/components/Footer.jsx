import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-white text-center text-sm text-gray-600">
      <hr className="border-gray-300 mb-6" />

      <div className="flex flex-wrap justify-center gap-6 mb-6">
        {[
          { label: 'Home', to: '/' },
          { label: 'About', to: '/about' },
          { label: 'Product', to: '/product' },
          { label: 'Pricing', to: '/price' },
        ].map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) =>
              `foot hover:text-gray-900 hover:underline transition-colors ${
                isActive ? 'font-semibold text-black underline' : ''
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      <div className="flex justify-center space-x-6 text-xl text-gray-600 mb-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="foot hover:text-blue-600">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="foot hover:text-pink-500">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="foot hover:text-black">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="foot hover:text-gray-900">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="foot hover:text-red-600">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>

      <p>© 2024 Your Company, Inc. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
