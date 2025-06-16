import { NavLink, useLocation } from "react-router-dom";
import main from "../assets/logo.png"; // Adjust the path as necessary

function Header() {
  const location = useLocation();

  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Product", to: "/product" },
    { label: "Pricing", to: "/price" },
  ];

  return (
    <header className="header flex justify-around bg-[#ffffff] h-14 sticky top-0 z-50 shadow-md">
      <NavLink to="/">
        <img src={main} alt="Logo" className="h-10 mt-2" />
      </NavLink>

      <div className="nav-bar">
        <ul className="flex h-14 items-center m-0 p-0 gap-4">
          {links.map((link) => (
            <li key={link.to} className="relative group">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `font-medium transition-colors ${
                    isActive ? "text-blue-500" : "text-gray-800"
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="inline-block relative">
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-yellow-500 transition-transform duration-300 transform origin-left ${
                        isActive
                          ? "w-full scale-x-100"
                          : "w-full scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <NavLink
        to="/login"
        state={{ backgroundLocation: location }}
        className="login flex justify-center items-center m-0 p-0 w-20 h-12 mt-1 font-semibold"
      >
        Sign In
      </NavLink>
    </header>
  );
}

export default Header;