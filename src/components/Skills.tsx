import { useState, useEffect, useRef } from 'react';
import { Code, Database, BarChart3, MessageSquare, Users, Lightbulb } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const technicalSkills = [
    { name: 'Python', level: 90, icon: Code },
    { name: 'SQL', level: 85, icon: Database },
    { name: 'Power BI', level: 88, icon: BarChart3 },
    { name: 'Microsoft Excel', level: 82, icon: BarChart3 },
    { name: 'Matplotlib', level: 75, icon: BarChart3 },
    { name: 'Seaborn', level: 75, icon: BarChart3 },
  ];

  const softSkills = [
    { name: 'Communication', level: 85, icon: MessageSquare },
    { name: 'Teamwork', level: 90, icon: Users },
    { name: 'Problem Solving', level: 88, icon: Lightbulb },
  ];

  const SkillBar = ({ skill, index, isVisible }: { skill: any; index: number; isVisible: boolean }) => {
    const Icon = skill.icon;
    
    return (
      <div className="mb-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent-purple rounded-lg flex items-center justify-center">
              <Icon className="text-white" size={16} />
            </div>
            <span className="font-semibold text-foreground">{skill.name}</span>
          </div>
          <span className="text-sm text-muted-foreground font-medium">{skill.level}%</span>
        </div>
        <div className="skill-bar">
          <div
            className={`skill-progress ${isVisible ? 'w-full' : 'w-0'}`}
            style={{
              width: isVisible ? `${skill.level}%` : '0%',
              transitionDelay: `${index * 0.2}s`
            }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="section-padding bg-muted/30" ref={sectionRef}>
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent-purple mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit for data analysis and visualization, 
            combining technical expertise with essential soft skills.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="card-professional p-8">
            <h3 className="text-2xl font-semibold mb-8 gradient-text flex items-center gap-3">
              <Code className="text-primary" size={28} />
              Technical Skills
            </h3>
            {technicalSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} isVisible={isVisible} />
            ))}
          </div>

          {/* Soft Skills */}
          <div className="card-professional p-8">
            <h3 className="text-2xl font-semibold mb-8 gradient-text flex items-center gap-3">
              <Users className="text-accent-purple" size={28} />
              Soft Skills
            </h3>
            {softSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index + technicalSkills.length} isVisible={isVisible} />
            ))}

            {/* Additional Skills */}
            <div className="mt-8 pt-6 border-t border-border/50">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Additional Expertise</h4>
              <div className="flex flex-wrap gap-3">
                {['Data Visualization', 'Statistical Analysis', 'Machine Learning', 'Web Scraping', 'Dashboard Development'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gradient-to-r from-primary/10 to-accent-purple/10 text-primary border border-primary/20 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;