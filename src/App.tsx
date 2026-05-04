
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Articles from './components/Articles';
import Contact from './components/Contact';
function App() {
  return (
    <div className="app">
      <nav className="container" style={{
        padding: '2.5rem 4rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100
      }}>
        <div style={{ fontWeight: 900, fontSize: '1.8rem', letterSpacing: '-0.05em' }}>K<span className="title-gradient">C</span></div>
        <div style={{ display: 'flex', gap: '4rem' }}>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#articles" className="nav-link">Articles</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </nav>

      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Articles />
        <Contact />
      </main>

      <footer className="container" style={{ padding: '6rem 4rem', borderTop: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
          &copy; {new Date().getFullYear()} Koehl Comiskey.
        </p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="https://github.com/Koehl5" target="_blank" style={{ color: 'var(--text-secondary)' }}>GitHub</a>
          <a href="https://www.linkedin.com/in/koehl-comiskey-1b8869360" target="_blank" style={{ color: 'var(--text-secondary)' }}>LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
