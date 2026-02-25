import React from 'react';
import { Heart, ArrowUp, Linkedin, Github, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { socialLinks } from '../mock';
import logoPortfolio from "../../src/img/logo-portfolio.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' }
  ];

  const socialMedia = [
    { icon: <Linkedin className="w-5 h-5" />, url: socialLinks.linkedin, name: 'LinkedIn' },
    { icon: <Github className="w-5 h-5" />, url: socialLinks.github, name: 'GitHub' },
    { icon: <Instagram className="w-5 h-5" />, url: socialLinks.instagram, name: 'Instagram' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
              <img className='logoFooter' src={logoPortfolio} alt="Logo" width={100}/>
            </h3>
            <p className="text-gray-400 mb-6">
              Transformando ideias em soluções digitais inovadoras e impactantes.
            </p>
            {/* Social Media */}
            <div className="flex gap-3">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 inline-block hover:translate-x-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter or CTA */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Vamos Trabalhar Juntos?</h4>
            <p className="text-gray-400 mb-4">
              Entre em contato para discutir seu próximo projeto.
            </p>
            <Button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105"
            >
              Fale Comigo
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Todos os direitos reservados. Feito com{' '}
              <Heart className="w-4 h-4 inline text-red-500 animate-pulse" /> por Chawan Leal.
            </p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
