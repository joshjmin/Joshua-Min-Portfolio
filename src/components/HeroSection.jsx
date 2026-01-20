import { ArrowRight, Download, Github, Linkedin, Mail, Instagram, Sparkles } from "lucide-react";

export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
        >
            {/* Animated gradient background */}
            <div className="absolute inset-0 opacity-10 animate-gradient-shift"
                style={{
                    background: "linear-gradient(45deg, #3b82f6 0%, #6366f1 25%, #8b5cf6 50%, #a855f7 75%, #3b82f6 100%)",
                    backgroundSize: "200% 200%"
                }}
            />

            {/* Decorative floating elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

            <div className="container max-w-4xl mx-auto relative z-10">
                {/* Centered Content */}
                <div className="text-center space-y-8">
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm bg-primary/10 border"
                        style={{
                            animation: 'fade-in 0.8s ease-out 0.2s forwards',
                            opacity: 0,
                            borderColor: '#8b5cf6'
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: '#8b5cf6' }} />
                        <span style={{ color: '#8b5cf6' }}>Open to Opportunities</span>
                    </div>

                    {/* Main Heading */}
                    <div>
                        <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                            <span
                                className="block text-foreground"
                                style={{
                                    animation: 'fade-in 0.8s ease-out forwards',
                                    opacity: 0
                                }}
                            >
                                Hi, I'm
                            </span>
                            <span
                                className="block bg-clip-text text-transparent"
                                style={{
                                    background: "linear-gradient(45deg, #3b82f6 0%, #6366f1 25%, #8b5cf6 50%, #a855f7 75%, #3b82f6 100%)",
                                    backgroundSize: "200% 200%",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    animation: "fade-in 0.8s ease-out 0.2s forwards, gradient-shift 8s ease infinite"
                                }}
                            >
                                Joshua Min
                            </span>
                        </h1>
                    </div>

                    {/* Subtitle */}
                    <p
                        className="text-2xl font-semibold text-foreground/80"
                        style={{
                            animation: 'fade-in 0.8s ease-out 0.4s forwards',
                            opacity: 0
                        }}
                    >
                        Computer Engineering Student
                    </p>

                    {/* Description */}
                    <p
                        className="text-lg leading-relaxed text-foreground/60 max-w-2xl mx-auto"
                        style={{
                            animation: 'fade-in 0.8s ease-out 0.6s forwards',
                            opacity: 0
                        }}
                    >
                        I'm passionate about technology and innovation. I enjoy building solutions that blend
                        hardware and software, and I'm always eager to tackle real-world challenges.
                    </p>

                    {/* Buttons */}
                    <div
                        className="flex flex-wrap gap-4 justify-center"
                        style={{
                            animation: 'fade-in 0.8s ease-out 0.8s forwards',
                            opacity: 0
                        }}
                    >
                        <a
                            href="#projects"
                            className="px-8 py-4 text-lg rounded-xl text-white font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105"
                            style={{
                                background: "linear-gradient(45deg, #3b82f6 0%, #6366f1 25%, #8b5cf6 50%, #a855f7 75%, #3b82f6 100%)",
                                backgroundSize: "200% 200%",
                                boxShadow: '0 8px 20px -3px rgba(59, 130, 246, 0.4), 0 4px 10px -2px rgba(139, 92, 246, 0.3)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 20px 40px -5px rgba(59, 130, 246, 0.5), 0 10px 25px -3px rgba(139, 92, 246, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = '0 8px 20px -3px rgba(59, 130, 246, 0.4), 0 4px 10px -2px rgba(139, 92, 246, 0.3)';
                            }}
                        >
                            View My Work
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1S2ff5uIIaA3QxCGPWvvtR4wRw4v1uq5y/view?usp=sharing"
                            className="px-8 py-4 text-lg rounded-xl bg-card text-foreground font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105"
                            style={{
                                borderColor: '#8b5cf6',
                                boxShadow: '0 8px 20px -3px rgba(139, 92, 246, 0.3), 0 4px 10px -2px rgba(139, 92, 246, 0.2)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 20px 40px -5px rgba(139, 92, 246, 0.4), 0 10px 25px -3px rgba(139, 92, 246, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = '0 8px 20px -3px rgba(139, 92, 246, 0.3), 0 4px 10px -2px rgba(139, 92, 246, 0.2)';
                            }}
                        >
                            <Download className="w-5 h-5" />
                            Download CV
                        </a>
                    </div>

                    {/* Social Links */}
                    <div
                        className="flex gap-4 justify-center"
                        style={{
                            animation: 'fade-in 0.8s ease-out 1s forwards',
                            opacity: 0
                        }}
                    >
                        <a
                            href="https://github.com/joshjmin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl bg-card border-2 hover:scale-105 transition-all duration-300 shadow-sm"
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
                            <Github className="w-6 h-6" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/joshua-min-58b6ba335/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl bg-card border-2 hover:scale-105 transition-all duration-300 shadow-sm"
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
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a
                            href="mailto:joshuamin2006@hotmail.com"
                            className="p-3 rounded-xl bg-card border-2 hover:scale-105 transition-all duration-300 shadow-sm"
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
                            <Mail className="w-6 h-6" />
                        </a>
                        <a
                            href="https://www.instagram.com/joshmin27/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl bg-card border-2 hover:scale-105 transition-all duration-300 shadow-sm"
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
                            <Instagram className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};