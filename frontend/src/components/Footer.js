import { MdFitnessCenter, MdEmail, MdPhone } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <MdFitnessCenter className="text-green-400 text-2xl" />
              <h3 className="text-xl font-bold">Workout Tracker</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Track your fitness journey with our comprehensive workout management system.
              Stay motivated, stay fit!
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-400">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                  Workout History
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                  Progress Tracker
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                  Settings
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-400">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MdEmail className="text-green-400" />
                <span className="text-gray-300 text-sm">random@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MdPhone className="text-green-400" />
                <span className="text-gray-300 text-sm">+1 (987) 654-3210</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Workout Tracker. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer