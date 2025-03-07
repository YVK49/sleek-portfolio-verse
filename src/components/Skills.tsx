import { useState, useEffect } from 'react';
import { 
  Code, Server, Bot, PenTool, CheckCircle2, Zap, 
  Database, Layout, FileCode, Cpu, Terminal, Globe 
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ElementType;
  category: string;
  level: number; // 1-5
}

const skillsData: Skill[] = [
  // Programming
  { name: "Python", icon: FileCode, category: "Programming", level: 5 },
  { name: "Django", icon: Server, category: "Programming", level: 5 },
  { name: "HTML", icon: Code, category: "Programming", level: 5 },
  { name: "CSS", icon: Layout, category: "Programming", level: 4 },
  { name: "JavaScript", icon: Code, category: "Programming", level: 3 },
  
  // Web Development
  { name: "Responsive Design", icon: Globe, category: "Web Development", level: 4 },
  { name: "UI/UX", icon: PenTool, category: "Web Development", level: 3 },
  { name: "Web Accessibility", icon: CheckCircle2, category: "Web Development", level: 3 },
  
  // Backend Management
  { name: "Database Design", icon: Database, category: "Backend Management", level: 4 },
  { name: "API Development", icon: Server, category: "Backend Management", level: 4 },
  { name: "Authentication", icon: CheckCircle2, category: "Backend Management", level: 4 },
  
  // Tools
  { name: "Git", icon: Code, category: "Tools", level: 4 },
  { name: "VSCode", icon: Code, category: "Tools", level: 5 },
  { name: "Command Line", icon: Terminal, category: "Tools", level: 4 },
];

const categories = ["All", ...new Set(skillsData.map(skill => skill.category))];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<string[]>([]);

  const filteredSkills = selectedCategory === "All" 
    ? skillsData 
    : skillsData.filter(skill => skill.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entries[0].target);
      }
    }, { threshold: 0.1 });

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  useEffect(() => {
    // Gradually reveal skills for animation effect
    if (isVisible) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setAnimatedSkills(prev => {
            if (prev.length < filteredSkills.length) {
              return [...prev, filteredSkills[prev.length].name];
            } else {
              clearInterval(interval);
              return prev;
            }
          });
        }, 100);
        
        return () => clearInterval(interval);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, filteredSkills]);

  return (
    <section id="skills" className="py-20 bg-accent/30 dark:bg-accent/10">
      <div className="section-container">
        <h2 className={`section-title transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Skills & Expertise
        </h2>
        
        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setAnimatedSkills([]);
                setTimeout(() => {
                  const newFiltered = category === "All" 
                    ? skillsData 
                    : skillsData.filter(skill => skill.category === category);
                  setAnimatedSkills(newFiltered.map(s => s.name));
                }, 100);
              }}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                selectedCategory === category 
                  ? 'bg-foreground text-background font-medium' 
                  : 'bg-background hover:bg-background/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className={`glass-card p-5 rounded-xl transition-all duration-500 ${
                animatedSkills.includes(skill.name) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 50}ms`,
              }}
            >
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-background dark:bg-accent text-foreground">
                  <skill.icon size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-lg">{skill.name}</h3>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <CheckCircle2 
                        key={i} 
                        size={14} 
                        className={`${
                          i < skill.level 
                            ? 'text-foreground' 
                            : 'text-muted-foreground/30'
                        } mr-1`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
