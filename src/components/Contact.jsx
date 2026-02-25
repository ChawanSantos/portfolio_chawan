import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { personalInfo, socialLinks } from '../mock';
import logoContact from "../../src/img/logo-portfolio.png";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefone",
      value: "+55 (11) 99999-9999",
      link: "tel:+5511999999999"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localização",
      value: personalInfo.location,
      link: null
    }
  ];

  const socialMedia = [
    { icon: <Linkedin className="w-6 h-6" />, name: 'LinkedIn', url: socialLinks.linkedin, color: 'hover:text-blue-700' },
    { icon: <Github className="w-6 h-6" />, name: 'GitHub', url: socialLinks.github, color: 'hover:text-gray-900' },
    { icon: <Instagram className="w-6 h-6" />, name: 'Instagram', url: socialLinks.instagram, color: 'hover:text-pink-600' }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Entre em <span className="text-blue-600">Contato</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Quer conversar sobre projetos, colaborações ou oportunidades? 
            Aqui estão as formas de me encontrar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-blue-600">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-blue-600 transition-colors break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.value}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Social Media */}
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Redes Sociais</h3>
                <div className="flex gap-4">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="lg:col-span-2 flex items-center justify-center">
            <Card className="border-2 hover:shadow-xl transition-shadow duration-300 w-full">
              <CardContent className="p-12 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vamos conversar!</h3>
                <p className="text-gray-600 mb-6">
                  Estou sempre aberto para novas ideias, colaborações e desafios. 
                  Clique nos links ao lado para me enviar uma mensagem ou conectar pelas redes sociais.
                </p>
                <img className='logoContact' src={logoContact} alt="Logo" width={100}/>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
