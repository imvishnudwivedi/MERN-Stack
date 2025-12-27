import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 font-sans relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-200 to-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <BrowserRouter>
          <Navbar />
          <main className="flex-grow">
            <div className="pages max-w-7xl mx-auto px-4 py-8">
              <Routes>
                <Route 
                  path="/" 
                  element={user ? <Home /> : <Navigate to="/login" />} 
                />
                <Route 
                  path="/login" 
                  element={!user ? <Login /> : <Navigate to="/" />} 
                />
                <Route 
                  path="/signup" 
                  element={!user ? <Signup /> : <Navigate to="/" />} 
                />
              </Routes>
            </div>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
