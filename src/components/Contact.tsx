const Contact = () => {
    return (
        <section id="contact" className="section" style={{ background: 'var(--panel-color)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 900, lineHeight: 1.1 }}>
                            Let's <span className="title-gradient">Connect</span>
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem' }}>
                            I'm currently looking for new opportunities and collaborations. Feel free to reach out via any of the channels below.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {/* Internal Security: Contact Obfuscation & Honeypot */}
                            <div style={{ display: 'none' }} aria-hidden="true">
                                <input type="text" name="b_honeypot" tabIndex={-1} value="" readOnly />
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div className="glass" style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px' }}>
                                    📧
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Secure Channel</p>
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href = `mailto:${['koehl', 'comiskeyb', '@', 'gmail.com'].join('')}`;
                                        }}
                                        style={{ fontSize: '1.1rem', fontWeight: 600 }}
                                    >
                                        View Secure Email
                                    </a>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div className="glass" style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px' }}>
                                    📱
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Encrypted Voice</p>
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href = `tel:${['570', '885', '2952'].join('')}`;
                                        }}
                                        style={{ fontSize: '1.1rem', fontWeight: 600 }}
                                    >
                                        Establish Connection
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Social Profiles</h3>
                        <a href="https://github.com/Koehl5" target="_blank" className="btn btn-secondary" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', alignItems: 'center' }}>
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/koehl-comiskey-1b8869360" target="_blank" className="btn btn-secondary" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', alignItems: 'center' }}>
                            LinkedIn
                        </a>
                        <a href="mailto:koehlcomiskeyb@gmail.com" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                            Send Message
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
