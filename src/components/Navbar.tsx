import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  activeBrand: string;
}

export const Navbar = ({ activeBrand }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-lg shadow-glow" : "bg-background/80"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
            >
              {activeBrand}
            </button>
            <div className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection("home")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection("services")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection("technology")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Technology
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Contact
              </button>
            </div>
          </div>
          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-glow min-h-[44px] px-6"
          >
            Request a Demo
          </Button>
        </div>
      </div>
    </nav>
  );
};
