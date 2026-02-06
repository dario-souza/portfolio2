'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from './ui/button'
import { Download, Github, Linkedin, Mail } from 'lucide-react'
import { portfolioData } from '@/data/portfolio-data'
import Image from 'next/image'

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-block">
            <Image
              className="rounded-full"
              src="https://avatars.githubusercontent.com/dario-souza"
              alt="dario"
              width={200}
              height={200}
            />
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
        >
          Olá, eu sou <span className="text-primary">{portfolioData.name}</span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground mb-6"
        >
          {portfolioData.title}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          Criando experiências web modernas e responsivas com as melhores
          tecnologias do mercado.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <Button size="lg" className="group" asChild>
            <a href={portfolioData.cvUrl} download>
              <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Baixar CV
            </a>
          </Button>

          <Button variant="outline" size="lg" asChild>
            <a href="#projects">Ver Projetos</a>
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center"
        >
          <Button variant="ghost" size="icon" asChild>
            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <a href={`mailto:${portfolioData.email}`} aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
