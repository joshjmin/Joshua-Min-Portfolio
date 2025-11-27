import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
    // Frontend
    { name: "HTML/CSS", level: 100, category: "frontend" },
    { name: "Javascript", level: 90, category: "frontend" },
    { name: "React", level: 80, category: "frontend" },
    { name: "TailwindCSS", level: 80, category: "frontend" },
    { name: "Swift", level: 90, category: "frontend" },
    { name: "Verilog", level: 100, category: "frontend" },


    //Backend
    { name: "Python", level: 100, category: "backend" },
    { name: "C", level: 100, category: "backend" },
    { name: "C++", level: 100, category: "backend" },
    { name: "SQL", level: 90, category: "backend" },
    { name: "Pygame", level: 90, category: "backend" },
    { name: "MATLAB", level: 70, category: "backend" },

    //Tools
    { name: "VSCode", level: 100, category: "tools" },
    { name: "MS Office", level: 100, category: "tools" },
    { name: "FPGA", level: 100, category: "tools" },
    { name: "AutoCAD", level: 90, category: "tools" },
    { name: "Fusion360", level: 100, category: "tools" },
    { name: "SwiftUI", level: 80, category: "tools" },
    { name: "Figma", level: 90, category: "tools" },
    { name: "Canva", level: 100, category: "tools" },
    { name: "Git/Github", level: 100, category: "tools" },
    { name: "Lego Mindstorm EV3", level: 100, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    return (

        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center">
                    <span className="text-gradient">My Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn("px-8 py-3 rounded-full transition-colors duration-300 capitalize text-lg font-bold",
                                activeCategory === category
                                    ? "text-white"
                                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                            style={activeCategory === category ? {
                                background: "linear-gradient(45deg, #3b82f6 0%, #6366f1 25%, #8b5cf6 50%, #a855f7 75%, #3b82f6 100%)",
                                backgroundSize: "200% 200%"
                            } : {}}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    {filteredSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="px-6 py-3 border-2 rounded-xl font-medium shadow-sm hover:shadow-md transition-all duration-300 cursor-default bg-card text-foreground hover:scale-105 hover:-translate-y-0.5 whitespace-nowrap"
                            style={{
                                animation: `fade-in 0.4s ease-out ${index * 0.05}s forwards`,
                                opacity: 0,
                                borderColor: '#8b5cf6'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "linear-gradient(45deg, #3b82f6 0%, #6366f1 25%, #8b5cf6 50%, #a855f7 75%, #3b82f6 100%)";
                                e.currentTarget.style.color = "white";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "";
                                e.currentTarget.style.color = "";
                            }}
                        >
                            {skill.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};