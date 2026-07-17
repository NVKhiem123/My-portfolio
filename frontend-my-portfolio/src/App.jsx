import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <Header toggleTheme={toggleTheme} currentTheme={theme} />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer>
        <p>© 2026 Bản quyền thuộc về Nguyễn Văn Khiêm.</p>
        <div style={{ marginTop: '10px' }}>
          <a 
            href="https://github.com/NVKhiem123" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ fontWeight: 'bold', textDecoration: 'underline' }}
          >
            Ghé thăm GitHub của tôi
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;