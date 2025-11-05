export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold gradient-text mb-2">
            Quantum Innovations
          </h3>
          <p className="text-muted-foreground">
            Transforming enterprises through cutting-edge AI, automation, and quantum computing innovation.
          </p>
        </div>
        
        <nav className="flex flex-wrap justify-center gap-6 mb-8">
          <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Company
          </a>
          <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            About Us
          </a>
          <a href="#technology" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Technology
          </a>
          <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Services
          </a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Contact
          </a>
          <a href="#legal" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Legal
          </a>
        </nav>

        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Quantum Innovations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
