const Articles = () => {
    return (
        <section id="articles" className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
            <div className="container">
                <h2 style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center', fontWeight: 900 }}>
                    Latest <span className="title-gradient">Articles</span>
                </h2>
                <div className="glass" style={{ padding: '4rem', textAlign: 'center', borderStyle: 'dashed' }}>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                        Writing in progress. Check back soon for insights on web development and design.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Articles;
