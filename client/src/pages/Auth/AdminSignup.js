import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../../redux/features/authSlice';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const AdminSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, signupSuccess, isAuthenticated } = useSelector((state) => state.auth);
  const [form, setForm] = useState({ Email: '', password: '', userName: '', role: 'admin' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser(form));
  };

  useEffect(() => {
    if (signupSuccess && !isAuthenticated) {
      toast.success('Signup successful! Please log in.');
      navigate('/login');
    }
    if (localStorage.getItem('user')) {
      navigate('/');
    }
    if (error) {
      toast.error(error);
    }
  }, [signupSuccess, isAuthenticated, navigate, error]);

  return (
    <div className="flex justify-center items-center min-h-screen  bg-gradient-to-r from-indigo-400 to-cyan-400">
      <form
        onSubmit={handleSubmit}
        className="bg-blue-200 p-10 rounded-2xl shadow-xl w-full max-w-sm min-h-[460px] flex flex-col justify-between"
      >
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">Admin Sign Up</h2>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <div className="space-y-4">
            <div className="flex flex-col items-center">
              <label htmlFor="userName" className="self-start mb-1 text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                name="userName"
                id="userName"
                value={form.userName}
                onChange={handleChange}
                placeholder="Enter your username"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col items-center">
              <label htmlFor="Email" className="self-start mb-1 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="Email"
                id="Email"
                value={form.Email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col items-center">
              <label htmlFor="password" className="self-start mb-1 text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4 mt-6">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition duration-300 text-white py-2 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>

          <div className="text-center text-sm text-gray-600">
            <span className="inline-block px-2">— OR —</span>
            <div>
              <Link
                to="/login"
                className="text-blue-600 hover:underline font-bold"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminSignup;
