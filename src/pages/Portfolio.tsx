import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, ExternalLink, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from '../components/GlassCard';

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'FitOffice CRM',
      category: 'Software de Gestión',
      description:
        'Plataforma integral para entrenadores personales con gestión de clientes, rutinas y seguimiento.',
      image:
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
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
        'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '#',
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
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '#',
      isPrivate: true,
      privateMessage: 'Proyecto Privado - Acceso Exclusivo',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-radial from-primary-500/10 via-transparent to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Nuestro Trabajo Habla por Nosotros{' '}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Conoce cómo hemos ayudado a diversas empresas a superar sus
              desafíos digitales.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section ref={ref} className="py-20 bg-gray-900/50 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/50 to-gray-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="group relative overflow-hidden">
                  <div className="relative h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span className="text-primary-400 text-sm font-medium mb-2 block">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-semibold text-white mb-2 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
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
                            className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
                          >
                            Ver Proyecto
                            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-accent-900/20">
          <div className="absolute inset-0 bg-gray-900/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            ¿Listo para Comenzar tu Proyecto?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 hover:-translate-y-1"
          >
            Hablemos
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
