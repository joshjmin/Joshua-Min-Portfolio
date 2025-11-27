import { Mail, Phone, MapPin, Linkedin, Instagram, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "emailjs-com";

const contactInfo = [
    {
        icon: Mail,
        title: "Email",
        content: "joshuamin2006@hotmail.com",
        href: "mailto:joshuamin2006@hotmail.com"
    },
    {
        icon: Phone,
        title: "Phone",
        content: "+1 (647)-540-7722",
        href: "tel:+16475407722"
    },
    {
        icon: MapPin,
        title: "Location",
        content: "Toronto, ON, Canada",
        href: "#"
    }
];

export const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const SERVICE_ID = "service_uregsok";
    const TEMPLATE_ID = "template_xj5zles";
    const PUBLIC_KEY = "POAiRpztToxcFCcE3";

    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true);

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                setFormData({ name: "", email: "", message: "" });
                toast({
                    title: "Message sent!",
                    description: "Thank you for your message. I'll get back to you soon.",
                });
                setIsSubmitting(false);
            })
            .catch(() => {
                alert("Oops! Something went wrong. Please try again.");
                setIsSubmitting(false);
            });
    };

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section id="contact" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        Get In <span className="text-primary">Touch</span>
                    </h2>
                    <p className="text-center text-foreground/60 max-w-2xl mx-auto text-lg">
                        Have a project in mind or want to collaborate? Feel free to reach out.
                        I'm always open to discussing new opportunities.
                    </p>
                </div>

                {/* Contact Info Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {contactInfo.map((item, index) => (
                        <div
                            key={index}
                            className="p-8 text-center bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2"
                            style={{
                                borderColor: 'rgb(243, 244, 246)',
                                animation: `fade-in 0.6s ease-out ${index * 0.1}s forwards`,
                                opacity: 0
                            }}
                        >
                            <a href={item.href} className="block">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                    <item.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                                <p className="text-base text-foreground/70 hover:text-primary transition-colors">
                                    {item.content}
                                </p>
                            </a>
                        </div>
                    ))}
                </div>

                {/* Social Media */}
                <div className="text-center mb-12">
                    <h4 className="font-semibold text-xl mb-6">Connect With Me</h4>
                    <div className="flex justify-center space-x-4">
                        <a
                            href="https://www.linkedin.com/in/joshua-min-58b6ba335/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 rounded-xl bg-card border-2 hover:border-primary hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md"
                            style={{ borderColor: 'rgb(243, 244, 246)' }}
                        >
                            <Linkedin className="h-6 w-6 text-foreground hover:text-primary transition-colors" />
                        </a>
                        <a
                            href="https://www.instagram.com/joshmin27/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 rounded-xl bg-card border-2 hover:border-primary hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md"
                            style={{ borderColor: 'rgb(243, 244, 246)' }}
                        >
                            <Instagram className="h-6 w-6 text-foreground hover:text-primary transition-colors" />
                        </a>
                        <a
                            href="https://discord.com/users/jmin0026"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 rounded-xl bg-card border-2 hover:border-primary hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md"
                            style={{ borderColor: 'rgb(243, 244, 246)' }}
                            title="Discord: jmin0026"
                        >
                            <svg className="h-6 w-6 text-foreground hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="max-w-2xl mx-auto bg-card p-8 rounded-2xl shadow-lg border-2"
                    style={{ borderColor: 'rgb(243, 244, 246)' }}>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-base font-semibold mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    className="w-full px-4 py-3 rounded-xl border-2 bg-background focus:outline-none focus:border-primary transition-colors duration-300"
                                    placeholder="Your name"
                                    style={{ borderColor: 'rgb(243, 244, 246)' }}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-base font-semibold mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    className="w-full px-4 py-3 rounded-xl border-2 bg-background focus:outline-none focus:border-primary transition-colors duration-300"
                                    placeholder="your.email@example.com"
                                    style={{ borderColor: 'rgb(243, 244, 246)' }}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="block text-base font-semibold mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows="6"
                                value={formData.message}
                                className="w-full px-4 py-3 rounded-xl border-2 bg-background focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                                placeholder="Your message..."
                                style={{ borderColor: 'rgb(243, 244, 246)' }}
                                onChange={handleChange}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={cn(
                                "w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed",
                                isSubmitting && "animate-pulse"
                            )}
                        >
                            <Send size={20} />
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};