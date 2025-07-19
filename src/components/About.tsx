import { GraduationCap, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent-purple mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Biography */}
          <div className="animate-slide-up">
            <div className="card-professional p-8">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">My Journey</h3>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Driven by an insatiable curiosity and a passion for extracting meaningful narratives from raw data, 
                I am an aspiring Data Analyst. My expertise lies in transforming complex datasets into clear, 
                actionable insights, leveraging a robust skill set in <span className="font-semibold text-primary">Python</span>, 
                <span className="font-semibold text-primary"> SQL</span>, and <span className="font-semibold text-primary">Power BI</span>.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I excel at uncovering patterns, trends, and opportunities that drive informed decision-making. 
                My approach combines technical proficiency with strategic thinking, ensuring that every analysis 
                not only answers questions but also reveals new possibilities for growth and optimization.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="animate-slide-up">
            <div className="card-professional p-8">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Education</h3>
              
              <div className="space-y-6">
                {/* PGDM */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-purple rounded-lg flex items-center justify-center">
                      <GraduationCap className="text-white" size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      PGDM in Big Data Analytics
                    </h4>
                    <p className="text-primary font-medium mb-1">
                      Adani Institute of Digital Technology Management
                    </p>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar size={16} className="mr-2" />
                      <span>Expected July 2024</span>
                    </div>
                  </div>
                </div>

                {/* B.Com */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-purple to-primary rounded-lg flex items-center justify-center">
                      <GraduationCap className="text-white" size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Bachelor of Commerce (B.Com)
                    </h4>
                    <p className="text-primary font-medium mb-1">
                      Barkatullah University
                    </p>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar size={16} className="mr-2" />
                      <span>April 2023</span>
                    </div>
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

export default About;