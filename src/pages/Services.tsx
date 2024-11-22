import React from 'react';
import { motion } from 'framer-motion';
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
import AnimatedHeroBackground from '../components/AnimatedHeroBackground';

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ServiceCard = ({
  icon,
  title,
  description,
  features,
  gradient,
  iconColor,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  iconColor: string;
}) => {
  return (
    <motion.div
      variants={fadeInUpVariant}
      className="relative group h-full" // Added h-full here
    >
      <div className="relative h-full rounded-2xl bg-gradient-to-br from-[rgb(5,7,57)] to-[rgb(36,22,84)] overflow-hidden transition-all duration-300 border border-transparent group-hover:border-primary-400 flex flex-col"> {/* Added flex flex-col */}
        <div className="relative p-8 flex flex-col h-full"> {/* Added flex flex-col and h-full */}
          <div className="mb-6">
            <div className={`inline-block p-4 rounded-xl ${gradient} bg-opacity-10`}>
              <div className="text-primary-400">
                {icon}
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
            {title}
          </h3>
          <p className="text-gray-300 mb-6">
            {description}
          </p>
          <ul className="space-y-3 mt-auto"> {/* Added mt-auto to push the list to the bottom */}
            {features.map((feature, index) => (
              <motion.li
                key={index}
                variants={fadeInUpVariant}
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
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

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
          <motion.div
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.div
              variants={fadeInUpVariant}
              className="mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 p-[2px] mb-8"
            >
              <div className="w-full h-full rounded-full bg-[rgb(12,12,32,0.8)] flex items-center justify-center">
                <Sparkles className="h-10 w-10 text-primary-400" />
              </div>
            </motion.div>
            <motion.h1
              variants={fadeInUpVariant}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent"
            >
              Soluciones Web que Impulsan tu Negocio
            </motion.h1>
            <motion.p
              variants={fadeInUpVariant}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Ofrecemos servicios integrales para que tu negocio triunfe en el
              competitivo mundo digital.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-accent-900/20">
            <div className="absolute inset-0 bg-[rgb(12,12,32,0.9)]" />
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </motion.div>
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
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.h2
              variants={fadeInUpVariant}
              className="text-3xl md:text-4xl font-bold text-white mb-8"
            >
              ¿Listo para Transformar tu Presencia Digital?
            </motion.h2>
            <motion.div variants={fadeInUpVariant}>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
              >
                Comienza tu Proyecto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
