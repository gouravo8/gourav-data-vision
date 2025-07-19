import { GraduationCap, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative section-padding bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent-purple/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container-max relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent-purple mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Biography */}
          <div className="animate-slide-up">
            <div className="card-professional p-8 relative">
              {/* Floating accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent-purple/20 rounded-full blur-xl"></div>
              
              <h3 className="text-2xl font-semibold mb-6 gradient-text flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent-purple rounded-full"></div>
                My Journey
              </h3>
              
              <div className="space-y-6">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Driven by an insatiable curiosity and a passion for extracting meaningful narratives from raw data, 
                  I am an aspiring Data Analyst. My expertise lies in transforming complex datasets into clear, 
                  actionable insights, leveraging a robust skill set in{' '}
                  <span className="font-semibold text-primary bg-primary/10 px-2 py-1 rounded-md">Python</span>,{' '}
                  <span className="font-semibold text-primary bg-primary/10 px-2 py-1 rounded-md">SQL</span>, and{' '}
                  <span className="font-semibold text-primary bg-primary/10 px-2 py-1 rounded-md">Power BI</span>.
                </p>
                
                <p className="text-lg text-foreground/80 leading-relaxed">
                  I excel at uncovering patterns, trends, and opportunities that drive informed decision-making. 
                  My approach combines technical proficiency with strategic thinking, ensuring that every analysis 
                  not only answers questions but also reveals new possibilities for growth and optimization.
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border/30">
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">6+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">3+</div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">2024</div>
                    <div className="text-sm text-muted-foreground">Graduate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="animate-slide-up">
            <div className="card-professional p-8 relative">
              {/* Floating accent */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-accent-purple/20 to-primary/20 rounded-full blur-xl"></div>
              
              <h3 className="text-2xl font-semibold mb-6 gradient-text flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-accent-purple to-primary rounded-full"></div>
                Education
              </h3>
              
              <div className="space-y-8">
                {/* PGDM */}
                <div className="flex gap-4 relative">
                  <div className="flex-shrink-0 relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent-purple rounded-xl flex items-center justify-center shadow-lg">
                      <GraduationCap className="text-white" size={24} />
                    </div>
                    {/* Connection line */}
                    <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-primary/30 to-transparent"></div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gradient-to-r from-primary/5 to-transparent p-4 rounded-lg border-l-4 border-primary">
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        PGDM in Big Data Analytics
                      </h4>
                      <p className="text-primary font-medium mb-2">
                        Adani Institute of Digital Technology Management
                      </p>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar size={16} className="mr-2" />
                        <span>Expected July 2024</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* B.Com */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-accent-purple to-primary rounded-xl flex items-center justify-center shadow-lg">
                      <GraduationCap className="text-white" size={24} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gradient-to-r from-accent-purple/5 to-transparent p-4 rounded-lg border-l-4 border-accent-purple">
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        Bachelor of Commerce (B.Com)
                      </h4>
                      <p className="text-accent-purple font-medium mb-2">
                        Barkatullah University
                      </p>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar size={16} className="mr-2" />
                        <span>April 2023</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="mt-8 pt-6 border-t border-border/30">
                <h4 className="text-lg font-semibold mb-4 text-foreground">Key Achievements</h4>
                <div className="space-y-2">
                  {['Specialized in Big Data Analytics', 'Strong Academic Foundation in Commerce', 'Hands-on Project Experience'].map((achievement, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent-purple rounded-full mr-3"></div>
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;