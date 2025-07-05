import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
    // Frontend
    {name: "HTML/CSS" , level: 100, category: "frontend" },
    {name: "Javascript" , level: 90, category: "frontend" },
    {name: "React" , level: 80, category: "frontend" },
    {name: "TailwindCSS" , level: 80, category: "frontend" },
    {name: "Swift" , level: 90, category: "frontend" },

    
    //Backend
    {name: "Python" , level: 100, category: "backend" },
    {name: "C", level: 100, category: "backend" },
    {name: "SQL", level: 90, category: "backend" },
    {name: "Pygame", level: 90, category: "backend" },    
    {name: "MATLAB", level: 70, category: "backend" },
    
    //Tools
    
    {name: "VSCode" , level: 100, category: "tools" },
    {name: "MS Office" , level: 100, category: "tools" },
    {name: "AutoCAD" , level: 90, category: "tools" },
    {name: "Fusion360" , level: 100, category: "tools" },
    {name: "SwiftUI" , level: 80, category: "tools" },
    {name: "Figma" , level: 90, category: "tools" },
    {name: "Canva" , level: 100, category: "tools" },
    {name: "Git/Github" , level: 100, category: "tools" },
    {name: "Lego Mindstorm EV3" , level: 100, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory]= useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    return (

    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button key={key}
                    onClick={() => setActiveCategory(category)}
                    className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                    )}>
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div
                    key={key}
                    
                    className="bg-card p-6 rounded-lg shadow-xs card-hover py-5 rounded-full border border-primary hover:bg-primary/10 transition-colors"
                    >
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-xl"> {skill.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out" 
                        style={{width: skill.level + "%" }}/>
                        </div>


                    </div>
                ))}
            </div>
        </div>
    </section>
    );
};