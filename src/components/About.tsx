import React from 'react';
import { Mail, Linkedin, User, Award, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import profilePhoto from '@/assets/profile-photo.webp';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Sobre Mim
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Analista de dados especializado em transformar dados complexos em insights estratégicos através do Power BI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 items-center">
            {/* Profile Image */}
            <div className="text-center">
              <div className="w-64 h-64 mx-auto mb-6 rounded-full bg-gradient-primary overflow-hidden shadow-large">
                <img
                  src={profilePhoto}
                  alt="Foto do perfil profissional"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                Seu Nome
              </h3>
              <p className="text-muted-foreground mb-4">
                Analista de Dados Senior
              </p>
              <div className="flex justify-center space-x-4">
                <Button variant="outline" size="icon">
                  <Mail className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="md:col-span-2">
              <Card className="shadow-medium">
                <CardContent className="p-8">
                  <h4 className="text-2xl font-bold text-primary mb-6">
                    Resumo Profissional
                  </h4>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    Com mais de 5 anos de experiência em análise de dados, especializo-me na criação de dashboards interativos e relatórios estratégicos utilizando Power BI. Minha paixão está em transformar dados complexos em visualizações claras e insights acionáveis que impulsionam a tomada de decisões empresariais.
                  </p>
                  
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className="text-center p-4 rounded-lg bg-gradient-secondary">
                      <User className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary">50+</div>
                      <div className="text-sm text-muted-foreground">Projetos</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-gradient-secondary">
                      <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary">5+</div>
                      <div className="text-sm text-muted-foreground">Anos Exp.</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-gradient-secondary">
                      <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary">15+</div>
                      <div className="text-sm text-muted-foreground">Empresas</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <Card className="max-w-md mx-auto shadow-medium">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-primary mb-4">Contato</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-3 text-muted-foreground">
                    <Mail className="w-5 h-5" />
                    <span>seu.email@exemplo.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-muted-foreground">
                    <Linkedin className="w-5 h-5" />
                    <span>linkedin.com/in/seulinkedin</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;