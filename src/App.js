import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import './App.css';

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Experience from './pages/Experience/Experience';
import Education from './pages/Education/Education';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Resume from './pages/Resume/Resume';

const prefersReducedMotion = () => window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;

// Eased wheel/trackpad scrolling (touch keeps native momentum); new pages open at the top
function ScrollManager() {
  const { pathname } = useLocation();
  const lenis = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    lenis.current = new Lenis({ autoRaf: true, lerp: 0.09 });
    return () => {
      lenis.current.destroy();
      lenis.current = null;
    };
  }, []);

  useEffect(() => {
    // Going through Lenis keeps its eased position in sync; a raw scrollTo would fight it
    if (lenis.current) lenis.current.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const REVEAL_TARGETS = '.page-head, .resume-head, .hero > *, .glass';

// Headings, the hero and every card glide up the first time they scroll into view; siblings arrive in turn
function PageTransition({ children }) {
  const { pathname } = useLocation();
  const ref = useRef(null);

  // Layout effect: items are hidden before the first paint, so nothing flashes in and then vanishes
  useLayoutEffect(() => {
    if (!('IntersectionObserver' in window) || prefersReducedMotion()) return undefined;
    const items = [...new Set(ref.current.querySelectorAll(REVEAL_TARGETS))];
    const done = (e) => {
      // Drop the reveal classes once finished so hover transitions don't inherit the delay
      e.currentTarget.classList.remove('reveal', 'in');
      e.currentTarget.style.removeProperty('--reveal-delay');
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    items.forEach((el) => {
      const index = [...el.parentNode.children].indexOf(el);
      el.style.setProperty('--reveal-delay', `${(index % 4) * 90}ms`);
      el.classList.add('reveal');
      el.addEventListener('transitionend', done, { once: true });
      io.observe(el);
    });
    return () => io.disconnect();
  }, [pathname]);

  return <div ref={ref} key={pathname} className="page-enter">{children}</div>;
}

function App() {
  return (
    <Router>
      <ScrollManager />
      <div className="App">
        <Navbar />
        <main className="main-content">
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/education" element={<Education />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </PageTransition>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
