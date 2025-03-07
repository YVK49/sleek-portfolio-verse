
import { useState, useEffect } from 'react';
import { Code2, Server, Rocket, Globe, Braces } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entries[0].target);
      }
    }, { threshold: 0.2 });

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="about" className="py-20 relative">
      {/* Subtle background shape */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute -right-[40%] -top-[10%] w-[70%] h-[70%] rounded-full bg-accent/30 blur-[100px] dark:bg-accent/10"
          aria-hidden="true"
        />
      </div>
      
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Image or Profile area */}
          <div className={`lg:w-5/12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-background/20 opacity-80 z-10"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop')] bg-cover bg-center"></div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="glass p-4 sm:p-6 rounded-xl text-center max-w-[80%]">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2">Vamshi</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">Tech Professional</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className={`lg:w-7/12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  I'm a versatile tech professional with over 8 years of experience in web development, AI automation, and backend management. My passion lies in creating elegant solutions that bridge the gap between complex technology and user-friendly experiences.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed mt-4">
                  With expertise across multiple programming languages and frameworks, I bring a holistic approach to every project—whether it's developing robust web applications, designing AI-powered automation workflows, or managing complex backend systems.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  { icon: Code2, title: "Fullstack Development", desc: "Python, Django, JavaScript, React" },
                  { icon: Braces, title: "Frontend Excellence", desc: "Responsive UIs, Modern frameworks" },
                  { icon: Server, title: "Backend Management", desc: "Supabase, Firebase, RESTful APIs" },
                  { icon: Rocket, title: "AI Automation", desc: "n8n, Workflow design, Integration" }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="glass-card p-4 rounded-xl flex items-start gap-3 transition-all hover:shadow-md duration-300 hover:-translate-y-1"
                  >
                    <div className="p-2 rounded-lg bg-accent text-foreground">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
