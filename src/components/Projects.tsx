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
      title: "RELATÓRIO GERENCIAL DO SETOR COMERCIAL",
      description: "Painel gerencial que centraliza indicadores essenciais do setor comercial, incluindo análise de vendas, desempenho por equipe e resultados comparativos por período. Facilita o acompanhamento da performance comercial, identificação de oportunidades e tomada de decisão baseada em dados confiáveis.",
      image: "https://github.com/paulomulato/Imagens-power-bi/raw/main/Dashboard%20Comercial.png",
      powerBiUrl: "https://app.powerbi.com/view?r=eyJrIjoiMjE2ZTlhMTUtNDI2OC00NzcxLTgyZTUtM2RhZTc0ZDgxNDc4IiwidCI6IjE1MWU4NmE5LWMzMTUtNDVkMC05NmZlLWJjZDA4Y2M1YjYyMSJ9",
      category: "Comercial",
      icon: <DollarSign className="w-5 h-5" />
    },
    {
      id: 2,
      title: "BASKET ANALYSIS",
      description: "Análise detalhada das combinações de produtos adquiridos pelos clientes, identificando padrões de compra conjunta. Este relatório auxilia na criação de estratégias de venda cruzada, otimização de layout em lojas físicas, personalização de recomendações em e-commerce e desenvolvimento de campanhas promocionais focadas na maximização do ticket médio.",
      image: "https://github.com/paulomulato/Imagens-power-bi/raw/main/Basket%20Analysis.PNG",
      powerBiUrl: "https://app.powerbi.com/view?r=eyJrIjoiMzI5Nzk2ODItNGQ0YS00OGFlLTkxZWItN2NmMTliMGJiMTQ0IiwidCI6IjE1MWU4NmE5LWMzMTUtNDVkMC05NmZlLWJjZDA4Y2M1YjYyMSJ9&pageName=ReportSectionef15368fdda80506007d",
      category: "Marketing",
      icon: <Package className="w-5 h-5" />
    },
    {
      id: 3,
      title: "COHORT ANALYSIS",
      description: "Este dashboard permite o acompanhamento longitudinal de grupos de clientes (coortes) definidos por características temporais, como data de aquisição. A análise possibilita avaliar o comportamento, retenção e engajamento dessas coortes ao longo do tempo, fornecendo insights valiosos para aprimorar estratégias de marketing e fidelização.",
      image: "https://github.com/paulomulato/Imagens-power-bi/raw/main/Cohort%20Analysis.png",
      powerBiUrl: "https://app.powerbi.com/view?r=eyJrIjoiM2E2YmM0MDAtYTU5Zi00MWE0LWE0ZGEtMDI2ZWQxNzJlODc0IiwidCI6IjE1MWU4NmE5LWMzMTUtNDVkMC05NmZlLWJjZDA4Y2M1YjYyMSJ9&pageName=ReportSection537282f132260d45b987",
      category: "Retenção",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      id: 4,
      title: "CUSTOMER SEGMENTATION",
      description: "Painel focado na segmentação de clientes baseado em indicadores como frequência de compra, valor monetário e tempo de inatividade. O Customer Health Score (CHS) oferece uma visão consolidada da saúde da base de clientes, possibilitando identificar contas em risco, orientar ações corretivas e maximizar o valor do ciclo de vida do cliente.",
      image: "https://github.com/paulomulato/Imagens-power-bi/raw/main/Customer%20Segmentation.png",
      powerBiUrl: "https://app.powerbi.com/view?r=eyJrIjoiNjVlYzVmZjYtMGQ2ZS00MTEwLWJmMzktNWViZDYyY2IwNDA5IiwidCI6IjE1MWU4NmE5LWMzMTUtNDVkMC05NmZlLWJjZDA4Y2M1YjYyMSJ9&pageName=ReportSection537282f132260d45b987",
      category: "Segmentação",
      icon: <Users className="w-5 h-5" />
    },
    {
      id: 5,
      title: "PARETO ANALYSIS",
      description: "Este relatório aplica o princípio de Pareto para identificar os principais fatores que impactam os resultados do negócio. Com base na análise 80/20, é possível concentrar esforços nos poucos produtos, clientes ou atividades que geram a maior parte do faturamento ou lucro, otimizando recursos e estratégias.",
      image: "https://github.com/paulomulato/Imagens-power-bi/raw/main/Pareto%20Analysis.PNG",
      powerBiUrl: "https://app.powerbi.com/view?r=eyJrIjoiY2ZlNzFiM2YtODhjMC00ZDJlLWE5MmEtNjI2ODFkMGI2ODBkIiwidCI6ImJhMTRlOGIzLWQ2NjctNDMyYy04Y2E5LThjNzcyNzBkN2UzNyJ9",
      category: "Análise",
      icon: <BarChart3 className="w-5 h-5" />
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