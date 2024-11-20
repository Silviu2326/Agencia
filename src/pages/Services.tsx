import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code2,
  Rocket,
  Zap,
  ShoppingCart,
  Globe,
  Server,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import AnimatedHeroBackground from '../components/AnimatedHeroBackground';

const ServiceCard = ({
  icon,
  title,
  description,
  features,
  gradient,
  delay,
  iconColor,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  delay: number;
  iconColor: string;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-2xl blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
      <div className="relative h-full rounded-2xl bg-gradient-to-br from-[rgb(5,7,57)] to-[rgb(36,22,84)] overflow-hidden transition-all duration-300 group-hover:shadow-xl border border-gray-800/50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative p-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: delay + 0.2 }}
            className="mb-6"
          >
            <div
              className={`inline-block p-4 rounded-xl ${gradient} bg-opacity-10`}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="text-primary-400"
              >
                {icon}
              </motion.div>
            </div>
          </motion.div>
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
            {title}
          </h3>
          <p className="text-gray-300 mb-6">{description}</p>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: delay + 0.1 * index }}
                className="flex items-start space-x-2 group"
              >
                <div className="mt-1.5">
                  <Sparkles className="h-4 w-4 text-primary-400 group-hover:text-accent-400 transition-colors duration-300" />
                </div>
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Globe className="h-10 w-10" />,
      title: 'Desarrollo Web Personalizado',
      description:
        'Creamos sitios web a medida que destacan por su diseño innovador y rendimiento impecable, alineados perfectamente con tu marca y objetivos comerciales',
      features: [
        'Diseño Responsivo',
        'Optimización SEO',
        'Alto Rendimiento',
        'Tecnologías Modernas',
      ],
      gradient: 'bg-gradient-to-br from-primary-500 to-accent-500',
      iconColor: 'text-primary-400',
    },
    {
      icon: <Rocket className="h-10 w-10" />,
      title: 'Landing Pages de Alto Impacto',
      description:
        'Diseñamos páginas de aterrizaje optimizadas para maximizar la conversión, atrayendo y reteniendo a tus clientes potenciales de manera efectiva.',
      features: [
        'Tests A/B',
        'Optimización de Conversión',
        'Carga Ultrarrápida',
        'Integración Analytics',
      ],
      gradient: 'bg-gradient-to-br from-primary-500 to-accent-500',
      iconColor: 'text-primary-400',
    },
    {
      icon: <Code2 className="h-10 w-10" />,
      title: 'Aplicaciones Web Escalables',
      description:
        'Desarrollamos aplicaciones robustas y seguras, adaptadas a las necesidades específicas de tu negocio, con una infraestructura preparada para el crecimiento.',
      features: [
        'Arquitectura Escalable',
        'Desarrollo Seguro',
        'Integración API',
        'Despliegue Cloud',
      ],
      gradient: 'bg-gradient-to-br from-primary-500 to-accent-500',
      iconColor: 'text-primary-400',
    },
    {
      icon: <ShoppingCart className="h-10 w-10" />,
      title: 'E-commerce Integral',
      description:
        'Diseñamos y gestionamos tiendas online completas, optimizadas para ofrecer una experiencia de compra fluida y eficiente.',
      features: [
        'Integración de Pagos',
        'Gestión de Inventario',
        'Proceso de Pedidos',
        'Comercio Móvil',
      ],
      gradient: 'bg-gradient-to-br from-primary-500 to-accent-500',
      iconColor: 'text-primary-400',
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: 'Optimización Avanzada',
      description:
        'Mejora el rendimiento de tus aplicaciones web para ofrecer una experiencia más rápida y eficiente a tus usuarios.',
      features: [
        'Análisis de Rendimiento',
        'Optimización de Código',
        'Estrategia de Caché',
        'Implementación CDN',
      ],
      gradient: 'bg-gradient-to-br from-primary-500 to-accent-500',
      iconColor: 'text-primary-400',
    },
    {
      icon: <Server className="h-10 w-10" />,
      title: 'Mantenimiento Proactivo',
      description:
        'Ofrecemos soporte continuo para asegurar que tu sitio web esté siempre actualizado, seguro y funcionando sin interrupciones.',
      features: [
        'Monitoreo 24/7',
        'Actualizaciones Regulares',
        'Parches de Seguridad',
        'Gestión de Backups',
      ],
      gradient: 'bg-gradient-to-br from-primary-500 to-accent-500',
      iconColor: 'text-primary-400',
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <AnimatedHeroBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 p-[2px] mb-8"
            >
              <div className="w-full h-full rounded-full bg-[rgb(12,12,32,0.8)] flex items-center justify-center">
                <Sparkles className="h-10 w-10 text-primary-400" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent"
            >
              Soluciones Web que Impulsan tu Negocio
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Ofrecemos servicios integrales para que tu negocio triunfe en el
              competitivo mundo digital.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-accent-900/20">
            <div className="absolute inset-0 bg-[rgb(12,12,32,0.9)]" />
          </div>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-accent-500/10 to-secondary-500/10 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20 + i * 2,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                opacity: 0.4 - i * 0.1,
              }}
            />
          ))}
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-accent-900/20">
            <div className="absolute inset-0 bg-[rgb(12,12,32,0.9)]" />
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              ¿Listo para Transformar tu Presencia Digital?
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 hover:-translate-y-1"
            >
              Comienza tu Proyecto
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
