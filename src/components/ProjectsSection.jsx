import { Github, ArrowRight } from "lucide-react";
import { useState } from "react";

const projects = [
    {
        id: 1,
        title: "Wall Breaker",
        description: "FPGA-based Breakout game with hardware collision detection, VGA display pipeline, and PS/2 interface with modular FSM design and real-time systems.",
        image: "/projects/Wallbreaker.png",
        tags: ["Verilog", "FPGA", "VGA", "PS/2"],
        githubURL: "https://github.com/joshjmin/Wall-Breaker",
    },
    {
        id: 2,
        title: "Reversi AI Bot",
        description: "A reversi game-playing program that plays against a human opponent using the minimax algorithm.",
        image: "/projects/Reversi.png",
        tags: ["C", "Minimax"],
        githubURL: "https://github.com/joshjmin/Reversi",
    },
    {
        id: 3,
        title: "Connect 4 Game",
        description: "Connect 4 Game program in the terminal in C.",
        image: "/projects/Connect4.png",
        tags: ["C"],
        githubURL: "https://github.com/joshjmin/Connect-4",
    },
    {
        id: 4,
        title: "Speedy Penguin",
        description: "A fast-paced game with endless runner mechanics, responsive controls, and dynamic obstacle generation.",
        image: "/projects/SpeedyPenguin.png",
        tags: ["Python", "Pygame"],
        githubURL: "https://github.com/joshjmin/SpeedyPenguin",
    },
    {
        id: 5,
        title: "Nito Schedule",
        description: "AWS integrated automatic exam schedule generator based on professors', students', and room availability.",
        image: "/projects/NitoSchedule.png",
        tags: ["Python", "AWS Claude 3.5 Sonnet v2", "Amazon Bedrock", "Amazon S3", "Figma"],
        githubURL: "https://github.com/joshjmin/Nito-Schedule",
    },
];

export const ProjectsSection = () => {
    const [isGithubHovered, setIsGithubHovered] = useState(false);

    return (
        <section id="projects" className="py-24 px-4 relative">
            <style>{`
                .project-card:hover .project-title {
                    background: linear-gradient(45deg, #3b82f6 0%, #6366f1 25%, #8b5cf6 50%, #a855f7 75%, #3b82f6 100%);
                    background-size: 200% 200%;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                
                .tag-item {
                    background-color: rgb(249, 250, 251);
                    border-color: rgb(229, 231, 235);
                }
                
                .dark .tag-item {
                    background-color: rgb(3, 7, 18);
                    border-color: rgb(255, 255, 255);
                    border-width: 2px;
                }
                
                .tag-item:hover {
                    background-color: rgb(243, 244, 246);
                }
                
                .dark .tag-item:hover {
                    background-color: rgb(55, 65, 81);
                }
                
                .view-code-btn {
                    background-color: rgb(249, 250, 251);
                    border-color: rgb(229, 231, 235);
                }
                
                .dark .view-code-btn {
                    background-color: rgb(3, 7, 18);
                    border-color: rgb(255, 255, 255);
                    border-width: 2px;
                }
                
                .view-code-btn:hover {
                    background-color: rgb(243, 244, 246);
                }
                
                .dark .view-code-btn:hover {
                    background-color: rgb(55, 65, 81);
                }
            `}</style>

            <div className="container mx-auto max-w-6xl">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center">
                    <span className="bg-clip-text text-transparent" style={{
                        background: "linear-gradient(45deg, #3b82f6 0%, #6366f1 25%, #8b5cf6 50%, #a855f7 75%, #3b82f6 100%)",
                        backgroundSize: "200% 200%",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}>Featured Projects</span>
                </h2>

                <p className="text-center text-foreground/60 mb-16 max-w-2xl mx-auto text-lg">
                    Here are some of my recent projects. Each project was carefully crafted
                    with attention to detail, performance, and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-card relative rounded-2xl overflow-hidden transition-all duration-500 bg-card border-2 border-gray-100 dark:border-transparent"
                            style={{
                                animation: `fade-in 0.6s ease-out ${index * 0.1}s forwards`,
                                opacity: 0,
                                boxShadow: '0 10px 30px -5px rgba(59, 130, 246, 0.5), 0 5px 15px -3px rgba(139, 92, 246, 0.4)',
                                transition: 'box-shadow 0.5s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 20px 50px -5px rgba(59, 130, 246, 0.6), 0 10px 30px -3px rgba(139, 92, 246, 0.5)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = '0 10px 30px -5px rgba(59, 130, 246, 0.5), 0 5px 15px -3px rgba(139, 92, 246, 0.4)';
                            }}
                        >
                            {/* Image */}
                            <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="text-6xl font-bold text-gray-200 dark:text-gray-700">
                                            {project.title.charAt(0)}
                                        </div>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-200/20 dark:from-gray-900/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Content */}
                            <div className="p-8 bg-gradient-to-b from-card to-card/95">
                                <h3 className="project-title text-2xl font-bold mb-3 text-foreground transition-all duration-300">
                                    {project.title}
                                </h3>
                                <p className="leading-relaxed mb-6 text-foreground/70">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                {project.tags && project.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-3 mb-6">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="tag-item px-4 py-2 text-sm rounded-lg font-medium text-foreground shadow-md border transition-colors duration-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* GitHub Link */}
                                {project.githubURL && (
                                    <a
                                        href={project.githubURL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block"
                                    >
                                        <button className="view-code-btn px-5 py-2.5 rounded-xl border-2 text-foreground transition-all duration-300 flex items-center gap-2 font-medium shadow-sm hover:shadow-md">
                                            <Github className="w-4 h-4" />
                                            View Code
                                        </button>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <a
                        className="w-fit flex items-center mx-auto gap-3 px-8 py-4 rounded-xl text-white font-bold text-lg transition-all duration-300"
                        target="_blank"
                        href="https://github.com/joshjmin"
                        rel="noopener noreferrer"
                        style={{
                            background: "linear-gradient(45deg, #3b82f6 0%, #6366f1 25%, #8b5cf6 50%, #a855f7 75%, #3b82f6 100%)",
                            backgroundSize: "200% 200%",
                            boxShadow: isGithubHovered
                                ? '0 20px 40px -5px rgba(59, 130, 246, 0.5), 0 10px 25px -3px rgba(139, 92, 246, 0.4)'
                                : '0 8px 20px -3px rgba(59, 130, 246, 0.4), 0 4px 10px -2px rgba(139, 92, 246, 0.3)'
                        }}
                        onMouseEnter={() => setIsGithubHovered(true)}
                        onMouseLeave={() => setIsGithubHovered(false)}
                    >
                        Check my Github <ArrowRight size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
};