
import { useState, useEffect } from 'react';
import { User, Book, ArrowRight, MessageSquare, Users } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Web Developer",
    content: "CodeZen's practical approach to Django helped me transition from a complete beginner to confidently building my own web applications in just a few months.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Samantha Lee",
    role: "UX Designer",
    content: "The AI automation course completely changed my workflow. Now I can focus on creative aspects while letting automated processes handle the repetitive tasks.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Marcus Johnson",
    role: "Full Stack Developer",
    content: "What sets CodeZen apart is the hands-on mentorship and real-world projects. I gained practical skills that I immediately applied in my job.",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg"
  }
];

const Teaching = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entries[0].target);
      }
    }, { threshold: 0.1 });

    const section = document.getElementById('teaching');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  useEffect(() => {
    // Auto-rotate testimonials
    if (testimonials.length > 1) {
      const interval = setInterval(() => {
        setActiveTestimonial(prev => (prev + 1) % testimonials.length);
      }, 6000);
      
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <section id="teaching" className="py-20 bg-accent/30 dark:bg-accent/10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -left-[20%] top-[20%] w-[40%] h-[60%] rounded-full bg-background/50 blur-[100px] -z-10 dark:bg-accent/5" aria-hidden="true" />
      
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Teaching Content */}
          <div className={`lg:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold">
                CodeZen: Learning Through Practice
              </h2>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                CodeZen is a hands-on learning platform I've developed to help aspiring developers gain practical skills through real-world projects, personalized mentorship, and a supportive community.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                {[
                  {
                    icon: Book,
                    title: "Practical Curriculum",
                    description: "Learn by building real applications, not just following tutorials"
                  },
                  {
                    icon: User,
                    title: "Personalized Mentorship",
                    description: "Direct guidance tailored to your learning style and goals"
                  },
                  {
                    icon: Users,
                    title: "Community Support",
                    description: "Connect with fellow learners for collaboration and networking"
                  },
                  {
                    icon: MessageSquare,
                    title: "Continuous Feedback",
                    description: "Regular code reviews and improvement suggestions"
                  }
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="glass-card p-5 rounded-xl flex flex-col gap-3 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                  >
                    <div className="p-2 rounded-lg bg-accent text-foreground inline-flex">
                      <feature.icon size={18} />
                    </div>
                    <h3 className="font-medium">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
              
              <a 
                href="#contact" 
                className="inline-flex items-center text-foreground font-medium hover:underline group mt-4"
              >
                Interested in learning with CodeZen?
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className={`lg:w-1/2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative bg-accent/20 dark:bg-accent/5 rounded-2xl p-6 sm:p-8 overflow-hidden">
              {/* Testimonial pattern decoration */}
              <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="quotesPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                      <text x="10" y="50" fontSize="40" opacity="0.05" className="text-foreground fill-current">
                        "
                      </text>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#quotesPattern)" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-semibold mb-8 relative z-10">Student Success Stories</h3>
              
              <div className="relative">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.id}
                    className={`transition-all duration-700 ease-out absolute inset-0 ${
                      index === activeTestimonial 
                        ? 'opacity-100 translate-x-0 relative' 
                        : 'opacity-0 translate-x-20 pointer-events-none'
                    }`}
                  >
                    <div className="mb-6">
                      <div className="text-lg sm:text-xl leading-relaxed text-foreground/90">
                        "{testimonial.content}"
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full overflow-hidden">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Testimonial navigation dots */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeTestimonial ? 'w-6 bg-foreground' : 'w-2 bg-foreground/30'
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teaching;
