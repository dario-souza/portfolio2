'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '@/data/portfolio-data';

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const filteredProjects = portfolioData.projects.filter(project => 
    filter === 'all' ? true : project.featured
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Projetos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Alguns dos meus trabalhos mais recentes e desafiadores
          </p>

          <div className="flex justify-center gap-4">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
            >
              Todos
            </Button>
            <Button
              variant={filter === 'featured' ? 'default' : 'outline'}
              onClick={() => setFilter('featured')}
            >
              Destaques
            </Button>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              custom={index}
            >
              <Card className="h-full overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="p-0">
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-primary/20 rounded-lg flex items-center justify-center">
                        <div className="w-12 h-12 bg-primary/40 rounded" />
                      </div>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <Badge variant="default">Destaque</Badge>
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    {project.demoUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        asChild
                      >
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                    
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="w-4 h-4" />
                          Código
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filter === 'featured' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button
              variant="outline"
              onClick={() => setFilter('all')}
            >
              Ver todos os projetos
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;