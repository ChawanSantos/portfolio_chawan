import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import logoPortfolio from "../../src/img/logo-portfolio.png";

const Header = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            <img src={logoPortfolio} alt="Logo" width={100} />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-4 right-4 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            ))}
            <Button
              onClick={(e) => scrollToSection(e, '#contact')}
              className="ml-4 bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Fale Comigo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block py-3 text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button
              onClick={(e) => scrollToSection(e, '#contact')}
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white"
            >
              Fale Comigo
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
