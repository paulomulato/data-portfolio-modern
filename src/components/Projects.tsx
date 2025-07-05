import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ExternalLink, BarChart3, TrendingUp, DollarSign, Users, Package, Eye } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  powerBiUrl: string;
  category: string;
  icon: React.ReactNode;
}

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

  const projects: Project[] = [
    {
      id: 1,
      title: "Análise de Vendas",
      description: "Dashboard interativo de desempenho comercial com análise de vendas por região, produto e período. Inclui KPIs principais e tendências.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      powerBiUrl: "https://app.powerbi.com/view?r=exemplo1",
      category: "Vendas",
      icon: <DollarSign className="w-5 h-5" />
    },
    {
      id: 2,
      title: "Dashboard Financeiro",
      description: "Análise financeira completa com fluxo de caixa, rentabilidade e indicadores de performance financeira em tempo real.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      powerBiUrl: "https://app.powerbi.com/view?r=exemplo2",
      category: "Finance",
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      id: 3,
      title: "Análise de RH",
      description: "Dashboard de recursos humanos com métricas de contratação, turnover, satisfação dos funcionários e análise de performance.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      powerBiUrl: "https://app.powerbi.com/view?r=exemplo3",
      category: "RH",
      icon: <Users className="w-5 h-5" />
    },
    {
      id: 4,
      title: "Supply Chain Analytics",
      description: "Análise da cadeia de suprimentos com controle de estoque, fornecedores, entregas e otimização de processos logísticos.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      powerBiUrl: "https://app.powerbi.com/view?r=exemplo4",
      category: "Logística",
      icon: <Package className="w-5 h-5" />
    },
    {
      id: 5,
      title: "Marketing Analytics",
      description: "Dashboard de marketing digital com análise de campanhas, ROI, conversões e comportamento do cliente em múltiplos canais.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      powerBiUrl: "https://app.powerbi.com/view?r=exemplo5",
      category: "Marketing",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      id: 6,
      title: "Customer Analytics",
      description: "Análise comportamental de clientes com segmentação, lifetime value, churn prediction e análise de satisfação.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      powerBiUrl: "https://app.powerbi.com/view?r=exemplo6",
      category: "Customer",
      icon: <Eye className="w-5 h-5" />
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = parseInt(entry.target.getAttribute('data-project-id') || '0');
            setVisibleProjects(prev => [...prev, projectId]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectElements = document.querySelectorAll('[data-project-id]');
    projectElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Meus Projetos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore uma seleção dos meus melhores dashboards Power BI, cada um projetado para resolver desafios específicos de negócio
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                data-project-id={project.id}
                className={`transition-all duration-700 ${
                  visibleProjects.includes(project.id)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Card className="group hover:shadow-large transition-smooth overflow-hidden h-full">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                        {project.icon}
                        <span>{project.category}</span>
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl text-primary group-hover:text-primary-light transition-smooth">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-muted-foreground mb-6 flex-1">
                      {project.description}
                    </p>

                    <Button
                      variant="hero"
                      className="w-full"
                      onClick={() => window.open(project.powerBiUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Dashboard
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;