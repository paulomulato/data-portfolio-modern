import React from 'react';
import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.85), rgba(30, 58, 138, 0.85)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary-light/20 to-transparent rounded-full"></div>
      <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-primary-light/20 to-transparent rounded-full"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Portfólio
            <span className="block text-primary-light">Power BI</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Dashboards interativos e análises de dados que transformam informações em insights estratégicos
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              variant="professional" 
              size="lg"
              onClick={scrollToProjects}
              className="text-lg px-8 py-3"
            >
              Ver Projetos
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-3 text-white border-white/30 hover:bg-white/10"
            >
              Sobre Mim
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;