import React from 'react';
import { Code2, Smartphone, Palette, Database, Zap, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { personalInfo, skills } from '../mock';

const About = () => {
  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Desenvolvimento Web",
      description: "Sites e aplicações web modernas, responsivas e otimizadas."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Apps Mobile",
      description: "Aplicativos nativos e híbridos para iOS e Android."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Interfaces intuitivas e experiências de usuário memoráveis."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Firebase & Backend",
      description: "Desenvolvimento de backends escaláveis com Firebase, autenticação, Firestore, Cloud Functions e integrações via API."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Otimização de velocidade e desempenho de aplicações."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Consultoria",
      description: "Orientação técnica e estratégica para seus projetos."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Sobre <span className="text-blue-600">Mim</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            {personalInfo.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-blue-600 cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Habilidades <span className="text-blue-600">Técnicas</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">{skill.name}</span>
                  <span className="text-sm font-medium text-blue-600">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-blue-800 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
