import { Mail, Phone, MapPin, Linkedin, Instagram, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "emailjs-com";

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

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then((result) => {
            setFormData({name: "", email: "", message: ""}) 
        })
        .catch(() => alert("Oops! Something went wrong. Please try again."));
        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon.",
            });
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            {""}
                            Contact Information
                        </h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />{""}
                                </div>
                                <div className="text-left">
                                    <h4 className="font-medium"> Email</h4>
                                        <a
                                        href="mailto:joshuamin2006@hotmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            joshuamin2006@hotmail.com
                                        </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />{""}
                                </div>
                                <div className="text-left">
                                    <h4 className="font-medium"> Phone</h4>
                                        <a
                                        href="tel:+16475407722"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            +1 (647)-540-7722
                                        </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />{""}
                                </div>
                                <div className="text-left">
                                    <h4 className="font-medium"> Location</h4>
                                        <a className="text-muted-foreground hover:text-primary transition-colors">
                                            Toronto, ON, Canada
                                        </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/joshua-min-58b6ba335/" target="_blank">
                                <Linkedin />
                            </a>
                            <a href="https://www.instagram.com/joshmin27/" target="_blank">
                                <Instagram />
                            </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs"
                    onSubmit={handleSubmit}
                    >
                        <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

                        <form className="space-y-6">
                            <div>
                                <label
                                htmlFor="name"
                                className="block text-sm font-medium mb-2"
                                >
                                {""}
                                Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Joshua Min..."
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                />
                            </div>

                            <div>
                                <label
                                htmlFor="email"
                                className="block text-sm font-medium mb-2"
                                >
                                {""}
                                Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="example@gmail.com"
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                            </div>

                            <div>
                                <label
                                htmlFor="message"
                                className="block text-sm font-medium mb-2"
                                >
                                {""}
                                Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    value={formData.message}
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-non"
                                    placeholder="Hello, I'd like to talk about..."
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                />
                            </div>

                            <button
                            type="submit"
                            disabled={isSubmitting}
                            className={cn(
                                "cosmic-button w-full flex items-center justify-center gap-2"
                            )}
                            >
                            {isSubmitting? "Sending" : "Send Message"}
                            <  Send size={16}/>
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

