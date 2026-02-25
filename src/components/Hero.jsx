import React from 'react';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../mock';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Disponível para novos projetos</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in-up animation-delay-200">
            Olá, sou <br />
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl text-gray-500 mb-4 animate-slide-up-delay"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            {personalInfo.title} • {personalInfo.subtitle}
          </p>

          {/* Description */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-600">
            {personalInfo.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-800">
            <Button
              onClick={() => scrollToSection('#projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              Ver Projetos
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollToSection('#contact')}
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 group"
            >
              <Download className="mr-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              Entrar em Contato
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-20 animate-bounce">
            <div className="w-6 h-10 border-2 border-blue-600 rounded-full mx-auto flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-blue-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
