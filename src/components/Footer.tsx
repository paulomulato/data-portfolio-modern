import React from 'react';
import { Button } from './ui/button';
import { Mail, Linkedin, Github, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand & Description */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Portfolio Power BI</h3>
              <p className="text-white/80 mb-6 max-w-md">
                Especializado em transformar dados complexos em insights estratégicos através de dashboards interativos e análises avançadas no Power BI.
              </p>
              <p className="text-white/60 text-sm">
                Pronto para impulsionar seu negócio com análise de dados de qualidade.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/80 hover:text-white transition-smooth"
                  >
                    Início
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/80 hover:text-white transition-smooth"
                  >
                    Sobre Mim
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/80 hover:text-white transition-smooth"
                  >
                    Projetos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/80 hover:text-white transition-smooth"
                  >
                    Contato
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-white/80">
                <p>seu.email@exemplo.com</p>
                <p>+55 (11) 99999-9999</p>
                <p>São Paulo, SP</p>
              </div>
            </div>
          </div>

          {/* Social Media & Bottom */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Social Media Icons */}
              <div className="flex items-center space-x-4">
                <p className="text-white/60 mr-4">Siga-me:</p>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white/80 hover:text-white hover:bg-white/10"
                  onClick={() => window.open('mailto:seu.email@exemplo.com', '_blank')}
                >
                  <Mail className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white/80 hover:text-white hover:bg-white/10"
                  onClick={() => window.open('https://linkedin.com/in/seulinkedin', '_blank')}
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white/80 hover:text-white hover:bg-white/10"
                  onClick={() => window.open('https://github.com/seugithub', '_blank')}
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white/80 hover:text-white hover:bg-white/10"
                  onClick={() => window.open('https://instagram.com/seuinstagram', '_blank')}
                >
                  <Instagram className="w-5 h-5" />
                </Button>
              </div>

              {/* Back to Top Button */}
              <Button
                variant="ghost"
                onClick={scrollToTop}
                className="text-white/80 hover:text-white hover:bg-white/10"
              >
                <ArrowUp className="w-4 h-4 mr-2" />
                Voltar ao Topo
              </Button>
            </div>

            {/* Copyright */}
            <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/60">
              <p>
                © {currentYear} Portfolio Power BI. Todos os direitos reservados.
              </p>
              <p className="mt-2 text-sm">
                Desenvolvido com React, TypeScript e Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;