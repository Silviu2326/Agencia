// src/pages/LandingPage.jsx

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code2,
  Rocket,
  Zap,
  Shield,
  Users,
  Star,
  ArrowRight,
  Award,
  Globe,
  Sparkles,
  Check,
  Clock,
  Gift,
  Flame,
  Gem,
  Crown,
  BadgeCheck,
  Coins,
  TrendingUp,
  Laptop,
  Smartphone,
  Palette,
  ExternalLink,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedHeroBackground from '../components/AnimatedHeroBackground';
import GlassCard from '../components/GlassCard';
import { supabase } from '../../supabaseClient'; // Asegúrate de que la ruta es correcta

const LandingPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Temporizador de cuenta regresiva
  const calculateTimeLeft = () => {
    const targetDate = new Date('2024-11-25T23:59:59').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Beneficios
  const benefits = [
    {
      icon: <Flame className="h-6 w-6" />,
      title: 'Diseño Premium',
      description: 'Interfaces únicas y personalizadas',
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Ultra Rápido',
      description: 'Optimizado para máximo rendimiento',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Seguro',
      description: 'Protección y cifrado avanzado',
    },
    {
      icon: <Laptop className="h-6 w-6" />,
      title: 'Responsive',
      description: 'Perfecto en todos los dispositivos',
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'SEO Optimizado',
      description: 'Mejor posicionamiento en Google',
    },
    {
      icon: <Coins className="h-6 w-6" />,
      title: 'ROI Garantizado',
      description: 'Resultados medibles y efectivos',
    },
  ];

  // Destacados del portafolio actualizados
  const portfolioHighlights = [
    {
      title: 'Orange Business Intelligence',
      category: 'Algoritmo & Aplicación Web',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      results: '+45% eficiencia operativa',
      description:
        'Sistema de BI y algoritmos predictivos para optimización de recursos y análisis de datos en tiempo real.',
      gradient: 'from-orange-500 to-red-500',
      disabled: true,
    },
    {
      title: 'FitOffice',
      category: 'Software de Gestión',
      image:
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      results: '+200% productividad',
      description:
        'Plataforma integral para entrenadores personales con gestión de clientes, rutinas y seguimiento.',
      gradient: 'from-primary-500 to-accent-500',
      disabled: false,
    },
    {
      title: 'PsicoGest',
      category: 'Plataforma Clínica',
      image:
        'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      results: '+150% pacientes atendidos',
      description:
        'Sistema de gestión de consultas y pacientes para profesionales de la salud mental.',
      gradient: 'from-emerald-500 to-teal-500',
      disabled: true,
    },
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
            {/* Logo Animado */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mx-auto w-24 h-24 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 p-[2px] mb-8"
            >
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <Code2 className="h-12 w-12 text-primary-400" />
              </div>
            </motion.div>

            {/* Banner de Agencia */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-full px-6 py-2 border border-primary-500/20"
              >
                <Award className="h-5 w-5 text-primary-400 mr-2" />
                <span className="text-primary-400 font-medium">
                  Agencia Digital Premium #1 en Innovación
                </span>
              </motion.div>

              {/* Título Principal */}
              <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
                Desarrollamos tu página web{' '}
                <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent">
                  de alta calidad en tiempo récord
                </span>
              </h1>

              {/* Descripción */}
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Webcraft: Expertos en crear sitios web y aplicaciones a gran
                velocidad sin comprometer la calidad.
              </p>
            </div>

            {/* Temporizador de Cuenta Regresiva */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center space-y-4"
            >
              <div className="inline-flex items-center bg-red-500/10 rounded-full px-6 py-2 border border-red-500/20">
                <Clock className="h-5 w-5 text-red-400 mr-2" />
                <span className="text-red-400 font-medium">
                  ¡Oferta especial termina en!
                </span>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[rgb(5,7,57)] to-[rgb(36,22,84)] flex items-center justify-center border border-gray-700/50">
                    <span className="text-3xl font-bold text-white">
                      {String(timeLeft.days).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-sm text-gray-400 mt-2">Días</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[rgb(5,7,57)] to-[rgb(36,22,84)] flex items-center justify-center border border-gray-700/50">
                    <span className="text-3xl font-bold text-white">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-sm text-gray-400 mt-2">Horas</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[rgb(5,7,57)] to-[rgb(36,22,84)] flex items-center justify-center border border-gray-700/50">
                    <span className="text-3xl font-bold text-white">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-sm text-gray-400 mt-2">Minutos</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[rgb(5,7,57)] to-[rgb(36,22,84)] flex items-center justify-center border border-gray-700/50">
                    <span className="text-3xl font-bold text-white">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-sm text-gray-400 mt-2">Segundos</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Oferta Especial de Noviembre */}
      <section ref={ref} className="py-20 relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Oferta Especial de Noviembre
            </h2>
            <p className="text-xl text-gray-300">
              ¡No pierdas esta oportunidad única!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <GlassCard className="p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-1 rounded-bl-xl text-sm font-medium">
                Oferta Limitada
              </div>

              <div className="space-y-6">
                <div className="inline-block p-4 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 bg-opacity-10 mb-6">
                  <Gift className="h-12 w-12 text-primary-400" />
                </div>

                <div className="space-y-2">
                  <p className="text-gray-400 text-xl">Precio Normal</p>
                  <p className="text-3xl text-gray-500 line-through">$500</p>
                  <p className="text-5xl font-bold text-primary-400">$300</p>
                  <p className="text-gray-400">Consulta Incluida</p>
                </div>

                <div className="max-w-xl mx-auto">
                  <Link
                    to="/contact"
                    className="block w-full text-center px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium text-lg hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 hover:-translate-y-1 animate-pulse"
                  >
                    Solicita una Consulta Gratuita
                  </Link>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Beneficios Premium */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Beneficios Premium
            </h2>
            <p className="text-xl text-gray-300">
              Todo lo que obtienes con tu nuevo sitio web
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
                <GlassCard className="h-full p-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="mb-4 p-3 bg-primary-500/10 rounded-xl inline-block text-primary-400"
                  >
                    {benefit.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos que Transforman Negocios */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-accent-900/20">
            <div className="absolute inset-0 bg-gray-900/90" />
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Proyectos que Transforman Negocios
            </h2>
            <p className="text-xl text-gray-300">
              Soluciones innovadoras que impulsan el crecimiento empresarial
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioHighlights.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                <GlassCard>
                  <div className="relative h-64 overflow-hidden rounded-t-xl">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}
                    />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="text-primary-400 text-sm mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-green-400 font-semibold">
                        {project.results}
                      </span>
                      {!project.disabled ? (
                        <Link
                          to="/portfolio"
                          className="text-primary-400 hover:text-primary-300 transition-colors inline-flex items-center"
                        >
                          Ver Detalles
                          <ExternalLink className="ml-1 h-4 w-4" />
                        </Link>
                      ) : (
                        <span className="text-gray-500 text-sm">
                          Proyecto Privado
                        </span>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Llamada a la Acción Final */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-accent-900/20">
            <div className="absolute inset-0 bg-gray-900/90" />
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              ¡No Pierdas Esta Oportunidad!
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Aprovecha nuestra oferta especial de noviembre y transforma tu
              presencia digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium text-lg hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 hover:-translate-y-1 animate-pulse"
              >
                Solicita tu Consulta Gratuita
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <p className="text-gray-400">
              ¿Preguntas? Llámanos al{' '}
              <a
                href="tel:+34683529629"
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                683 529 629
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
