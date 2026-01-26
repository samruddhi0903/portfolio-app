import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/organisms/Navigation';
import SiteFooter from './components/organisms/SiteFooter';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Lab from './pages/Lab';
import Certifications from './pages/Certifications';
import SideQuest from './pages/SideQuest';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background-dark text-white font-display">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            {/* <Route path="/lab" element={<Lab />} /> */}
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/side-quest" element={<SideQuest />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
    </Router>
  );
}

export default App;
