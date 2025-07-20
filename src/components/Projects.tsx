import { ExternalLink, Github, TrendingUp, Database, BarChart3, Cpu, DollarSign, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Bombay Stock Exchange Analysis',
      description: 'Comprehensive market analysis with automated web scraping and interactive visualizations to track stock performance and market trends.',
      tools: ['Python', 'Web Scraping', 'Matplotlib', 'Pandas'],
      icon: TrendingUp,
      category: 'Financial Analysis',
      highlights: ['Automated Data Collection', 'Real-time Tracking', 'Interactive Charts'],
      githubUrl: 'https://github.com/gouravsinghbais/Bombay-Stock-Exchange-Analysis'
    },
    {
      title: 'Salary Prediction ML Model',
      description: 'Machine learning model deployed on AWS SageMaker to predict salaries based on various factors including experience, skills, and location.',
      tools: ['Python', 'Scikit-learn', 'AWS SageMaker', 'Machine Learning'],
      icon: DollarSign,
      category: 'Machine Learning',
      highlights: ['AWS Deployment', 'Predictive Analytics', '85% Accuracy'],
      githubUrl: 'https://github.com/gouravsinghbais/Salary-Prediction-ML-Model'
    },
    {
      title: 'Workforce Performance Dashboard',
      description: 'Power BI dashboard analyzing HR metrics including employee performance, retention rates, and productivity indicators.',
      tools: ['Power BI', 'SQL', 'HR Analytics', 'DAX'],
      icon: BarChart3,
      category: 'Business Intelligence',
      highlights: ['Interactive Dashboard', 'KPI Tracking', 'HR Insights'],
      githubUrl: 'https://github.com/gouravsinghbais/Workforce-Performance-Dashboard'
    },
    {
      title: 'Adidas Sales Dashboard',
      description: 'Comprehensive sales analysis dashboard tracking revenue trends, product performance, and regional sales patterns.',
      tools: ['Power BI', 'Excel', 'Data Modeling', 'SQL'],
      icon: TrendingUp,
      category: 'Sales Analytics',
      highlights: ['Sales Forecasting', 'Regional Analysis', 'Product Performance'],
      githubUrl: 'https://github.com/gouravsinghbais/Adidas-Sales-Dashboard'
    },
    {
      title: 'Investor Data Analysis',
      description: 'SQL and Python-based portfolio analysis system for investment tracking and performance evaluation.',
      tools: ['SQL', 'Python', 'Portfolio Analysis', 'Financial Modeling'],
      icon: Database,
      category: 'Financial Analytics',
      highlights: ['Portfolio Optimization', 'Risk Analysis', 'Performance Metrics'],
      githubUrl: 'https://github.com/gouravsinghbais/Investor-Data-Analysis'
    },
    {
      title: 'CropCareConnect Platform',
      description: 'Django web application with Tailwind CSS providing agricultural insights and crop management solutions.',
      tools: ['Django', 'Python', 'Tailwind CSS', 'Agriculture Analytics'],
      icon: Leaf,
      category: 'Web Development',
      highlights: ['Full-stack Development', 'Agricultural Insights', 'Responsive Design'],
      githubUrl: 'https://github.com/gouravsinghbais/CropCareConnect-Platform'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent-purple mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A showcase of data analysis projects demonstrating expertise in various domains 
            from financial markets to business intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="card-professional p-6 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-purple rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={20} />
                  </div>
                  <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">Key Features:</h4>
                  <div className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-accent-purple rounded-full mr-2"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-md font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 text-xs border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <ExternalLink size={14} className="mr-1" />
                    View Details
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 text-xs border-accent-purple/20 hover:bg-accent-purple hover:text-white transition-all duration-300"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github size={14} className="mr-1" />
                    Code
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more projects or discussing a collaboration?
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-accent-purple hover:from-primary-hover hover:to-accent-purple text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover-lift"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;