
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-10 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-center md:text-left">
              <span className="font-medium">Vamshi</span>
              <span className="text-muted-foreground"> • Tech Professional</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1 text-center md:text-left">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-4">
              <a 
                href="#home" 
                className="text-foreground/80 hover:text-foreground text-sm transition-colors"
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-foreground/80 hover:text-foreground text-sm transition-colors"
              >
                About
              </a>
              <a 
                href="#projects" 
                className="text-foreground/80 hover:text-foreground text-sm transition-colors"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="text-foreground/80 hover:text-foreground text-sm transition-colors"
              >
                Contact
              </a>
            </div>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
