import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { projects } from '../mock';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = ['All', 'Web', 'Mobile'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Meus <span className="text-blue-600">Projetos</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Confira alguns dos projetos que desenvolvi para clientes e empresas.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center gap-4 mb-12 flex-wrap">
          <Filter className="w-5 h-5 text-gray-500" />
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveFilter(category)}
              variant={activeFilter === category ? "default" : "outline"}
              className={`transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg scale-105'
                  : 'border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-blue-600 cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                    <Button
                      size="sm"
                      className="bg-white text-blue-600 hover:bg-blue-50 flex-1 transition-all duration-300 hover:scale-105"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver projeto
                    </Button>
                    <Button
                      size="sm"
                      className="bg-white text-blue-600 hover:bg-blue-50 flex-1 transition-all duration-300 hover:scale-105"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </Button>
                  </div>
                </div>
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Destaque
                  </div>
                )}
              </div>

              {/* Project Info */}
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Quer ver mais projetos ou discutir o seu próximo projeto?
          </p>
          <Button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Vamos Conversar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
