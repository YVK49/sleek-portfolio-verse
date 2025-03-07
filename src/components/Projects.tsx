
import { useState, useEffect } from 'react';
import { ExternalLink, Github, Code, Zap, Globe } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  demoUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI Task Automator",
    description: "An intelligent workflow automation platform built with Python and Django that integrates with n8n for complex task automation.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop",
    tags: ["Python", "Django", "n8n", "AI"],
    category: "AI Automation",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "CodeZen Learning Platform",
    description: "An interactive coding education platform with real-time feedback, built using React, TypeScript, and Supabase for backend management.",
    image: "https://images.unsplash.com/photo-1551651653-c5186a1fbba2?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "TypeScript", "Supabase", "Education"],
    category: "Web Development",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Data Visualization Dashboard",
    description: "A comprehensive analytics dashboard for real-time data visualization using D3.js and React with a Django REST Framework backend.",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "D3.js", "Django", "REST API"],
    category: "Web Development",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Workflow AI Assistant",
    description: "AI-powered assistant for optimizing business workflows, integrating with various services through a unified API.",
    image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=2069&auto=format&fit=crop",
    tags: ["AI", "API Integration", "Automation"],
    category: "AI Automation",
    demoUrl: "#",
  },
  {
    id: 5,
    title: "Content Management System",
    description: "Custom CMS built with Django and React, featuring a headless architecture and advanced content modeling capabilities.",
    image: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=2080&auto=format&fit=crop",
    tags: ["Django", "React", "Headless CMS"],
    category: "Web Development",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: 6,
    title: "API Integration Platform",
    description: "A platform for seamlessly connecting and automating workflows across different APIs and services.",
    image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=2064&auto=format&fit=crop",
    tags: ["API", "Integration", "Automation"],
    category: "Backend Management",
    githubUrl: "#",
  }
];

const categories = ["All", ...new Set(projects.map(project => project.category))];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entries[0].target);
      }
    }, { threshold: 0.1 });

    const section = document.getElementById('projects');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Web Development': return <Globe size={16} />;
      case 'AI Automation': return <Zap size={16} />;
      case 'Backend Management': return <Code size={16} />;
      default: return <Code size={16} />;
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <h2 className={`section-title transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Featured Projects
        </h2>
        
        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
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
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`group glass-card rounded-xl overflow-hidden transition-all duration-700 hover:shadow-lg ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-end gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-background text-foreground hover:bg-foreground hover:text-background transition-colors duration-300"
                      aria-label="View GitHub repository"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-background text-foreground hover:bg-foreground hover:text-background transition-colors duration-300"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-background/80 backdrop-blur-sm">
                    {getCategoryIcon(project.category)}
                    <span className="ml-1.5">{project.category}</span>
                  </span>
                </div>
              </div>
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 bg-accent text-foreground text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
