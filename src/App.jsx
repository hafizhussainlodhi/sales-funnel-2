import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'

// Layout Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import ForMen from './pages/ForMen'
import ForWomen from './pages/ForWomen'
import Supplements from './pages/Supplements'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetalis'
import Team from './pages/Team'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar hamesha top par rahega */}
        <Navbar />

        {/* Dynamic Content Pages */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/for-men" element={<ForMen />} />
            <Route path="/for-women" element={<ForWomen />} />
            <Route path="/supplements" element={<Supplements />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blogdetails" element={<BlogDetails />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Fallback route agar koi galat URL enter kare */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Footer hamesha bottom par rahega */}
        <Footer />
      </div>
    </Router>
  )
}

export default App