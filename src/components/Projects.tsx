
const projects = [
    {
        title: "KCA Landscaping Platform",
        description: "Developed a secure-by-design client management system featuring encrypted data handling and granular access controls for business-critical operations.",
        tags: ["Next.js", "Encryption", "PostgreSQL", "Auth"],
        link: "https://kcalandscaping.vercel.app",
    },
    {
        title: "Secure Lifecycle Ecosystem",
        description: "Engineered a privacy-focused productivity suite with hardened API endpoints and secure session management for comprehensive personal data protection.",
        tags: ["Python", "Flask", "PenTesting", "SQLite"],
        link: "https://github.com/Koehl5/Organize-your-life-",
    }
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                    Featured <span className="title-gradient">Projects</span>
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem'
                }}>
                    {projects.map((project, index) => (
                        <div key={index} className="glass project-card" style={{ padding: '2rem', transition: 'transform 0.3s ease' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', minHeight: '80px' }}>
                                {project.description}
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                {project.tags.map(tag => (
                                    <span key={tag} style={{
                                        fontSize: '0.8rem',
                                        padding: '0.3rem 0.8rem',
                                        borderRadius: '20px',
                                        background: 'var(--glass-bg)',
                                        border: '1px solid var(--glass-border)'
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <a href={project.link} className="btn btn-secondary" style={{ width: '100%', textAlign: 'center' }}>
                                Learn More
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
