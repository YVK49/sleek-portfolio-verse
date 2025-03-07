
import { useEffect, useState } from "react";
import { ArrowDownIcon } from "lucide-react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-background -z-10" />
      
      {/* Animated dots pattern - subtle background detail */}
      <div className="absolute inset-0 -z-5 opacity-[0.15]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }} />
      </div>
      
      <div className="container px-4 sm:px-6 py-12 flex flex-col items-center text-center">
        <div className="max-w-3xl space-y-8">
          <div className={`transition-all duration-700 ease-out delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block py-1 px-3 text-xs sm:text-sm font-medium bg-accent text-primary rounded-full mb-4 animate-fade-in">
              Tech Professional
            </span>
          </div>
          
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight overflow-hidden`}>
            <div className="overflow-hidden">
              <span 
                className={`block animate-text-reveal animation-delay-150 ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: '150ms' }}
              >
                Hi, I'm <span className="bg-gradient-to-r from-primary to-primary/80 clip-text">Vamshi</span>
              </span>
            </div>
            <div className="overflow-hidden mt-2">
              <span 
                className={`block animate-text-reveal ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: '300ms' }}
              >
                Building Smart Web Solutions
              </span>
            </div>
            <div className="overflow-hidden mt-2">
              <span 
                className={`block animate-text-reveal ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: '450ms' }}
              >
                with AI & Code
              </span>
            </div>
          </h1>
          
          <p 
            className={`text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto transition-all duration-700 ease-out delay-[600ms] ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Full-stack developer specializing in Python, Django, and JavaScript with a passion for AI automation and creating elegant, efficient web solutions.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center pt-4 transition-all duration-700 ease-out delay-[750ms] ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-full bg-foreground text-background font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Let's Collaborate
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 rounded-full border border-border bg-background/50 backdrop-blur-sm font-medium hover:bg-accent transition-all duration-300"
            >
              See My Work
            </a>
          </div>
        </div>
        
        <a 
          href="#about" 
          className={`absolute bottom-8 animate-bounce transition-all duration-700 ease-out delay-[900ms] ${
            isLoaded ? 'opacity-70 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          aria-label="Scroll to about section"
        >
          <ArrowDownIcon className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
