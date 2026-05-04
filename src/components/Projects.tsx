
const projects = [
    {
        title: "Studivian AI Platform",
        description: "An enterprise-grade AI study suite featuring automated note generation, 2FA security, and Argon2id password hashing for maximum data protection.",
        tags: ["Next.js", "Gemini AI", "Security", "PostgreSQL"],
        link: "#",
        comingSoon: true
    },
    {
        title: "RankReach SEO",
        description: "A social-inspired SEO platform with AI-driven outreach, interactive leaderboards, and high-fidelity schema graphing for digital marketers.",
        tags: ["Astro", "TypeScript", "AI", "Analytics"],
        link: "#",
    },
    {
        title: "Luzerne Cash Home Buyers",
        description: "A hardened real estate landing page optimized for local SEO, featuring CSP security headers, honeypot traps, and high-conversion lead forms.",
        tags: ["SEO", "Web Security", "React", "Optimization"],
        link: "https://www.luzernecashhomebuyers.com",
    },
    {
        title: "Busy Bee Baking",
        description: "A premium bakery website with a dynamic menu system, responsive image galleries, and a streamlined UX for local business growth.",
        tags: ["React", "Vite", "UX/UI", "Responsive"],
        link: "https://github.com/Koehl5/BusyBeeBakery",
    },
    {
        title: "KCA Landscaping Platform",
        description: "Developed a secure-by-design client management system featuring encrypted data handling and granular access controls for business-critical operations.",
        tags: ["Next.js", "Encryption", "PostgreSQL", "Auth"],
        link: "https://kcalandscaping.vercel.app",
    },
    {
        title: "Electric Surge Club",
        description: "Engineered a modern web platform for a premier athletic club, featuring responsive design and streamlined user engagement.",
        tags: ["React", "Vite", "TailwindCSS", "SEO"],
        link: "https://electric-surge.vercel.app/",
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
                            <a 
                                href={project.link} 
                                className={`btn ${project.comingSoon ? 'btn-disabled' : 'btn-secondary'}`} 
                                style={{ 
                                    width: '100%', 
                                    textAlign: 'center',
                                    opacity: project.comingSoon ? 0.7 : 1,
                                    cursor: project.comingSoon ? 'default' : 'pointer'
                                }}
                                onClick={(e) => project.comingSoon && e.preventDefault()}
                            >
                                {project.comingSoon ? 'Coming Soon!' : 'Learn More'}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
