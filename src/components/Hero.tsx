
const Hero: React.FC = () => {
    return (
        <header className="section hero" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="scanline"></div>
            <div className="container" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <div className="animate-fade-in" style={{ textAlign: 'center', width: '100%' }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '0.5rem 1.25rem',
                        borderRadius: '30px',
                        background: 'rgba(99, 102, 241, 0.1)',
                        border: '1px solid rgba(99, 102, 241, 0.2)',
                        color: 'var(--accent-color)',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.15em',
                        marginBottom: '3rem'
                    }}>
                        Available for Projects
                    </div>
                    <br />
                    <div style={{ position: 'relative', display: 'inline-block', marginBottom: '3.5rem' }}>
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '280px',
                            height: '280px',
                            background: 'var(--accent-gradient)',
                            borderRadius: '50%',
                            filter: 'blur(50px)',
                            opacity: 0.15,
                            zIndex: -1
                        }}></div>
                        <img
                            src="/Headshot.png"
                            alt="Koehl Comiskey"
                            style={{
                                width: '260px',
                                height: '260px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                border: '3px solid rgba(255,255,255,0.05)',
                                boxShadow: '0 30px 60px rgba(0,0,0,0.6)'
                            }}
                        />
                    </div>
                    <h1 style={{ fontSize: 'min(10vw, 7rem)', marginBottom: '1.5rem', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.9 }}>
                        <span className="title-gradient">Koehl Comiskey</span>
                    </h1>
                    <p style={{ fontSize: '1.6rem', color: 'var(--text-secondary)', maxWidth: '900px', margin: '0 auto 4.5rem', fontWeight: 300, lineHeight: 1.5 }}>
                        <span style={{ color: 'white', fontWeight: 600 }}>Security Researcher & Software Engineer</span> specializing in architecting resilient, secure-by-design applications and offensive security research.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="#projects" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>Explore Projects</a>
                        <a href="/Resume.pdf" target="_blank" className="btn btn-secondary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>Resume</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
