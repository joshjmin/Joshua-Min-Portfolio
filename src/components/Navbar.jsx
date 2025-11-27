import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";


const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];


export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <nav
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                isScrolled ? "py-3 bg-background/80 backdroup-blur-md shadow-xs" : "py-5"
            )}
        >
            <div className="container flex items-center justify-between">
                <a className="text-xl font-bold flex items-center"
                    href="#hero"
                >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground"> Joshua's </span>
                        <span className="text-gradient">Portfolio</span>
                    </span>
                </a>

                {/*desktop nav*/}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="text-foreground/80 transition-colors duration-300"
                            onMouseEnter={(e) => e.currentTarget.style.color = '#8b5cf6'}
                            onMouseLeave={(e) => e.currentTarget.style.color = ''}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/*mobile*/}

                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {" "}
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />} {" "}
                </button>

                <div className={cn(
                    "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                )}>
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground/80 transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                                onMouseEnter={(e) => e.currentTarget.style.color = '#8b5cf6'}
                                onMouseLeave={(e) => e.currentTarget.style.color = ''}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};