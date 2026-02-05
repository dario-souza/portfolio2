import { PortfolioData } from '@/types/portfolio'

export const portfolioData: PortfolioData = {
  name: 'Dario Souza',
  title: 'Desenvolvedor Frontend',
  email: 'dariosouzaletras@hotmail.com',
  cvUrl: '/dario-cv.pdf',
  about:
    'Desenvolvedor Frontend apaixonado por criar experiências web modernas e responsivas. Com sólidos conhecimentos em React, Next.js e TypeScript, busco transformar ideias em soluções digitais elegantes e funcionais.',
  skills: [
    { name: 'React', level: 85, category: 'frontend' },
    { name: 'Next.js', level: 80, category: 'frontend' },
    { name: 'TypeScript', level: 75, category: 'frontend' },
    { name: 'Tailwind CSS', level: 90, category: 'frontend' },
    { name: 'Node.js', level: 70, category: 'backend' },
    { name: 'MongoDB', level: 65, category: 'database' },
    { name: 'SQL', level: 60, category: 'database' },
    { name: 'Git', level: 85, category: 'tools' },
    { name: 'VS Code', level: 95, category: 'tools' },
    { name: 'Figma', level: 70, category: 'tools' },
  ],
  projects: [
    {
      id: 1,
      title: 'E-commerce Moderno',
      description:
        'Plataforma de e-commerce desenvolvida com Next.js, TypeScript e Stripe para pagamentos. Sistema completo de carrinho, autenticação e painel administrativo.',
      technologies: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Stripe',
        'MongoDB',
      ],
      image: '/projects/ecommerce.jpg',
      demoUrl: 'https://demo-ecommerce.dario.dev',
      githubUrl: 'https://github.com/dario/ecommerce',
      featured: true,
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      description:
        'Dashboard interativo para análise de dados em tempo real com gráficos dinâmicos, filtros avançados e exportação de relatórios.',
      technologies: [
        'React',
        'TypeScript',
        'Chart.js',
        'Node.js',
        'PostgreSQL',
      ],
      image: '/projects/dashboard.jpg',
      demoUrl: 'https://demo-dashboard.dario.dev',
      githubUrl: 'https://github.com/dario/dashboard',
      featured: true,
    },
    {
      id: 3,
      title: 'App de Tarefas',
      description:
        'Aplicativo de gerenciamento de tarefas com drag-and-drop, categorias, prioridades e sincronização em tempo real.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      image: '/projects/taskapp.jpg',
      demoUrl: 'https://demo-tasks.dario.dev',
      githubUrl: 'https://github.com/dario/task-app',
      featured: false,
    },
  ],
  social: {
    github: 'https://github.com/dario-souza',
    linkedin: 'https://linkedin.com/in/dario-souza/',
  },
}

export const navigationItems = [
  { href: '#home', label: 'Início' },
  { href: '#about', label: 'Sobre' },
  { href: '#skills', label: 'Habilidades' },
  { href: '#projects', label: 'Projetos' },
  { href: '#contact', label: 'Contato' },
]
