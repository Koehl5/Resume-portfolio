import { useState, useEffect } from 'react';

const BootSequence = ({ onComplete }: { onComplete: () => void }) => {
    const [logs, setLogs] = useState<string[]>([]);
    const messages = [
        "[SYSTEM] Initiating Secure Boot...",
        "[KERN] Loading Kernel Modules...",
        "[INIT] Setting up encrypted vault...",
        "[NET] Establishing encrypted tunnel...",
        "[SEC] Running integrity check...",
        "[SEC] Checking for authorized signature...",
        "[SEC] Signature Verified: KOEHL_COMISKEY_v1.0",
        "[SEC] Decrypting Frontend...",
        "[SYS] System Ready. Accessing Portfolio."
    ];

    useEffect(() => {
        let currentLine = 0;
        const interval = setInterval(() => {
            if (currentLine < messages.length) {
                setLogs(prev => [...prev, messages[currentLine]]);
                currentLine++;
            } else {
                clearInterval(interval);
                setTimeout(onComplete, 800);
            }
        }, 200);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="boot-sequence">
            {logs.map((log, i) => (
                <div key={i} style={{ marginBottom: '0.25rem' }}>
                    <span style={{ opacity: 0.5 }}>{new Date().toISOString()}</span> {log}
                </div>
            ))}
            <div className="cursor" style={{ width: '8px', height: '15px', background: '#0f0', display: 'inline-block', marginLeft: '5px' }}></div>
        </div>
    );
};

export default BootSequence;
