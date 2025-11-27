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

            <div className="container max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Text Content */}
                    <div className="space-y-8">
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm bg-primary/10 text-primary border border-primary/20"
                            style={{
                                animation: 'fade-in 0.8s ease-out 0.2s forwards',
                                opacity: 0
                            }}
                        >
                            <Sparkles className="w-4 h-4" />
                            Open to Opportunities
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
                            className="text-lg leading-relaxed text-foreground/60"
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
                            className="flex flex-wrap gap-4"
                            style={{
                                animation: 'fade-in 0.8s ease-out 0.8s forwards',
                                opacity: 0
                            }}
                        >
                            <a
                                href="#projects"
                                className="px-8 py-4 text-lg rounded-xl text-white font-semibold shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-300 flex items-center gap-2"
                                style={{
                                    background: "linear-gradient(45deg, #3b82f6 0%, #6366f1 25%, #8b5cf6 50%, #a855f7 75%, #3b82f6 100%)",
                                    backgroundSize: "200% 200%"
                                }}
                            >
                                View My Work
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-4 text-lg rounded-xl border-2 border-border bg-card text-foreground font-semibold hover:bg-secondary transition-all duration-300 flex items-center gap-2"
                            >
                                <Download className="w-5 h-5" />
                                Download CV
                            </a>
                        </div>

                        {/* Social Links */}
                        <div
                            className="flex gap-4"
                            style={{
                                animation: 'fade-in 0.8s ease-out 1s forwards',
                                opacity: 0
                            }}
                        >
                            <a
                                href="https://github.com/joshjmin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl bg-card border-2 border-border hover:border-primary hover:scale-105 transition-all duration-300 shadow-sm"
                            >
                                <Github className="w-6 h-6" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/joshua-min-58b6ba335/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl bg-card border-2 border-border hover:border-primary hover:scale-105 transition-all duration-300 shadow-sm"
                            >
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a
                                href="mailto:joshuamin2006@hotmail.com"
                                className="p-3 rounded-xl bg-card border-2 border-border hover:border-primary hover:scale-105 transition-all duration-300 shadow-sm"
                            >
                                <Mail className="w-6 h-6" />
                            </a>
                            <a
                                href="https://www.instagram.com/joshmin27/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl bg-card border-2 border-border hover:border-primary hover:scale-105 transition-all duration-300 shadow-sm"
                            >
                                <Instagram className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Visual Element */}
                    <div
                        className="relative hidden lg:block"
                        style={{
                            animation: 'fade-in 0.8s ease-out 0.3s forwards',
                            opacity: 0
                        }}
                    >
                        <div className="relative">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 rounded-3xl blur-3xl opacity-30 animate-gradient-shift"
                                style={{
                                    background: "linear-gradient(45deg, #3b82f6 0%, #6366f1 25%, #8b5cf6 50%, #a855f7 75%, #3b82f6 100%)",
                                    backgroundSize: "200% 200%"
                                }}
                            ></div>

                            {/* Main Visual Box */}
                            <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-card shadow-2xl">
                                <div className="absolute inset-0 flex items-center justify-center animate-gradient-shift"
                                    style={{
                                        background: "linear-gradient(45deg, #3b82f6 0%, #6366f1 25%, #8b5cf6 50%, #a855f7 75%, #3b82f6 100%)",
                                        backgroundSize: "200% 200%"
                                    }}
                                >
                                    {/* You can replace this with an image */}
                                    <div className="text-white text-9xl font-bold opacity-20">JM</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};