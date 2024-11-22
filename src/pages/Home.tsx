<<<<<<< HEAD
import React, { memo } from 'react';
=======
import React from 'react';
>>>>>>> origin/main
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ArrowRight,
<<<<<<< HEAD
  Lock,
  ExternalLink,
  Rocket,
  Shield,
  Globe,
=======
  Code2,
  Rocket,
  Zap,
  Users,
  Star,
  Globe,
  Shield,
  Lock,
  ExternalLink,
>>>>>>> origin/main
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedHeroBackground from '../components/AnimatedHeroBackground';

<<<<<<< HEAD
// Componente memoizado para Servicios
const ServiceCard = memo(({ service }) => (
  <div className="group p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10">
    <div className="mb-4 p-3 bg-gray-900/50 rounded-xl inline-block">
      {service.icon}
    </div>
    <h3 className="text-xl font-semibold text-white mb-2 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
      {service.title}
    </h3>
    <p className="text-gray-400">{service.description}</p>
  </div>
));

// Componente memoizado para Proyectos
const ProjectCard = memo(({ project }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-primary-500/50 transition-all duration-300">
    <div className="relative h-64 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-none">
          <span className="text-sm font-medium text-primary-400 mb-2 block">
            {project.category}
          </span>
          <h3 className="text-xl font-semibold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-white text-sm mb-4 font-medium">
            {project.description}
          </p>
          {project.isPrivate ? (
            <div className="flex items-center text-gray-200 gap-2">
              <Lock className="h-4 w-4" />
              <span className="text-sm font-medium">
                {project.privateMessage}
              </span>
            </div>
          ) : (
            <Link
              to={project.link}
              className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium"
            >
              Ver Proyecto
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>
      </div>
    </div>
  </div>
));

const Home = () => {
  // Refs individuales para cada sección
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [projectsRef, projectsInView] = useInView({
=======
const Home = () => {
  const [ref, inView] = useInView({
>>>>>>> origin/main
    triggerOnce: true,
    threshold: 0.1,
  });

  const featuredProjects = [
    {
      title: 'FitOffice CRM',
      category: 'Software de Gestión',
      description:
        'Plataforma integral para entrenadores personales con gestión de clientes, rutinas y seguimiento.',
      image:
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      link: '/portfolio/fitoffice',
      isPrivate: false,
      gradient: 'from-primary-500 to-accent-500',
    },
    {
      title: 'PsicoGest',
      category: 'Plataforma Clínica',
      description:
        'Sistema de gestión de consultas y pacientes para profesionales de la salud mental con integración web.',
      image:
        'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      isPrivate: true,
      privateMessage: 'Acceso Restringido - Proyecto Confidencial',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Orange Business Intelligence',
      category: 'Algoritmo & Aplicación Web',
      description:
        'Sistema de BI y algoritmos predictivos para optimización de recursos y análisis de datos en tiempo real.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      isPrivate: true,
      privateMessage: 'Proyecto Privado - Acceso Exclusivo',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const services = [
    {
      icon: <Globe className="h-8 w-8 text-primary-400" />,
      title: 'Desarrollo Web',
      description:
        'Sitios web personalizados construidos con tecnologías modernas.',
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary-400" />,
      title: 'Landing Pages',
      description: 'Páginas de aterrizaje optimizadas para conversión.',
    },
    {
      icon: <Shield className="h-8 w-8 text-primary-400" />,
      title: 'Aplicaciones Seguras',
      description: 'Desarrollo de aplicaciones web con máxima seguridad.',
    },
  ];

  const stats = [
    { value: '100+', label: 'Proyectos Completados' },
    { value: '50+', label: 'Clientes Satisfechos' },
    { value: '99%', label: 'Satisfacción' },
    { value: '24/7', label: 'Soporte' },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatedHeroBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
<<<<<<< HEAD
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
=======
            <motion.h1
              className="text-5xl md:text-7xl font-bold leading-tight text-white"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
>>>>>>> origin/main
              Transformamos Ideas
              <span className="block bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                en Realidad Digital
              </span>
<<<<<<< HEAD
            </h1>
=======
            </motion.h1>
>>>>>>> origin/main
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300"
            >
              Webs y aplicaciones rápidas, únicas y a medida. Llevamos tu visión
              más allá de lo esperado.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center px-8 py-3 text-lg font-medium rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center">
                  Inicia tu Proyecto
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                to="/portfolio"
                className="group inline-flex items-center px-8 py-3 text-lg font-medium rounded-full bg-gray-800/50 text-white border border-gray-700 hover:border-primary-500/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
              >
                Ver Portafolio
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
<<<<<<< HEAD
      <section ref={servicesRef} className="py-20 bg-gray-900/50 relative">
=======
      <section ref={ref} className="py-20 bg-gray-900/50 relative">
>>>>>>> origin/main
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-5 bg-cover bg-center mix-blend-overlay" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
<<<<<<< HEAD
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
=======
            animate={inView ? { opacity: 1, y: 0 } : {}}
>>>>>>> origin/main
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ofrecemos soluciones web completas adaptadas a tus necesidades
            </p>
          </motion.div>

<<<<<<< HEAD
          <motion.div
            initial={{ opacity: 0 }}
            animate={servicesInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </motion.div>
=======
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
              >
                <motion.div
                  className="mb-4 p-3 bg-gray-900/50 rounded-xl inline-block"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
>>>>>>> origin/main
        </div>
      </section>

      {/* Stats Section */}
<<<<<<< HEAD
      <section ref={statsRef} className="py-20 bg-gray-900/80 relative overflow-hidden">
=======
      <section className="py-20 bg-gray-900/80 relative overflow-hidden">
>>>>>>> origin/main
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-accent-900/20">
            <div className="absolute inset-0 bg-gray-900/90" />
          </div>
<<<<<<< HEAD
          {[...Array(1)].map((_, i) => (
=======
          {[...Array(3)].map((_, i) => (
>>>>>>> origin/main
            <motion.div
              key={i}
              className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-accent-500/10 to-secondary-500/10 blur-3xl"
              animate={{
<<<<<<< HEAD
                scale: [1, 1.1, 1],
                rotate: [0, 45, 0],
              }}
              transition={{
                duration: 60 + i * 10,
=======
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20 + i * 2,
>>>>>>> origin/main
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
<<<<<<< HEAD
                opacity: 0.3 - i * 0.1,
=======
                opacity: 0.4 - i * 0.1,
>>>>>>> origin/main
              }}
            />
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
<<<<<<< HEAD
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
=======
                animate={inView ? { opacity: 1, scale: 1 } : {}}
>>>>>>> origin/main
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <motion.div
                  className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary-400 to-accent-400 text-transparent bg-clip-text"
<<<<<<< HEAD
                  style={{ backgroundSize: '200% 200%' }}
=======
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
>>>>>>> origin/main
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
<<<<<<< HEAD
      <section ref={projectsRef} className="py-20 bg-gray-900/90 relative">
=======
      <section className="py-20 bg-gray-900/90 relative">
>>>>>>> origin/main
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 to-gray-900">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-5 bg-cover bg-center mix-blend-overlay" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Proyectos Destacados
            </h2>
            <p className="text-xl text-gray-400">
<<<<<<< HEAD
              Descubre cómo ayudamos a nuestros clientes a alcanzar sus objetivos
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={projectsInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </motion.div>
=======
              Descubre cómo ayudamos a nuestros clientes a alcanzar sus
              objetivos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-primary-500/50 transition-all duration-300"
              >
                <motion.div
                  className="relative h-64 overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-sm font-medium text-primary-400 mb-2 block">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">
                        {project.description}
                      </p>
                      {project.isPrivate ? (
                        <div className="flex items-center text-gray-400 gap-2">
                          <Lock className="h-4 w-4" />
                          <span className="text-sm">
                            {project.privateMessage}
                          </span>
                        </div>
                      ) : (
                        <Link
                          to={project.link}
                          className="inline-flex items-center text-primary-400 hover:text-primary-300"
                        >
                          Ver Proyecto
                          <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
>>>>>>> origin/main
        </div>
      </section>
    </div>
  );
};

export default Home;
