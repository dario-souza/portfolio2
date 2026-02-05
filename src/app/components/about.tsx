'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from './ui/card';
import { portfolioData } from '@/data/portfolio-data';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Sobre Mim</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça um pouco mais sobre minha jornada e paixão pelo desenvolvimento
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold mr-4">
                    DS
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{portfolioData.name}</h3>
                    <p className="text-muted-foreground">{portfolioData.title}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {portfolioData.about}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <span className="font-medium mr-2">📧 Email:</span>
                    <a 
                      href={`mailto:${portfolioData.email}`}
                      className="text-primary hover:underline"
                    >
                      {portfolioData.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <span className="font-medium mr-2">📍 Localização:</span>
                    <span className="text-muted-foreground">Brasil</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <span className="font-medium mr-2">🎯 Foco:</span>
                    <span className="text-muted-foreground">Desenvolvimento Frontend Moderno</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <div className="text-sm text-muted-foreground">Anos de Experiência</div>
                </CardContent>
              </Card>
              
              <Card className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Projetos Concluídos</div>
                </CardContent>
              </Card>
            </div>

            <Card className="p-6">
              <CardContent className="p-0">
                <h4 className="font-semibold mb-4">Principais Competências</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h4 className="font-semibold mb-4">O que me motiva</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A busca constante por conhecimento e a oportunidade de transformar ideias em realidade através do código. 
                  Adoro resolver problemas complexos e criar interfaces que encantam os usuários.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;