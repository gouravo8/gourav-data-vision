import { Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resume = () => {
  return (
    <section id="resume" className="section-padding bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent">
            Resume
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Download my resume to learn more about my experience, skills, and qualifications in data analysis and web development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild
              size="lg"
              className="group bg-gradient-to-r from-primary to-accent-purple hover:from-primary/90 hover:to-accent-purple/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a 
                href="https://tiiny.host/use-case/resume-link/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download Resume
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="group border-primary/30 hover:border-primary/50 hover:bg-primary/5"
            >
              <a 
                href="https://tiiny.host/use-case/resume-link/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
                View CV
              </a>
            </Button>
          </div>
          
          <div className="mt-6 text-sm text-foreground/60">
            <p>Last updated: December 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;