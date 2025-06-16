import { useNavigate } from 'react-router-dom';
import google from '../assets/google.png';
import logo from '../assets/logo.png';

export default function LoginModal() {
  const navigate = useNavigate();

  const handleClose = () => navigate(-1); // Go back

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center"
      onClick={handleClose}
    >
      <div
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-gray-800"
        >
          &times;
        </button>

        <img src={logo} alt="Logo" className="mx-auto mb-6 w-22" />
        <p className="text-4xl font-bold mb-6 text-center font-inter">Sign in</p>
        
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don’t have an account? <a href="/signup" className="text-indigo-600 hover:underline">Sign Up</a>
        </p>

        <div className="flex justify-center gap-3 mt-4">
          <button className="btn flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-100">
            <img src={google} alt="Google Logo" className="h-5" />
            Google
          </button>
          <button className="btn flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-100">
            <svg version="1.1" height={20} width={20} viewBox="0 0 22.773 22.773" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 
              c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z M20.67,16.716c0,0.016,0,0.03,0,0.045
              c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334c-1.367,0-2.275-0.879-3.676-0.903
              c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0c-0.995-0.144-1.798-0.932-2.383-1.642
              c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019c0.105-2.482,1.311-4.5,2.914-5.478
              c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464c0.471,0.181,1.06,0.502,1.618,0.485
              c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648c1.733,0.262,2.963,1.032,3.723,2.22
              c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"/>
            </svg>
            Apple
          </button>
        </div>
      </div>
    </div>
  );
}
