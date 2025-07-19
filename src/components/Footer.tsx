import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Gourav Rajput
              </span>
            </h3>
            <p className="text-background/80 leading-relaxed">
              Aspiring Data Analyst passionate about transforming raw data into meaningful stories 
              that drive business decisions and create value.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-background">Quick Links</h4>
            <ul className="space-y-2">
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
                    className="text-background/80 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Summary */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-background">Services</h4>
            <ul className="space-y-2 text-background/80">
              <li>• Data Analysis Consulting</li>
              <li>• Web Scraping & Processing</li>
              <li>• Machine Learning Solutions</li>
              <li>• Dashboard & Visualization</li>
            </ul>
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
              className="flex items-center gap-2 text-background/80 hover:text-blue-400 transition-colors duration-200 group"
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