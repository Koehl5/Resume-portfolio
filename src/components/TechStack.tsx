const TechStack = () => {
    const techs = ["React", "Next.js", "Python", "Flask", "Node.js", "TypeScript", "PostgreSQL", "Vercel"];
    const expertise = [
        { title: "Defensive Security", desc: "Implementing end-to-end encryption, OAuth2/OIDC, and robust access control systems in high-traffic applications." },
        { title: "Vulnerability Research", desc: "Identifying and mitigating critical security flaws through static and dynamic analysis (SAST/DAST)." },
        { title: "Secure Architectures", desc: "Designing resilient cloud-native infrastructures and secure-by-default software development lifecycles." }
    ];

    return (
        <section className="container" style={{ padding: '6rem 0' }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2rem',
                marginBottom: '6rem'
            }}>
                {expertise.map(item => (
                    <div key={item.title} className="glass" style={{ padding: '2.5rem', border: 'none', background: 'var(--panel-color)' }}>
                        <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'white' }}>{item.title}</h3>
                        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                ))}
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '4rem',
                flexWrap: 'wrap',
                opacity: 0.4,
                borderTop: '1px solid var(--glass-border)',
                paddingTop: '4rem'
            }}>
                {techs.map(tech => (
                    <span key={tech} style={{ fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase' }}>
                        {tech}
                    </span>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
