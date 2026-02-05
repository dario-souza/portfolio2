'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { portfolioData } from '@/data/portfolio-data';

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                DS
              </div>
              <div>
                <h3 className="font-semibold">{portfolioData.name}</h3>
                <p className="text-sm text-muted-foreground">{portfolioData.title}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Criando experiências web modernas e responsivas com as melhores tecnologias.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <nav className="space-y-2">
              {['#home', '#about', '#skills', '#projects', '#contact'].map((link) => (
                <a
                  key={link}
                  href={link}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link === '#home' ? 'Início' : 
                   link === '#about' ? 'Sobre' :
                   link === '#skills' ? 'Habilidades' :
                   link === '#projects' ? 'Projetos' : 'Contato'}
                </a>
              ))}
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Conecte-se</h4>
            <div className="flex gap-3">
              <a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${portfolioData.email}`}
                className="w-10 h-10 bg-background border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} {portfolioData.name}. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Feito com <Heart className="w-4 h-4 text-red-500 fill-current" /> por{' '}
            <span className="font-medium">{portfolioData.name}</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;