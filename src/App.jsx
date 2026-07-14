import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'

// Layout Components
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

// Pages
import Home from './Pages/Home'
import ForMen from './Pages/ForMen'
import ForWomen from './Pages/ForWomen'
import Supplements from './Pages/Supplements'
import Blog from './Pages/Blog'
import BlogDetails from './Pages/BlogDetalis'
import Team from './Pages/Team'
import Contact from './Pages/Contact'

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