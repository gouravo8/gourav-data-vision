import { BarChart3, Download, Brain, PieChart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: 'Data Analysis Consulting',
      description: 'Transform your raw data into actionable insights with comprehensive analysis and strategic recommendations.',
      features: ['Statistical Analysis', 'Trend Identification', 'Business Intelligence', 'Data-driven Recommendations']
    },
    {
      icon: Download,
      title: 'Web Scraping & Data Processing',
      description: 'Automated data collection and processing solutions to gather valuable information from various sources.',
      features: ['Automated Web Scraping', 'Data Cleaning', 'ETL Processes', 'Real-time Data Collection']
    },
    {
      icon: Brain,
      title: 'Machine Learning Model Development',
      description: 'Build and deploy predictive models to forecast trends and optimize business processes.',
      features: ['Predictive Modeling', 'Model Deployment', 'Performance Optimization', 'AWS Integration']
    },
    {
      icon: PieChart,
      title: 'Dashboard Creation & Visualization',
      description: 'Create interactive dashboards and compelling visualizations that tell your data story effectively.',
      features: ['Power BI Dashboards', 'Interactive Visualizations', 'Real-time Reporting', 'Custom Charts']
    }
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="gradient-text">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent-purple mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Comprehensive data solutions to help businesses make informed decisions 
            and unlock the potential hidden in their data.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="card-professional p-8 animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent-purple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-white" size={32} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-foreground/80"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent-purple rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover effect indicator */}
                <div className="mt-6 pt-4 border-t border-border/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm text-primary font-medium">
                    Let's discuss your project →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;