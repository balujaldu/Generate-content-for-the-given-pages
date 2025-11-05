import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

interface SubService {
  title: string;
  description: string;
}

interface Capability {
  title: string;
  description: string;
}

interface ServiceSectionProps {
  id: string;
  brand: string;
  title: string;
  description: string;
  subServices: SubService[];
  capabilities: Capability[];
  ctaHeading: string;
  ctaText: string;
  gradient?: string;
}

export const ServiceSection = ({
  id,
  brand,
  title,
  description,
  subServices,
  capabilities,
  ctaHeading,
  ctaText,
  gradient = "from-card/50 to-background",
}: ServiceSectionProps) => {
  return (
    <section
      id={id}
      data-brand={brand}
      className={`min-h-screen flex items-center py-20 px-6 bg-gradient-to-b ${gradient}`}
    >
      <div className="container mx-auto max-w-7xl">
        {/* Brand Label */}
        <div className="mb-6">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            {brand}
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-section font-bold mb-6 animate-fade-in">
          {title}
        </h1>

        {/* Description */}
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl leading-relaxed">
          {description}
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-wrap gap-4 mb-16">
          <Button className="bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-glow min-h-[44px] px-8">
            Get Started
          </Button>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground min-h-[44px] px-8">
            View Insights
          </Button>
        </div>

        {/* Sub-Service Highlights */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {subServices.map((service, idx) => (
            <Card key={idx} className="p-6 bg-card/60 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-medium">
                Explore Use Case →
              </Button>
            </Card>
          ))}
        </div>

        {/* Core Capabilities */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {capabilities.map((cap, idx) => (
            <Card key={idx} className="p-6 bg-secondary/60 backdrop-blur border-border hover:shadow-card transition-all duration-300">
              <h4 className="text-lg font-semibold mb-2 text-foreground">
                {cap.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {cap.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Section CTA Block */}
        <Card className="p-8 bg-gradient-primary text-primary-foreground border-0 shadow-glow">
          <h3 className="text-2xl font-bold mb-3">
            {ctaHeading}
          </h3>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl">
            {ctaText}
          </p>
          <Button className="bg-background text-foreground hover:bg-background/90 font-semibold min-h-[44px] px-8">
            Contact Our Team
          </Button>
        </Card>

        {/* Local Section Footer */}
        <footer className="mt-16 pt-8 border-t border-border/50 bg-card/30">
          <div className="text-center mb-6">
            <h4 className="text-xl font-bold gradient-text mb-2">
              {brand}
            </h4>
            <p className="text-sm text-muted-foreground">
              Innovating intelligent AI solutions that drive business growth.
            </p>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-4 mb-6">
            <a href="#home" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Company
            </a>
            <a href="#about" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#technology" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Technology
            </a>
            <a href="#services" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#contact" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <a href="#legal" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Legal
            </a>
          </nav>

          <div className="text-center text-xs text-muted-foreground/80">
            <p>&copy; {new Date().getFullYear()} {brand}. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </section>
  );
};
