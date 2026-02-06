'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import SkillBar from './ui/skill-bar';
import { portfolioData } from '@/data/portfolio-data';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillsByCategory = portfolioData.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof portfolioData.skills>);

  const categoryColors = {
    frontend: 'text-blue-600 dark:text-blue-400',
    backend: 'text-green-600 dark:text-green-400',
    database: 'text-orange-600 dark:text-orange-400',
    tools: 'text-purple-600 dark:text-purple-400'
  };

  const categoryLabels = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Banco de Dados',
    tools: 'Ferramentas'
  };

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
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Habilidades</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções web modernas
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {Object.entries(skillsByCategory).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              variants={itemVariants}
              custom={categoryIndex}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className={`flex items-center text-lg ${categoryColors[category as keyof typeof categoryColors]}`}>
                    <div className="w-2 h-2 bg-current rounded-full mr-2" />
                    {categoryLabels[category as keyof typeof categoryLabels]}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="divide-y divide-border">
                    {skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className="opacity-0 animate-fadeIn"
                        style={{
                          animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.1)}s`,
                          animationFillMode: 'forwards'
                        }}
                      >
                        <SkillBar
                          name={skill.name}
                          level={skill.level}
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Card className="inline-block p-6">
            <CardContent className="p-0">
              <div className="text-4xl font-bold text-primary mb-2">
                {portfolioData.skills.length}+
              </div>
              <div className="text-muted-foreground">
                Tecnologias e ferramentas dominadas
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;