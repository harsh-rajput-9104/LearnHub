import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Profile from './pages/Profile';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/course/:id" element={<CourseDetail />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </AnimatePresence>

          {/* Footer */}
          <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
            <div className="container-custom">
              <div className="grid md:grid-cols-4 gap-8 mb-8">
                <div>
                  <h3 className="font-display font-bold text-xl gradient-text mb-4">
                    LearnHub
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    India's leading EdTech platform for personalized learning and academic excellence.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                    Quick Links
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li><a href="/" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Home</a></li>
                    <li><a href="/courses" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Courses</a></li>
                    <li><a href="/dashboard" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Dashboard</a></li>
                    <li><a href="/profile" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Profile</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                    Categories
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li><a href="/courses" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Mathematics</a></li>
                    <li><a href="/courses" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Science</a></li>
                    <li><a href="/courses" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Languages</a></li>
                    <li><a href="/courses" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Coding</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                    Support
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Help Center</a></li>
                    <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Contact Us</a></li>
                    <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Terms of Service</a></li>
                  </ul>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
                <p>&copy; 2026 LearnHub. All rights reserved. Built with ❤️ for learners.</p>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
