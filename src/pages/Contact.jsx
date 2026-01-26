import { useState, useEffect } from 'react';
import Badge from '../components/atoms/Badge';
import ProgressBar from '../components/atoms/ProgressBar';
import { CONTACT_DATA } from '../constants/data';

export default function Contact() {
    const [terminalOutput, setTerminalOutput] = useState([]);
    const [userInput, setUserInput] = useState('');

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const newOutput = {
                time: new Date().toLocaleTimeString('en-US', { hour12: false }),
                type: 'USER_CMD',
                typeColor: 'text-text-primary',
                message: userInput
            };
            setTerminalOutput(prev => [...prev, newOutput]);
            setUserInput('');

            // Simple response simulation
            setTimeout(() => {
                setTerminalOutput(prev => [...prev, {
                    time: new Date().toLocaleTimeString('en-US', { hour12: false }),
                    type: 'SYSTEM',
                    typeColor: 'text-primary',
                    message: 'Command received. Awaiting neural link...'
                }]);
            }, 500);
        }
    };

    return (
        <div className="max-w-[1200px] w-full mx-auto px-4 lg:px-8 py-8 h-[calc(100vh-80px)] min-h-[600px] flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-end mb-8 border-b border-border-dark pb-6">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight flex items-center gap-3">
                        <span className="material-symbols-outlined text-4xl text-primary">hub</span>
                        Comms Center
                    </h1>
                    <p className="text-text-muted mt-2">Establish secure connection via available uplinks.</p>
                </div>
                <Badge variant="success">SIGNAL: STRONG</Badge>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1">
                {/* Left: Contact Info & Stats */}
                <div className="flex flex-col gap-8">
                    {/* Uplinks */}
                    <div className="bg-background-dark border border-border-dark rounded-lg p-6 dark:shadow-[0_0_20px_rgba(56,189,248,0.1)]">
                        <h2 className="text-sm font-bold text-text-primary uppercase mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-lg">settings_ethernet</span>
                            Direct Uplinks
                        </h2>
                        <div className="space-y-4">
                            <a href="mailto:samruddhi.umarkar0903@gmail.com" className="flex items-center gap-4 p-4 rounded bg-surface-dark border border-border-dark/50 hover:bg-primary/5 hover:border-primary/50 transition-all group">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined">mail</span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs text-text-muted font-mono mb-0.5">PRIORITY CHANNEL</p>
                                    <p className="text-text-primary font-medium group-hover:text-primary transition-colors">samruddhiumarkar@gmail.com</p>
                                </div>
                                <span className="material-symbols-outlined text-text-dim group-hover:text-primary -rotate-45 transition-colors">arrow_forward</span>
                            </a>
                            <a href="tel:+917249767759" className="flex items-center gap-4 p-4 rounded bg-surface-dark border border-border-dark/50 hover:bg-primary/5 hover:border-primary/50 transition-all group">
                                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined">call</span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs text-text-muted font-mono mb-0.5">VOICE LINE</p>
                                    <p className="text-text-primary font-medium group-hover:text-emerald-400 transition-colors">+91 7262887575</p>
                                </div>
                                <span className="material-symbols-outlined text-text-dim group-hover:text-emerald-400 -rotate-45 transition-colors">arrow_forward</span>
                            </a>
                            <div className="grid grid-cols-2 gap-4">
                                {CONTACT_DATA.uplinks.map((link) => (
                                    <a key={link.name} href={`https://${link.handle}`} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center gap-2 p-3 rounded font-bold text-xs tracking-wider border transition-all ${link.color} hover:bg-opacity-20`}>
                                        <i className={`lab la-${link.icon.toLowerCase()} text-lg`}></i>
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Interactive Terminal */}
                <div className="flex flex-col bg-background-dark border border-border-dark rounded-lg overflow-hidden font-mono text-sm relative">
                    <div className="flex items-center justify-between px-4 py-2 bg-surface-dark border-b border-border-dark text-xs text-text-muted">
                        <span>TERMINAL_V5.0.2</span>
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                        </div>
                    </div>

                    {/* Input Line */}
                    <div className="p-4 border-t border-border-dark bg-surface-dark flex items-center gap-2">
                        <span className="text-primary font-bold">{'>'}</span>
                        <input
                            type="text"
                            className="bg-transparent border-none outline-none text-text-primary w-full placeholder-text-dim font-mono"
                            placeholder="Type a message..."
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            onKeyDown={handleCommand}
                        />
                        <span className="animate-pulse w-2 h-4 bg-primary block"></span>
                    </div>

                    {/* Resume Download Action */}
                    <div className="absolute bottom-4 right-4 z-10">
                        <a
                            href="/resume.pdf"
                            download="Samruddhi_Umarkar_Resume.pdf"
                            className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/30 text-primary text-xs font-bold rounded hover:bg-primary/20 transition-all cursor-pointer"
                        >
                            <span className="material-symbols-outlined text-sm">download</span>
                            GET_RESUME
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
