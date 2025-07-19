import { useState } from 'react';
import { Phone, Mail, Linkedin, Github, Send, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7489169600',
      href: 'tel:+917489169600'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'Gouravr367@gmail.com',
      href: 'mailto:Gouravr367@gmail.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://linkedin.com/in/gourav-rajput'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View my code',
      href: 'https://github.com/gourav-rajput'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent-purple mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Ready to transform your data into actionable insights? 
            Let's discuss how we can work together to unlock your data's potential.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="card-professional p-8">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full border-border/50 focus:border-primary focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full border-border/50 focus:border-primary focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or how I can help..."
                    rows={5}
                    className="w-full border-border/50 focus:border-primary focus:ring-primary/20 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent-purple hover:from-primary-hover hover:to-accent-purple text-white font-semibold py-3 rounded-lg shadow-lg hover-lift"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-slide-up">
            <div className="card-professional p-8">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-300 group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-purple rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-white" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {info.label}
                        </h4>
                        <p className="text-muted-foreground text-sm">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Additional Info */}
              <div className="pt-6 border-t border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-primary" size={20} />
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground text-sm">Available for remote work worldwide</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-primary/10 to-accent-purple/10 rounded-lg p-4 border border-primary/20">
                  <p className="text-sm text-foreground/80 text-center">
                    <span className="font-semibold">Response Time:</span> Usually within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;