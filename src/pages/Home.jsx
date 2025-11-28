import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ThemeThoggle } from "../components/ThemeThoggle";
import AnimatedBackground from "@/components/AnimatedBackground";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export const Home = () => {
    return (
        <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeThoggle />

            {/* Animated Background */}
            <AnimatedBackground isDark={true} />

            <div className="relative z-10">
                {/* NavBar */}
                <Navbar />

                {/* Main Content */}
                <main>
                    <HeroSection />
                    <AboutSection />
                    <ProjectsSection />
                    <SkillsSection />
                    <ContactSection />
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
};