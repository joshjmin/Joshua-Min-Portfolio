import { GraduationCap, Download, Award, Briefcase } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-6xl text-left">
                <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
                    <span className="text-gradient">About Me</span>
                </h2>

                {/* Education Section */}
                <div className="mb-20">
                    <h3 className="text-3xl font-bold mb-8 text-center"
                        style={{ color: '#3b82f6' }}
                    >
                        Education
                    </h3>
                    <div className="space-y-6">
                        <div className="p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 bg-card shadow-lg hover:shadow-xl">
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{
                                        backgroundColor: 'rgba(59, 130, 246, 0.2)',
                                        color: '#3b82f6'
                                    }}
                                >
                                    <GraduationCap className="w-7 h-7" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold mb-2 text-foreground">
                                        Bachelors of Applied Science in Computer Engineering + PEY Co-op
                                    </h4>
                                    <div className="text-lg font-semibold mb-2"
                                        style={{ color: '#3b82f6' }}
                                    >
                                        University of Toronto
                                    </div>
                                    <div className="text-sm mb-3 text-foreground/60">
                                        2024 - 2029 (Expected)
                                    </div>
                                    <div className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-3"
                                        style={{
                                            backgroundColor: 'rgba(16, 185, 129, 0.2)',
                                            color: '#10b981'
                                        }}
                                    >
                                        GPA: 3.67/4.0
                                    </div>
                                    <p className="text-foreground/70">
                                        Dean’s List Scholar
                                    </p>
                                    <p className="text-foreground/70">
                                        Enrolled in the Professional Experience Year (PEY) Co-op Program
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Awards Section */}
                <div className="mb-20">
                    <h3 className="text-3xl font-bold mb-8 text-center"
                        style={{ color: '#8b5cf6' }}
                    >
                        Awards & Recognition
                    </h3>
                    <div className="space-y-6">
                        <div className="p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 bg-card shadow-lg hover:shadow-xl">
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{
                                        backgroundColor: 'rgba(139, 92, 246, 0.2)',
                                        color: '#8b5cf6'
                                    }}
                                >
                                    <Award className="w-7 h-7" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold mb-2 text-foreground">
                                        University of Toronto International Scholar Award
                                    </h4>
                                    <div className="text-lg font-semibold mb-2"
                                        style={{ color: '#8b5cf6' }}
                                    >
                                        Faculty of Applied Science and Engineering
                                    </div>
                                    <div className="text-sm mb-3 text-foreground/60">
                                        2024
                                    </div>
                                    <p className="text-foreground/70">
                                        Recipient of $60,000 scholarship recognizing academic excellence and leadership potential
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 bg-card shadow-lg hover:shadow-xl">
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{
                                        backgroundColor: 'rgba(139, 92, 246, 0.2)',
                                        color: '#8b5cf6'
                                    }}
                                >
                                    <Award className="w-7 h-7" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold mb-2 text-foreground">
                                        Governor General's Academic Medal
                                    </h4>
                                    <div className="text-lg font-semibold mb-2"
                                        style={{ color: '#8b5cf6' }}
                                    >
                                        Academic Achievement
                                    </div>
                                    <div className="text-sm mb-3 text-foreground/60">
                                        2024
                                    </div>
                                    <p className="text-foreground/70">
                                        Awarded to the student graduating with the highest academic standing
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 bg-card shadow-lg hover:shadow-xl">
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{
                                        backgroundColor: 'rgba(139, 92, 246, 0.2)',
                                        color: '#8b5cf6'
                                    }}
                                >
                                    <Award className="w-7 h-7" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold mb-2 text-foreground">
                                        Sir Isaac Newton Award
                                    </h4>
                                    <div className="text-lg font-semibold mb-2"
                                        style={{ color: '#8b5cf6' }}
                                    >
                                        Excellence in Physics
                                    </div>
                                    <div className="text-sm mb-3 text-foreground/60">
                                        2024
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 bg-card shadow-lg hover:shadow-xl">
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{
                                        backgroundColor: 'rgba(139, 92, 246, 0.2)',
                                        color: '#8b5cf6'
                                    }}
                                >
                                    <Award className="w-7 h-7" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold mb-2 text-foreground">
                                        Board Leadership Award
                                    </h4>
                                    <div className="text-lg font-semibold mb-2"
                                        style={{ color: '#8b5cf6' }}
                                    >
                                        Leadership Excellence
                                    </div>
                                    <div className="text-sm mb-3 text-foreground/60">
                                        2024
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Work Experience Section */}
                <div className="mb-20">
                    <h3 className="text-3xl font-bold mb-8 text-center"
                        style={{ color: '#10b981' }}
                    >
                        Work Experience
                    </h3>

                    <div className="space-y-6">
                        <div className="p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 bg-card shadow-lg hover:shadow-xl">
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{
                                        backgroundColor: 'rgba(16, 185, 129, 0.2)',
                                        color: '#10b981'
                                    }}
                                >
                                    <Briefcase className="w-7 h-7" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold mb-2 text-foreground">
                                        Academic’s Director
                                    </h4>
                                    <div className="text-lg font-semibold mb-2"
                                        style={{ color: '#10b981' }}
                                    >
                                        Google Developer Groups
                                    </div>
                                    <div className="text-sm mb-3 text-foreground/60">
                                        May 2025 - Present

                                    </div>
                                    <p className="text-foreground/70">
                                        Delivered Agentic AI, API, web dev workshops using Firebase and Git to teach software workflows
                                    </p>
                                    <p className="text-foreground/70">
                                        Managed multi-week bootcamps with milestones and LLM tools, boosting project success rates by 80%
                                    </p>
                                    <p className="text-foreground/70">
                                        Created templates, codebases, and checklists to streamline onboarding and improve outcomes for 50+ participants

                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 bg-card shadow-lg hover:shadow-xl">
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{
                                        backgroundColor: 'rgba(16, 185, 129, 0.2)',
                                        color: '#10b981'
                                    }}
                                >
                                    <Briefcase className="w-7 h-7" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold mb-2 text-foreground">
                                        Private Tutor
                                    </h4>
                                    <div className="text-lg font-semibold mb-2"
                                        style={{ color: '#10b981' }}
                                    >
                                        Self-Employed
                                    </div>
                                    <div className="text-sm mb-3 text-foreground/60">
                                        May 2025 - Sep 2025
                                    </div>
                                    <p className="text-foreground/70">
                                        Taught students from elementary to high school including IB for math and physics

                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 bg-card shadow-lg hover:shadow-xl">
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{
                                        backgroundColor: 'rgba(16, 185, 129, 0.2)',
                                        color: '#10b981'
                                    }}
                                >
                                    <Briefcase className="w-7 h-7" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold mb-2 text-foreground">
                                        Restaurant Server
                                    </h4>
                                    <div className="text-lg font-semibold mb-2"
                                        style={{ color: '#10b981' }}
                                    >
                                        Daldongnae
                                    </div>
                                    <div className="text-sm mb-3 text-foreground/60">
                                        May 2025 - Sep 2025
                                    </div>
                                    <p className="text-foreground/70">
                                        Provided attentive and efficient service and maintained a clean, organized dining area in a fast paced environment

                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 bg-card shadow-lg hover:shadow-xl">
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{
                                        backgroundColor: 'rgba(16, 185, 129, 0.2)',
                                        color: '#10b981'
                                    }}
                                >
                                    <Briefcase className="w-7 h-7" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold mb-2 text-foreground">
                                        Taekwondo Instructor
                                    </h4>
                                    <div className="text-lg font-semibold mb-2"
                                        style={{ color: '#10b981' }}
                                    >
                                        Zion Taekwondo
                                    </div>
                                    <div className="text-sm mb-3 text-foreground/60">
                                        Sep 2022 - May 2025
                                    </div>
                                    <p className="text-foreground/70">
                                        Served as a taekwondo instructor to train and foster discipline, respect, and taekwondo skills to younger students

                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 bg-card shadow-lg hover:shadow-xl">
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{
                                        backgroundColor: 'rgba(16, 185, 129, 0.2)',
                                        color: '#10b981'
                                    }}
                                >
                                    <Briefcase className="w-7 h-7" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold mb-2 text-foreground">
                                        Project Team Leader
                                    </h4>
                                    <div className="text-lg font-semibold mb-2"
                                        style={{ color: '#10b981' }}
                                    >
                                        University of Toronto
                                    </div>
                                    <div className="text-sm mb-3 text-foreground/60">
                                        Jan 2025 - Apr 2025
                                    </div>
                                    <p className="text-foreground/70">
                                        Led a team of students to translate client requirements into engineering design specifications
                                    </p>
                                    <p className="text-foreground/70">
                                        Coordinated cross-functional teamwork while managing stakeholder alignment, timelines, and deliverables
                                    </p>
                                    <p className="text-foreground/70">
                                        Developed and validated a prototype achieving a 90% reduction in runtime through testing and analysis
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 bg-card shadow-lg hover:shadow-xl">
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{
                                        backgroundColor: 'rgba(16, 185, 129, 0.2)',
                                        color: '#10b981'
                                    }}
                                >
                                    <Briefcase className="w-7 h-7" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold mb-2 text-foreground">
                                        Student Mentorship
                                    </h4>
                                    <div className="text-lg font-semibold mb-2"
                                        style={{ color: '#10b981' }}
                                    >
                                        Thales
                                    </div>
                                    <div className="text-sm mb-3 text-foreground/60">
                                        Jan 2023 - Feb 2023
                                    </div>
                                    <p className="text-foreground/70">
                                        Tested CBTC systems by debugging and changing malfunctioning wayside devices to ensure reliable signaling
                                    </p>
                                    <p className="text-foreground/70">
                                        Deployed and verified embedded Assembly software to validate through simulations and structured testing
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 bg-card shadow-lg hover:shadow-xl">
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{
                                        backgroundColor: 'rgba(16, 185, 129, 0.2)',
                                        color: '#10b981'
                                    }}
                                >
                                    <Briefcase className="w-7 h-7" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold mb-2 text-foreground">
                                        Data Analyst Career Intern
                                    </h4>
                                    <div className="text-lg font-semibold mb-2"
                                        style={{ color: '#10b981' }}
                                    >
                                        CHEP Brambles
                                    </div>
                                    <div className="text-sm mb-3 text-foreground/60">
                                        Jul 2022 - Aug 2022
                                    </div>
                                    <p className="text-foreground/70">
                                    Filtered and analyzed 200+ data of the plastic pallets shipping distribution paths and misdirected shipments
                                    </p>
                                    <p className="text-foreground/70">
                                    Identified and corrected 95% of routing errors, improving system efficiency and pallet recovery
                                    </p>
                                    <p className="text-foreground/70">
                                    Created visual dashboards using Powerpoint and Excel to display the dwelling, distribution, and leakages
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 bg-card shadow-lg hover:shadow-xl">
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{
                                        backgroundColor: 'rgba(16, 185, 129, 0.2)',
                                        color: '#10b981'
                                    }}
                                >
                                    <Briefcase className="w-7 h-7" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold mb-2 text-foreground">
                                        Robotics Club President
                                    </h4>
                                    <div className="text-lg font-semibold mb-2"
                                        style={{ color: '#10b981' }}
                                    >
                                        Toronto District Christian High School
                                    </div>
                                    <div className="text-sm mb-3 text-foreground/60">
                                        Oct 2022 - Nov 2023


                                    </div>
                                    <p className="text-foreground/70">
                                        Led a team of 6 to compete in the Ontario Tech Robotics Competition using Lego Mindstorms and SPIKE kit
                                    </p>
                                    <p className="text-foreground/70">
                                        Achieved the Most Novel Design award in 2022 and overall Second Place in 2023

                                    </p>
                                    <p className="text-foreground/70">
                                        Organized meeting schedules and managed sign ups, payments, and accommodations for 30+ members

                                    </p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="#contact"
                        className="px-8 py-4 text-lg rounded-xl text-white font-semibold transition-all duration-300 text-center hover:scale-105"
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
                        Get In Touch
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
            </div>
        </section>
    );
};



