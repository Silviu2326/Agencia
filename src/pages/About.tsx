<<<<<<< HEAD
// src/pages/About.tsx

import React, { memo } from 'react';
=======
import React from 'react';
>>>>>>> origin/main
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Rocket, Zap, Brain, Coffee, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedHeroBackground from '../components/AnimatedHeroBackground';
<<<<<<< HEAD
import ValuesSection from '../components/ValuesSection';

// Variantes para las animaciones de entrada
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Componente memoizado para los miembros del equipo
const TeamMemberCard = memo(({ member }) => (
  <div className="group relative">
    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
    <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-primary-500/50 transition-all duration-300">
      <div className={`h-24 bg-gradient-to-r ${member.color} opacity-20`} />
      <div className="p-6 pt-0">
        <div className="relative -mt-12 mb-4 w-20 h-20 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 p-[2px] will-change-transform">
          <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center">
            <div className="text-primary-400 group-hover:text-primary-300 transition-colors">
              {member.icon}
            </div>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-white mb-1 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent animate-gradient">
          {member.name}
        </h3>
        <p className="text-primary-400 mb-3 text-sm">
          {member.role}
        </p>
        <p className="text-gray-300 text-sm mb-4">
          {member.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {member.skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 rounded-md bg-gray-700/50 text-primary-400 text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
));
=======
>>>>>>> origin/main

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const team = [
    {
      name: 'Silviu Oprescu',
      role: 'Full Stack Developer',
      icon: <Code2 className="h-6 w-6" />,
      description:
        'Experto en arquitectura de software y desarrollo full stack con React y Node.js.',
      skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Carlos Carrión',
      role: 'Frontend Developer',
      icon: <Rocket className="h-6 w-6" />,
      description:
        'Especialista en crear interfaces de usuario intuitivas y experiencias web excepcionales.',
      skills: ['React', 'UI/UX', 'Tailwind', 'Motion'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Sebastián González',
      role: 'Backend Developer',
      icon: <Zap className="h-6 w-6" />,
      description:
        'Experto en desarrollo backend y arquitectura de sistemas distribuidos.',
      skills: ['Node.js', 'Python', 'DevOps', 'MongoDB'],
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const values = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'Innovación',
      description: 'Siempre a la vanguardia de la tecnología',
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Pasión',
      description: 'Amamos lo que hacemos',
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      title: 'Dedicación',
      description: 'Comprometidos con la excelencia',
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <AnimatedHeroBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
<<<<<<< HEAD
              className="mb-6 mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 p-[2px] will-change-transform"
=======
              className="mb-6 mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 p-[2px]"
>>>>>>> origin/main
            >
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <Code2 className="h-10 w-10 text-primary-400" />
              </div>
            </motion.div>
<<<<<<< HEAD
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent animate-gradient">
=======
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent">
>>>>>>> origin/main
              Innovación Digital
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Un equipo apasionado por crear experiencias web excepcionales
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {['React', 'Node.js', 'TypeScript', 'AWS', 'UI/UX'].map(
                (tech, index) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50 text-primary-400 text-sm"
                  >
                    {tech}
                  </span>
                )
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
<<<<<<< HEAD
      <ValuesSection />
=======
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
                <div className="relative p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-primary-500/50 transition-all">
                  <div className="mb-4 p-3 bg-primary-500/10 rounded-xl inline-block text-primary-400">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
>>>>>>> origin/main

      {/* Team Section */}
      <section ref={ref} className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 to-gray-900">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-5 bg-cover bg-center mix-blend-overlay" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
<<<<<<< HEAD
                variants={fadeInUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative"
              >
                <TeamMemberCard member={member} />
=======
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
                <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-primary-500/50 transition-all duration-300">
                  <div className="h-24 bg-gradient-to-r ${member.color} opacity-20" />
                  <div className="p-6 pt-0">
                    <div className="relative -mt-12 mb-4 w-20 h-20 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 p-[2px]">
                      <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center">
                        <div className="text-primary-400 group-hover:text-primary-300 transition-colors">
                          {member.icon}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-1 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                      {member.name}
                    </h3>
                    <p className="text-primary-400 mb-3 text-sm">
                      {member.role}
                    </p>
                    <p className="text-gray-300 text-sm mb-4">
                      {member.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 rounded-md bg-gray-700/50 text-primary-400 text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
>>>>>>> origin/main
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 text-center"
          >
            <div className="inline-flex gap-8 p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-xl blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
                <div className="relative">
<<<<<<< HEAD
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent animate-gradient">
=======
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
>>>>>>> origin/main
                    50+
                  </div>
                  <div className="text-gray-400 text-sm">Proyectos</div>
                </div>
              </div>
              <div className="w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent" />
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-xl blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
                <div className="relative">
<<<<<<< HEAD
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent animate-gradient">
=======
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
>>>>>>> origin/main
                    30+
                  </div>
                  <div className="text-gray-400 text-sm">Clientes</div>
                </div>
              </div>
              <div className="w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent" />
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-xl blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
                <div className="relative">
<<<<<<< HEAD
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent animate-gradient">
=======
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
>>>>>>> origin/main
                    5+
                  </div>
                  <div className="text-gray-400 text-sm">Años</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-accent-900/20">
          <div className="absolute inset-0 bg-gray-900/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white">
              ¿Listo para innovar?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Convierte tus ideas en realidad con nuestro equipo de expertos
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-3 text-lg font-medium rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 hover:-translate-y-1"
            >
              Iniciar Proyecto
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="group-hover:translate-x-1 transition-transform"
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
