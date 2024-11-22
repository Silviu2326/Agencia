import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Star,
  Quote,
  ArrowRight,
  Play,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Users,
  ThumbsUp,
  Award,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedHeroBackground from '../components/AnimatedHeroBackground';
import GlassCard from '../components/GlassCard';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Carlos Rodríguez',
      role: 'CEO',
      company: 'TechStart Solutions',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      content:
        'Trabajar con Webcraft transformó por completo nuestro negocio. Su atención al detalle y compromiso con la excelencia resultaron en un sitio web que superó todas nuestras expectativas.',
      rating: 5,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Ana García',
      role: 'Directora de Marketing',
      company: 'Growth Marketing Co',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      content:
        'El equipo de Webcraft entregó nuestro proyecto antes de lo programado y con una calidad impecable. Su comunicación durante todo el proceso fue excepcional.',
      rating: 5,
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      name: 'Miguel Chen',
      role: 'Fundador',
      company: 'InnovateTech',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      content:
        'Servicio excepcional de principio a fin. El sitio web que construyeron para nosotros ha mejorado significativamente nuestra presencia en línea y tasas de conversión.',
      rating: 5,
      gradient: 'from-emerald-500 to-teal-500',
    },
  ];

  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      value: '100+',
      label: 'Clientes Satisfechos',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <ThumbsUp className="h-8 w-8" />,
      value: '95%',
      label: 'Tasa de Satisfacción',
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: <Star className="h-8 w-8" />,
      value: '4.9/5',
      label: 'Calificación Promedio',
      gradient: 'from-amber-500 to-yellow-500',
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      value: '90%',
      label: 'Clientes Recurrentes',
      gradient: 'from-emerald-500 to-teal-500',
    },
  ];

  const videoTestimonials = [
    {
      name: 'Roberto Jiménez',
      role: 'Director General',
      company: 'Enterprise Solutions',
      thumbnail:
        'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      duration: '2:15',
    },
    {
      name: 'Amanda Martínez',
      role: 'Gerente de Marketing',
      company: 'Digital Growth',
      thumbnail:
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      duration: '1:45',
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <AnimatedHeroBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 p-[2px] mb-8"
            >
              <div className="w-full h-full rounded-full bg-[rgb(12,12,32,0.8)] flex items-center justify-center">
                <Award className="h-8 w-8 text-primary-400" />
              </div>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Lo que dicen{' '}
              <motion.span
                className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                nuestros clientes
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Descubre por qué las empresas confían en nosotros para sus
              proyectos digitales
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
                <GlassCard className="relative p-6 text-center bg-[rgb(12,12,32,0.8)]">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`mx-auto w-16 h-16 mb-4 rounded-xl bg-gradient-to-r ${stat.gradient} p-[2px]`}
                  >
                    <div className="w-full h-full rounded-xl bg-[rgb(12,12,32,0.8)] flex items-center justify-center text-white">
                      {stat.icon}
                    </div>
                  </motion.div>
                  <motion.div
                    className="text-4xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent"
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
                  <div className="text-gray-300 mt-2">{stat.label}</div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials Carousel */}
      <section ref={ref} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-accent-900/20">
            <div className="absolute inset-0 bg-[rgb(12,12,32,0.9)]" />
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <GlassCard className="p-8 bg-[rgb(12,12,32,0.8)]">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative">
                      <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative rounded-xl overflow-hidden aspect-square"
                      >
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${testimonials[activeTestimonial].gradient} opacity-20`}
                        />
                        <img
                          src={testimonials[activeTestimonial].image}
                          alt={testimonials[activeTestimonial].name}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="absolute -bottom-6 -right-6 w-24 h-24 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 p-[2px]"
                      >
                        <div className="w-full h-full rounded-xl bg-[rgb(12,12,32,0.8)] flex items-center justify-center">
                          <Quote className="h-8 w-8 text-primary-400" />
                        </div>
                      </motion.div>
                    </div>
                    <div className="space-y-6">
                      <div className="flex mb-4">
                        {[...Array(testimonials[activeTestimonial].rating)].map(
                          (_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.1 * i }}
                            >
                              <Star className="h-6 w-6 text-yellow-400 fill-current" />
                            </motion.div>
                          )
                        )}
                      </div>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 italic"
                      >
                        "{testimonials[activeTestimonial].content}"
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                          {testimonials[activeTestimonial].name}
                        </h3>
                        <p className="text-primary-400">
                          {testimonials[activeTestimonial].role}
                        </p>
                        <p className="text-gray-400">
                          {testimonials[activeTestimonial].company}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
              <button
                onClick={() =>
                  setActiveTestimonial(
                    (prev) =>
                      (prev - 1 + testimonials.length) % testimonials.length
                  )
                }
                className="pointer-events-auto p-2 rounded-full bg-[rgb(12,12,32,0.8)] border border-gray-700/50 text-primary-400 hover:text-primary-300 transition-colors transform -translate-x-1/2"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() =>
                  setActiveTestimonial(
                    (prev) => (prev + 1) % testimonials.length
                  )
                }
                className="pointer-events-auto p-2 rounded-full bg-[rgb(12,12,32,0.8)] border border-gray-700/50 text-primary-400 hover:text-primary-300 transition-colors transform translate-x-1/2"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Testimonios en Video
            </h2>
            <p className="text-xl text-gray-300">
              Escucha directamente de nuestros clientes sobre su experiencia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoTestimonials.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
                <GlassCard className="relative overflow-hidden bg-[rgb(12,12,32,0.8)]">
                  <div className="relative aspect-video">
                    <img
                      src={video.thumbnail}
                      alt={`${video.name} testimonio`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgb(12,12,32,0.8)] via-[rgb(12,12,32,0.4)] to-transparent" />
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 p-[2px] group-hover:scale-110 transition-transform duration-300">
                        <div className="w-full h-full rounded-full bg-[rgb(12,12,32,0.8)] flex items-center justify-center">
                          <Play className="h-6 w-6 text-primary-400 ml-1" />
                        </div>
                      </div>
                    </motion.div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white">
                        {video.name}
                      </h3>
                      <p className="text-primary-400">{video.role}</p>
                      <p className="text-gray-300">{video.company}</p>
                      <span className="absolute bottom-6 right-6 px-2 py-1 rounded-full bg-[rgb(12,12,32,0.8)] text-primary-400 text-sm">
                        {video.duration}
                      </span>
                    </div>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              ¿Listo para ser parte de nuestras historias de éxito?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Trabajemos juntos para crear tu historia de éxito. Contáctanos hoy
              para discutir tu proyecto.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 hover:-translate-y-1"
            >
              Iniciar Proyecto
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
