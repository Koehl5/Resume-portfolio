
const Hero: React.FC = () => {
    return (
        <header className="section hero" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="container" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <div className="animate-fade-in" style={{ textAlign: 'center', width: '100%' }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '0.4rem 1.25rem',
                        borderRadius: '30px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: 'var(--text-secondary)',
                        fontSize: '0.8rem',
                        fontWeight: 600,
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
                            filter: 'blur(70px)',
                            opacity: 0.1,
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
                                border: '1px solid rgba(255,255,255,0.08)',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.8)'
                            }}
                        />
                    </div>
                    <h1 style={{ fontSize: 'min(10vw, 7.5rem)', marginBottom: '1.5rem', fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 0.95 }}>
                        <span className="title-gradient">Koehl Comiskey</span>
                    </h1>
                    <p style={{ fontSize: '1.4rem', color: 'var(--text-secondary)', maxWidth: '850px', margin: '0 auto 4rem', fontWeight: 300, lineHeight: 1.6 }}>
                        <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Lead Consultant at KC Software</span> specializing in full-stack engineering, offensive security research, and architecting resilient digital ecosystems.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="#projects" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem', borderRadius: '8px' }}>Explore Projects</a>
                        <a href="/Resume.pdf" target="_blank" className="btn btn-secondary" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem', borderRadius: '8px' }}>Resume</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
