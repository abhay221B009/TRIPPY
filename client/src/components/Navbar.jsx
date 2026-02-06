import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            TRIPPY
          </Link>

          {/* Menu */}
          <div className="flex flex-1 justify-center">
            <div className="flex space-x-8">
              <Link
                to="/"
                className="text-yellow-400 hover:text-blue-600 hover:-translate-y-0.5 font-medium transition"
              >
                Home
              </Link>

              <Link
                to="/profile"
                className="text-yellow-400 hover:text-blue-600 hover:-translate-y-0.5 font-medium transition"
              >
                Profile
              </Link>

              <Link
                to="/discover"
                className="text-yellow-400 hover:text-blue-600 hover:-translate-y-0.5 font-medium transition"
              >
                Discover
              </Link>

              <Link
                to="/preferences"
                className="text-yellow-400 hover:text-blue-600 hover:-translate-y-0.5 font-medium transition"
              >
                Plan Trip
              </Link>

              <Link
                to="/trippy-ai"
                className="text-yellow-400 hover:text-blue-600 hover:-translate-y-0.5 font-medium transition"
              >
                Trippy AI
              </Link>
            </div>
          </div>

          {/* Login / Signup */}
          <div className="flex space-x-4">
            <Link
              to="/login"
              className="px-4 py-1.5 border border-blue-600 rounded-md text-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-md hover:-translate-y-0.5 transition duration-300"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="px-4 py-1.5 border border-blue-600 rounded-md text-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-md hover:-translate-y-0.5 transition duration-300"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
