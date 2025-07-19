import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/gourav-profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Modern Background with Patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--primary))_0%,transparent_50%)] opacity-[0.15]"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent-purple/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-accent-purple/20 to-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container-max text-center relative z-10">
        <div className="animate-fade-in">
          {/* Enhanced Profile Section */}
          <div className="relative mx-auto mb-12 w-56 h-56">
            {/* Floating Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute inset-2 rounded-full border border-accent-purple/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
            
            {/* Profile Image */}
            <div className="relative mx-auto w-48 h-48 mt-4 rounded-full overflow-hidden shadow-2xl hover-glow bg-gradient-to-br from-primary/10 to-accent-purple/10 p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src={profileImage}
                  alt="Gourav Rajput - Data Analyst"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Floating Info Cards */}
          <div className="absolute left-8 top-1/3 hidden lg:block animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="card-professional p-4 max-w-xs">
              <div className="text-sm text-muted-foreground">Current Focus</div>
              <div className="font-semibold text-primary">Data Analytics</div>
            </div>
          </div>
          
          <div className="absolute right-8 top-2/3 hidden lg:block animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <div className="card-professional p-4 max-w-xs">
              <div className="text-sm text-muted-foreground">Expertise</div>
              <div className="font-semibold text-primary">Python & SQL</div>
            </div>
          </div>

          {/* Enhanced Main Heading */}
          <div className="relative mb-8">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-4 animate-slide-up">
              <span className="text-foreground">Gourav</span>{' '}
              <span className="gradient-text relative">
                Rajput
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent-purple/20 blur-lg -z-10 rounded-lg"></div>
              </span>
            </h1>
            
            {/* Animated Subtitle with Modern Badge */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 animate-slide-up">
              <div className="bg-gradient-to-r from-primary to-accent-purple-light text-white px-6 py-2 rounded-full text-lg font-semibold shadow-lg">
                Aspiring Data Analyst
              </div>
              <div className="hidden sm:block w-8 h-px bg-gradient-to-r from-primary to-accent-purple"></div>
              <div className="text-lg text-muted-foreground font-medium">
                Python • SQL • Power BI
              </div>
            </div>
          </div>

          {/* Enhanced Tagline */}
          <div className="relative mb-16 animate-slide-up">
            <p className="text-xl sm:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed">
              <span className="font-medium gradient-text text-2xl sm:text-3xl">
                "Transforming raw data into meaningful stories"
              </span>
            </p>
            <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-primary to-accent-purple rounded-full"></div>
          </div>

          {/* Modern CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-scale-in">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary-hover text-white px-10 py-4 rounded-2xl font-semibold shadow-xl hover-lift border-0 text-lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <ArrowDown className="ml-2 rotate-[-90deg]" size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary px-10 py-4 rounded-2xl font-semibold hover-lift backdrop-blur-sm bg-white/50 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="relative">
            <div className="animate-bounce">
              <div className="mx-auto w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center cursor-pointer hover:border-primary transition-colors group" 
                   onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                <ArrowDown 
                  className="text-primary group-hover:translate-y-1 transition-transform"
                  size={20}
                />
              </div>
            </div>
            <div className="mt-2 text-sm text-muted-foreground font-medium">Discover More</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;