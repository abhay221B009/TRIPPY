import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-24">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          Welcome back to Trippy
        </h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-indigo-600 hover:underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
