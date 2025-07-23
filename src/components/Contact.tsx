import { useState } from 'react';
import { Phone, Mail, Linkedin, Github, Send, MapPin, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
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

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_akfpg6u', // Service ID
        'template_k5o8svq', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Gourav', // Your name
        },
        '4H45987s6JRKFdRbI' // Public Key
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
      href: 'https://www.linkedin.com/in/gourav-rajput-b2748222'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View my code',
      href: 'https://github.com/gouravo8'
    }
  ];

  return (
    <section id="contact" className="relative section-padding bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-purple/5"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-accent-purple/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container-max relative z-10">
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
            <div className="card-professional p-8 relative">
              {/* Floating accent */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary/20 to-accent-purple/20 rounded-full blur-xl"></div>
              
              <h3 className="text-2xl font-semibold mb-6 gradient-text flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent-purple rounded-full"></div>
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <label htmlFor="name" className="block text-sm font-medium text-foreground">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    disabled={isSubmitting}
                    className="w-full border-border/50 focus:border-primary focus:ring-primary/20 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 disabled:opacity-50"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    disabled={isSubmitting}
                    className="w-full border-border/50 focus:border-primary focus:ring-primary/20 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 disabled:opacity-50"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or how I can help..."
                    rows={5}
                    disabled={isSubmitting}
                    className="w-full border-border/50 focus:border-primary focus:ring-primary/20 resize-none bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 disabled:opacity-50"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-accent-purple hover:from-primary-hover hover:to-accent-purple text-white font-semibold py-4 rounded-xl shadow-xl hover-lift border-0 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="mr-2 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              {/* Response Time Indicator */}
              <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-accent-purple/10 rounded-lg border border-primary/20">
                <p className="text-sm text-foreground/80 text-center">
                  <span className="font-semibold">⚡ Quick Response:</span> Usually within 24 hours
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-slide-up">
            <div className="card-professional p-8 relative">
              {/* Floating accent */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-accent-purple/20 to-primary/20 rounded-full blur-xl"></div>
              
              <h3 className="text-2xl font-semibold mb-6 gradient-text flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-accent-purple to-primary rounded-full"></div>
                Contact Information
              </h3>
              
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      target={info.label === 'LinkedIn' || info.label === 'GitHub' ? '_blank' : undefined}
                      rel={info.label === 'LinkedIn' || info.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                      className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group border border-transparent ${
                        info.label === 'LinkedIn' || info.label === 'GitHub'
                          ? 'hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent-purple/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/20'
                          : 'hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent hover:border-primary/20'
                      }`}
                    >
                      <div className={`w-14 h-14 bg-gradient-to-br from-primary to-accent-purple rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg ${
                        info.label === 'LinkedIn' || info.label === 'GitHub'
                          ? 'group-hover:scale-125 group-hover:shadow-2xl group-hover:shadow-primary/40 group-hover:animate-pulse group-hover:border-2 group-hover:border-primary/30'
                          : 'group-hover:scale-110'
                      }`}>
                        <Icon className={`text-white transition-all duration-300 ${
                          info.label === 'LinkedIn' || info.label === 'GitHub'
                            ? 'group-hover:scale-110 group-hover:drop-shadow-lg'
                            : ''
                        }`} size={22} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors text-lg">
                          {info.label}
                        </h4>
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{info.value}</p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Location & Availability */}
              <div className="space-y-4 pt-6 border-t border-border/30">
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-muted/50 to-transparent rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location & Availability</h4>
                    <p className="text-muted-foreground text-sm">Remote work worldwide • Available for projects</p>
                  </div>
                </div>
                
                {/* Status Indicators */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
                    <div className="text-sm font-medium text-green-700">Available</div>
                    <div className="text-xs text-green-600">for new projects</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto mb-2"></div>
                    <div className="text-sm font-medium text-blue-700">Response</div>
                    <div className="text-xs text-blue-600">within 24hrs</div>
                  </div>
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
