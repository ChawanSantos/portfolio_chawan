// Mock data for portfolio - Replace with your actual information

import lojaImg from "../src/img/img_e-commerce.png";
import appMobile from "../src/img/app-bilhetagem.png";
import aplicacaoWeb from "../src/img/aplicacao-web.png";
import LandingPage from "../src/img/landing-page.png";
import SistemaGestao from "../src/img/sistema-gestão.png";
import appBarberShop from "../src/img/app-mobile-barber.png";

export const personalInfo = {
  name: "Chawan Leal",
  title: "Developer",
  subtitle: "Analista e Desenvolvedor de Sistemas",
  email: "chawanleal.dev@gmail.com",
  location: "Vila Velha, Brasil",
  bio: "Desenvolvedor apaixonado por criar experiências digitais incríveis. Especializado em desenvolvimento web e mobile com foco em soluções inovadoras e interfaces modernas.",
  description:
    "Formado em Análise e Desenvolvimento de Sistemas, atuo no desenvolvimento de aplicações web e mobile, desde a concepção até a entrega. Tenho foco em performance, escalabilidade e experiência do usuário, sempre buscando transformar desafios de negócio em soluções digitais eficientes e inovadoras.",
  resumeUrl: "#",
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/chawan-dos-santos-leal-6760642ab/",
  github: "https://github.com/ChawanSantos",
  instagram: "https://www.instagram.com/chawan.santos/",
};

export const skills = [
  { name: "React", level: 95 },
  { name: "React Native", level: 90 },
  { name: "Expo", level: 88 },
  { name: "Firebase", level: 85 },
  { name: "Figma", level: 92 },
  { name: "WordPress", level: 87 },
  { name: "JavaScript", level: 95 },
  { name: "Node.js", level: 85 },
  { name: "TypeScript", level: 88 },
  { name: "Tailwind CSS", level: 93 },
];

export const projects = [
  {
    id: 1,
    title: "Loja Virtual - WordPress",
    description: "Loja Virtual de Brechó - Sustentabilidade.",
    image: lojaImg,
    technologies: ["Wordpress", "Elementor", "PHP"],
    category: "Web",
    // demoUrl: "https://brechoeukero.com.br/",
    // githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "App Mobile - Gestão De Bilhetagem Eletronica",
    description:
      "Aplicativo mobile para gerenciamento de bilhetagem eletronica - app completo(notificação, relatórios, relatório de jornada, funcionamento do app sem internet, etc.).",
    image: appMobile,
    technologies: ["React Native", "Expo", "Firebase"],
    category: "Mobile",
    // demoUrl: "#",
    // githubUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Aplicação Web",
    description: "Site de moveis planejados com painel administrativo.",
    image: aplicacaoWeb,
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    category: "Web",
    // demoUrl: "#",
    // githubUrl: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Landing Page Corporativa CEO",
    description: "landing page corporativa CEO.",
    image: LandingPage,
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    category: "Web",
    // demoUrl: "#",
    // githubUrl: "#",
    featured: true,
  },
  {
    id: 5,
    title: "Sistema de Gestão",
    description:
      "Sistema completo de gestão - Dashboard, Clientes, Orçamentos, Pedidos, Estoque, Financeiro, Funcionários.",
    image: SistemaGestao,
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    category: "Web",
    // demoUrl: "#",
    // githubUrl: "#",
    featured: true,
  },
  {
    id: 6,
    title: "Aplicativo BarberPro - Gestão de Barbearia",
    description:
      "Dashboard, Gestão de Barbeiros, Gestão de Serviços, Agendamentos, Controle Financeiro.",
    image: appBarberShop,
    technologies: ["Expo", "Firebase", "React Native"],
    category: "Mobile",
    // demoUrl: "#",
    // githubUrl: "#",
    featured: true,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Maria Santos",
    role: "CEO, TechStart",
    content:
      "Trabalho excepcional! Entregou um produto além das expectativas, com qualidade impecável.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Carlos Oliveira",
    role: "Founder, Digital Hub",
    content:
      "Profissional extremamente competente. Cumpriu todos os prazos e entregou um sistema robusto.",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Ana Costa",
    role: "CTO, StartupXYZ",
    content:
      "Excelente comunicação e habilidades técnicas. Recomendo fortemente!",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];
