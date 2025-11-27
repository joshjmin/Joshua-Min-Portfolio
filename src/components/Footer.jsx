import { ArrowUp, Github, Linkedin, Mail, Instagram, Heart } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="relative border-t border-border mt-12">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Left Section - Branding */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold mb-2">
                            <span className="text-foreground">Joshua's </span>
                            <span className="text-gradient">Portfolio</span>
                        </h3>
                    </div>

                    {/* Center Section - Quick Links */}
                    <div className="text-center">
                        <h4 className="text-base font-semibold mb-4 text-foreground">Quick Links</h4>
                        <div className="flex flex-col space-y-2">
                            <a
                                href="#hero"
                                className="text-sm text-foreground/70 transition-colors duration-300"
                                onMouseEnter={(e) => e.currentTarget.style.color = '#8b5cf6'}
                                onMouseLeave={(e) => e.currentTarget.style.color = ''}
                            >
                                Home
                            </a>
                            <a
                                href="#about"
                                className="text-sm text-foreground/70 transition-colors duration-300"
                                onMouseEnter={(e) => e.currentTarget.style.color = '#8b5cf6'}
                                onMouseLeave={(e) => e.currentTarget.style.color = ''}
                            >
                                About
                            </a>
                            <a
                                href="#projects"
                                className="text-sm text-foreground/70 transition-colors duration-300"
                                onMouseEnter={(e) => e.currentTarget.style.color = '#8b5cf6'}
                                onMouseLeave={(e) => e.currentTarget.style.color = ''}
                            >
                                Projects
                            </a>
                            <a
                                href="#contact"
                                className="text-sm text-foreground/70 transition-colors duration-300"
                                onMouseEnter={(e) => e.currentTarget.style.color = '#8b5cf6'}
                                onMouseLeave={(e) => e.currentTarget.style.color = ''}
                            >
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Right Section - Social Links */}
                    <div className="text-center md:text-right">
                        <h4 className="text-base font-semibold mb-4 text-foreground">Connect With Me</h4>
                        <div className="flex justify-center md:justify-end space-x-4">
                            <a
                                href="https://github.com/joshjmin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-card border-2 transition-all duration-300 hover:scale-110"
                                style={{ borderColor: '#e5e7eb' }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = '#8b5cf6';
                                    e.currentTarget.style.backgroundColor = 'rgba(139, 92, 246, 0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = '#e5e7eb';
                                    e.currentTarget.style.backgroundColor = '';
                                }}
                            >
                                <Github className="h-5 w-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/joshua-min-58b6ba335/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-card border-2 transition-all duration-300 hover:scale-110"
                                style={{ borderColor: '#e5e7eb' }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = '#8b5cf6';
                                    e.currentTarget.style.backgroundColor = 'rgba(139, 92, 246, 0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = '#e5e7eb';
                                    e.currentTarget.style.backgroundColor = '';
                                }}
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a
                                href="mailto:joshuamin2006@hotmail.com"
                                className="p-2 rounded-lg bg-card border-2 transition-all duration-300 hover:scale-110"
                                style={{ borderColor: '#e5e7eb' }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = '#8b5cf6';
                                    e.currentTarget.style.backgroundColor = 'rgba(139, 92, 246, 0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = '#e5e7eb';
                                    e.currentTarget.style.backgroundColor = '';
                                }}
                            >
                                <Mail className="h-5 w-5" />
                            </a>
                            <a
                                href="https://www.instagram.com/joshmin27/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-card border-2 transition-all duration-300 hover:scale-110"
                                style={{ borderColor: '#e5e7eb' }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = '#8b5cf6';
                                    e.currentTarget.style.backgroundColor = 'rgba(139, 92, 246, 0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = '#e5e7eb';
                                    e.currentTarget.style.backgroundColor = '';
                                }}
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-border pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Copyright */}
                        <p className="text-sm text-foreground/60 text-center md:text-left">
                            © {new Date().getFullYear()} Joshua Min. All rights reserved.
                        </p>

                        {/* Made with love */}
                        <p className="text-sm text-foreground/60 flex items-center gap-1">
                            Made by Joshua Min
                        </p>

                        {/* Back to top button */}
                        <a
                            href="#hero"
                            className="p-2 rounded-full border-2 transition-all duration-300 hover:scale-110"
                            style={{ borderColor: '#8b5cf6' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "linear-gradient(45deg, #3b82f6 0%, #6366f1 25%, #8b5cf6 50%, #a855f7 75%, #3b82f6 100%)";
                                e.currentTarget.querySelector('svg').style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = '';
                                e.currentTarget.querySelector('svg').style.color = '#8b5cf6';
                            }}
                        >
                            <ArrowUp size={20} style={{ color: '#8b5cf6' }} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};