import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Users,
  Dumbbell,
  Utensils,
  Calendar,
  BarChart3,
  Mail,
  ArrowRight,
  Sparkles,
  X,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedHeroBackground from '../../components/AnimatedHeroBackground';
import GlassCard from '../../components/GlassCard';

// Importación de imágenes locales
import DashboardImage from '../../assets/images/dashboard.png';
import CampaignsImage from '../../assets/images/Campañas.png';
import ClassesImage from '../../assets/images/Clases.png';
import ContentImage from '../../assets/images/Contenido.png';
import DietImage from '../../assets/images/Dietas.png';
import TrainingImage from '../../assets/images/Entrenamiento.png';
import FinanceImage from '../../assets/images/Finanzas.png';

const FitOffice: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Estado para el modal
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Gestión de Clientes',
      description:
        'Control total de la información y progreso de tus clientes en un solo lugar.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Dumbbell className="h-6 w-6" />,
      title: 'Planes de Entrenamiento',
      description:
        'Crea y asigna rutinas personalizadas con nuestra biblioteca de ejercicios.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Utensils className="h-6 w-6" />,
      title: 'Planes Nutricionales',
      description:
        'Diseña dietas específicas y realiza seguimiento de la nutrición.',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: 'Gestión de Clases',
      description:
        'Organiza y programa sesiones individuales y grupales eficientemente.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Análisis y Métricas',
      description:
        'Visualiza el progreso y resultados con gráficos detallados.',
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Comunicación',
      description:
        'Mantén contacto directo con tus clientes y automatiza recordatorios.',
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  const stats = [
    {
      value: '+200%',
      label: 'Productividad',
      description: 'Incremento en la eficiencia del trabajo diario',
    },
    {
      value: '-75%',
      label: 'Tiempo Administrativo',
      description: 'Reducción en tareas administrativas',
    },
    {
      value: '+50%',
      label: 'Clientes',
      description: 'Aumento en capacidad de gestión de clientes',
    },
  ];

  const screenshots = [
    { image: CampaignsImage },
    { image: ClassesImage },
    { image: ContentImage },
    { image: DietImage },
    { image: TrainingImage },
    { image: FinanceImage },
  ];

  // Función para abrir el modal
  const openModal = (image: string): void => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = (): void => {
    setIsModalOpen(false);
    setSelectedImage(undefined);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 flex items-center justify-center overflow-hidden">
        <AnimatedHeroBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mx-auto w-24 h-24 rounded-2xl bg-gradient-to-r from-primary-500 to-accent-500 p-[2px]"
            >
              <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
                <Dumbbell className="h-12 w-12 text-primary-400" />
              </div>
            </motion.div>

            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6"
              >
                FitOffice{' '}
                <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent">
                  CRM
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                La solución integral para entrenadores personales que
                revoluciona la gestión de clientes, entrenamientos y nutrición.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {[
                'Gestión de Clientes',
                'Entrenamientos',
                'Nutrición',
                'Análisis',
                'Automatización',
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50 text-primary-400 text-sm"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 max-w-3xl mx-auto relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
              <GlassCard className="relative">
                <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="relative overflow-hidden rounded-xl">
                  <div className="absolute top-0 left-0 right-0 h-10 bg-gray-800/50 backdrop-blur-sm border-b border-gray-700/50"></div>
                  {/* Reemplazo de la imagen principal */}
                  <img
                    src={DashboardImage}
                    alt="FitOffice Dashboard"
                    className="w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-50"></div>

                  {/* Floating Elements */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-4 left-4 px-4 py-2 rounded-xl bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 flex items-center gap-2"
                  >
                    <Sparkles className="h-5 w-5 text-primary-400" />
                    <span className="text-sm text-gray-300">
                      Dashboard en vivo
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 }}
                    className="absolute bottom-4 right-4 px-4 py-2 rounded-xl bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 flex items-center gap-2"
                  >
                    <Users className="h-5 w-5 text-primary-400" />
                    <span className="text-sm text-gray-300">
                      125 clientes activos
                    </span>
                  </motion.div>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={ref} className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <GlassCard className="p-6 text-center">
                  <motion.div
                    className="text-4xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-2"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xl font-semibold text-white mb-2">
                    {stat.label}
                  </div>
                  <div className="text-gray-400">{stat.description}</div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Características Principales
            </h2>
            <p className="text-xl text-gray-300">
              Todo lo que necesitas para potenciar tu negocio
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <GlassCard className="p-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className={`mb-4 p-3 rounded-xl bg-gradient-to-r ${feature.gradient} bg-opacity-10 inline-block`}
                  >
                    <div className="text-primary-400">{feature.icon}</div>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interface Screenshots */}
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
              Interfaz Intuitiva
            </h2>
          </motion.div>

          {/* Ajuste a 2 columnas en pantallas medianas y grandes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                <GlassCard>
                  <div className="relative aspect-video overflow-hidden rounded-xl">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      src={screenshot.image}
                      alt={`Interface screenshot ${index + 1}`}
                      className="w-full h-full object-cover cursor-pointer"
                      onClick={() => openModal(screenshot.image)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-50" />
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Potencia tu Negocio con FitOffice
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Únete a los entrenadores que ya han transformado su forma de
              trabajar
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 hover:-translate-y-1"
            >
              Solicita una Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Modal para mostrar la imagen ampliada */}
      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // Evita cerrar el modal al hacer clic dentro
            >
              <button
                className="absolute top-0 right-0 mt-2 mr-2 text-white hover:text-gray-300"
                onClick={closeModal}
              >
                <X className="h-6 w-6" />
              </button>
              <img
                src={selectedImage}
                alt="Enlarged Screenshot"
                className="max-w-full max-h-screen rounded-xl shadow-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FitOffice;
