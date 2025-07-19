import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/gourav-profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-br from-background to-muted/30">
      <div className="container-max text-center">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="relative mx-auto mb-8 w-48 h-48 rounded-full overflow-hidden shadow-xl hover-glow">
            <img
              src={profileImage}
              alt="Gourav Rajput - Data Analyst"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-foreground">Gourav</span>{' '}
            <span className="gradient-text">Rajput</span>
          </h1>

          {/* Subtitle */}
          <div className="text-xl sm:text-2xl text-muted-foreground mb-4 animate-slide-up">
            <span className="text-primary font-semibold">Aspiring Data Analyst</span>
            <span className="mx-2">|</span>
            <span>Python • SQL • Power BI</span>
          </div>

          {/* Animated Tagline */}
          <p className="text-lg sm:text-xl text-foreground/80 mb-12 max-w-3xl mx-auto animate-slide-up">
            <span className="font-medium gradient-text">
              "Transforming raw data into meaningful stories."
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-scale-in">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 rounded-lg font-semibold shadow-lg hover-lift"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-semibold hover-lift"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown 
              className="mx-auto text-muted-foreground cursor-pointer hover:text-primary transition-colors"
              size={32}
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;