import { Code, User, Briefcase, School, Dot, Award } from "lucide-react";

export const AboutSection = () => {
    return (
    <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
                <div className="grid grid-cols-1 gap-6">
                <div className="gradient-border p-6 card-hover">
                    <div className="space-y-16">
                        <div className="space-y-4">
                            <div className="flex flex-start rounded-full justify-center gap-2">
                                < School className="h-7 w-7 text-primary"/>
                                <h3 className="text-xl font-semibold">  Education  </h3>
                            </div>
                            <div className="flex text-muted-foreground items-start gap-4">
                                    <div className="rounded-full bg-primary/10">
                                        <Dot className="h-6 w-6 text-primary"/>
                                    </div>
                                        <div className="text-left">
                                                <p className="text-muted-foreground">
                                                    {""}
                                                    University of Toronto - Bachelors of Applied Science in Computer Engineering + PEY Co-op
                                                </p>
                                        </div>
                            </div>
                        </div>
                </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                <div className="gradient-border p-6 card-hover">
                    <div className="space-y-4">
                        <div className="flex rounded-full justify-center gap-2">
                            < Award className="h-7 w-7 text-primary"/>
                            <h3 className="text-xl font-semibold">  Awards  </h3>
                        </div>

                        <div className="flex text-muted-foreground items-start gap-4">
                                <div className="rounded-full bg-primary/10">
                                    <Dot className="h-6 w-6 text-primary"/>
                                </div>
                                    <div className="text-left">
                                            <p className="text-muted-foreground">
                                                {""}
                                                Recipient of $60,000 from the University of Toronto International Scholar Award - Faculty of Applied Science and Engineering
                                            </p>
                                    </div>
                        </div>

                        <div className="flex text-muted-foreground items-start gap-4">
                                <div className="rounded-full bg-primary/10">
                                    <Dot className="h-6 w-6 text-primary"/>
                                </div>
                                    <div className="text-left">
                                            <p className="text-muted-foreground">
                                                {""}
                                                Governor General's Academic Medal
                                            </p>
                                    </div>
                        </div>

                        <div className="flex text-muted-foreground items-start gap-4">
                                <div className="rounded-full bg-primary/10">
                                    <Dot className="h-6 w-6 text-primary"/>
                                </div>
                                    <div className="text-left">
                                            <p className="text-muted-foreground">
                                                {""}
                                                Sir Isaac Newton Award
                                            </p>
                                    </div>
                        </div>

                        <div className="flex text-muted-foreground items-start gap-4">
                                <div className="rounded-full bg-primary/10">
                                    <Dot className="h-6 w-6 text-primary"/>
                                </div>
                                    <div className="text-left">
                                            <p className="text-muted-foreground">
                                                {""}
                                                Board Leadership Award
                                            </p>
                                    </div>
                        </div>
                    </div>
                </div>
                </div>


                        <div className="flex flex-col sm:flex-row gap-4 pt-10 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {""}
                                    Get In Touch
                            </a>

                            <a href="https://docs.google.com/document/d/1J51pmr4jHjuMDXIvMfa57EeNFXndxnYdLIKnrkhcgZM/edit?usp=sharing" target="_blank" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>
                        </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                <div className="gradient-border p-6 card-hover">
                    <div className="space-y-6">
                        <div className="flex rounded-full justify-center gap-2">
                            < Briefcase className="h-7 w-7 text-primary"/>
                            <h3 className="text-xl font-semibold">  Work Experience  </h3>
                        </div>

                        <div className="flex text-muted-foreground items-start gap-4">
                                <div className="rounded-full bg-primary/10">
                                    <Dot className="h-6 w-6 text-primary"/>
                                </div>
                                    <div className="text-left">
                                                <h4 className="font-semibold text-left">  Student Mentorship - Thales </h4>
                                                <p>Jan 2023</p>
                                    </div>
                        </div>
                        <div className="flex text-muted-foreground items-start gap-4">
                                <div className="rounded-full bg-primary/10">
                                    <Dot className="h-6 w-6 text-primary"/>
                                </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-left">  CHEP Career Quest Data Analysis - Chep Brambles </h4>
                                        <p>July 2022</p>
                                    </div>
                        </div>
                        <div className="flex text-muted-foreground items-start gap-4">
                                <div className="rounded-full bg-primary/10">
                                    <Dot className="h-6 w-6 text-primary"/>
                                </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-left">  Project Team Leader - Suction Wedge for Book Conservation at Uoft </h4>
                                        <p> Jan 2025 - Apr 2025</p>
                                    </div>
                        </div>
                        <div className="flex text-muted-foreground items-start gap-4">
                                <div className="rounded-full bg-primary/10">
                                    <Dot className="h-6 w-6 text-primary"/>
                                </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-left">  Taekwondo Instructor - Zion Taekwondo</h4>
                                        <p>Sep 2022 - May 2025</p>
                                    </div>
                        </div>
                        <div className="flex text-muted-foreground items-start gap-4">
                                <div className="rounded-full bg-primary/10">
                                    <Dot className="h-6 w-6 text-primary"/>
                                </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-left">  Private Tutor</h4>
                                        <p>May 2025 - Present</p>
                                    </div>
                        </div>
                        <div className="flex text-muted-foreground items-start gap-4">
                                <div className="rounded-full bg-primary/10">
                                    <Dot className="h-6 w-6 text-primary"/>
                                </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-left">  Restaurant Server - Daldongnae</h4>
                                        <p>May 2025 - Present</p>
                                    </div>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    </section>
    );
};