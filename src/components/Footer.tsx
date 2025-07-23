import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-foreground via-foreground to-muted-foreground text-background py-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,hsl(var(--primary))_0%,transparent_50%)] opacity-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,hsl(var(--accent-purple))_0%,transparent_50%)] opacity-10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-2">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
                  Gourav Rajput
                </span>
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            </div>
            <p className="text-background/80 leading-relaxed mb-6">
              Aspiring Data Analyst passionate about transforming raw data into meaningful stories 
              that drive business decisions and create value.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { href: 'https://www.linkedin.com/in/gourav-rajput-b2748222', label: 'LinkedIn', icon: 'in' },
                { href: 'https://github.com/gouravo8', label: 'GitHub', icon: 'gh' },
                { href: 'mailto:Gouravr367@gmail.com', label: 'Email', icon: '@' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`w-10 h-10 bg-gradient-to-br from-primary/20 to-accent-purple/20 backdrop-blur-sm border border-background/20 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    social.label === 'LinkedIn' || social.label === 'GitHub'
                      ? 'hover:scale-125 hover:bg-gradient-to-br hover:from-primary/40 hover:to-accent-purple/40 hover:shadow-xl hover:shadow-primary/30 hover:border-primary/40 hover:animate-pulse'
                      : 'hover:scale-110 hover:bg-gradient-to-br hover:from-primary/30 hover:to-accent-purple/30'
                  }`}
                  aria-label={social.label}
                >
                  <span className={`text-background font-bold text-sm transition-all duration-300 ${
                    social.label === 'LinkedIn' || social.label === 'GitHub'
                      ? 'hover:text-white hover:drop-shadow-lg'
                      : ''
                  }`}>{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-xl font-semibold mb-6 text-background flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: '#about', label: 'About Me' },
                { href: '#skills', label: 'Skills' },
                { href: '#services', label: 'Services' },
                { href: '#projects', label: 'Projects' },
                { href: '#contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-background/40 rounded-full group-hover:bg-blue-400 transition-colors duration-200"></div>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Summary */}
          <div className="md:col-span-1">
            <h4 className="text-xl font-semibold mb-6 text-background flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              Services
            </h4>
            <ul className="space-y-3 text-background/80">
              {[
                'Data Analysis Consulting',
                'Web Scraping & Processing', 
                'Machine Learning Solutions',
                'Dashboard & Visualization'
              ].map((service) => (
                <li key={service} className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                  {service}
                </li>
              ))}
            </ul>
            
            {/* CTA */}
            <div className="mt-6 p-4 bg-gradient-to-r from-primary/20 to-accent-purple/20 backdrop-blur-sm border border-background/20 rounded-lg">
              <p className="text-sm text-background/90 text-center">
                <span className="font-semibold">Ready to start?</span><br/>
                Let's discuss your project
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-background/60 mb-4 md:mb-0">
              <span>© 2024 Gourav Rajput. Made with</span>
              <Heart className="text-red-400" size={16} fill="currentColor" />
              <span>and data.</span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-accent-purple/20 backdrop-blur-sm border border-background/20 rounded-lg text-background/80 hover:text-blue-400 hover:bg-gradient-to-r hover:from-primary/30 hover:to-accent-purple/30 transition-all duration-300 group"
            >
              <span>Back to top</span>
              <ArrowUp 
                size={16} 
                className="group-hover:translate-y-[-2px] transition-transform duration-200" 
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;