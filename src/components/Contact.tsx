
import { useState, useEffect } from 'react';
import { Mail, MessageSquare, Send, Github, Linkedin, Youtube } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entries[0].target);
      }
    }, { threshold: 0.1 });

    const section = document.getElementById('contact');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormState('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset form state after showing success message
      setTimeout(() => {
        setFormState('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-[5%] bottom-[10%] w-[30%] h-[40%] rounded-full bg-accent/30 blur-[100px] dark:bg-accent/10" aria-hidden="true" />
      </div>
      
      <div className="section-container">
        <h2 className={`section-title transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Get In Touch
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className={`lg:w-5/12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="space-y-8">
                <p className="text-lg text-foreground/80">
                  Let's connect to discuss how we can work together on your next project, 
                  whether it's web development, AI automation, or technical collaboration.
                </p>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent text-foreground flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <a 
                        href="mailto:vamshikrishna8330@gmail.com" 
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        vamshikrishna8330@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent text-foreground flex-shrink-0">
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Social Media</h3>
                      <div className="flex gap-4 mt-2">
                        <a 
                          href="https://github.com/YVK49" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="p-2 bg-background rounded-full hover:bg-foreground hover:text-background transition-colors"
                          aria-label="GitHub"
                        >
                          <Github size={18} />
                        </a>
                        <a 
                          href="https://www.linkedin.com/in/vamshiyamsani/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="p-2 bg-background rounded-full hover:bg-foreground hover:text-background transition-colors"
                          aria-label="LinkedIn"
                        >
                          <Linkedin size={18} />
                        </a>
                        <a 
                          href="#" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="p-2 bg-background rounded-full hover:bg-foreground hover:text-background transition-colors"
                          aria-label="YouTube"
                        >
                          <Youtube size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 glass-card rounded-xl border border-border/50">
                  <h3 className="font-medium mb-3">Looking for a speaker?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    I'm available for speaking engagements on topics related to web development, AI automation, and tech education.
                  </p>
                  <a 
                    href="mailto:vamshikrishna8330@gmail.com" 
                    className="inline-flex items-center text-foreground font-medium hover:underline"
                  >
                    Get in touch
                    <Send size={14} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className={`lg:w-7/12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="glass-card p-6 sm:p-8 rounded-xl border border-border/50">
                <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                      placeholder="I'd like to discuss a project..."
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 flex justify-center items-center
                      ${formState === 'submitting' ? 'bg-primary/80 cursor-wait' : 'bg-primary hover:bg-primary/90'} 
                      text-primary-foreground`}
                  >
                    {formState === 'submitting' ? (
                      <span className="inline-flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : formState === 'success' ? (
                      <span className="inline-flex items-center">
                        Message Sent Successfully!
                      </span>
                    ) : (
                      <span className="inline-flex items-center">
                        Send Message
                        <Send size={16} className="ml-2" />
                      </span>
                    )}
                  </button>
                  
                  {formState === 'error' && (
                    <div className="text-destructive text-sm mt-2">
                      There was an error sending your message. Please try again.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
