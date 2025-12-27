import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { MdFitnessCenter, MdLogout, MdLogin, MdPersonAdd } from 'react-icons/md'

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
              <MdFitnessCenter className="text-white text-2xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Workout Tracker
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block">Stay Fit, Stay Strong</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-4">
            {user && (
              <div className="flex items-center space-x-4">
                <div className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-green-50 to-blue-50 px-4 py-2 rounded-full">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {user.email.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-gray-700 font-medium text-sm">
                    Welcome, {user.email.split('@')[0]}
                  </span>
                </div>
                <button 
                  onClick={handleClick}
                  className="flex items-center space-x-2 bg-gradient-to-r from-red-500 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-red-600 hover:to-pink-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <MdLogout />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            )}
            {!user && (
              <div className="flex space-x-3">
                <Link 
                  to="/login"
                  className="flex items-center space-x-2 bg-white/50 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-lg hover:bg-white/70 transition-all duration-300 shadow-sm hover:shadow-md border border-gray-200"
                >
                  <MdLogin />
                  <span>Login</span>
                </Link>
                <Link 
                  to="/signup"
                  className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <MdPersonAdd />
                  <span>Signup</span>
                </Link>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar;
