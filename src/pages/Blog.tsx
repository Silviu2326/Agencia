import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Calendar,
  Clock,
  ExternalLink,
  ChevronDown,
  Search,
  Filter,
} from 'lucide-react';
import AnimatedHeroBackground from '../components/AnimatedHeroBackground';
import GlassCard from '../components/GlassCard';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Blog data
  const blogs = [
    {
      id: 1,
      title: 'El Futuro del Desarrollo Web: Tendencias 2024',
      excerpt:
        'Explora las últimas tendencias que están dando forma al futuro del desarrollo web, desde herramientas impulsadas por IA hasta frameworks revolucionarios.',
      date: '15 de Marzo, 2024',
      author: 'Alex Rivera',
      readTime: '8 min',
      category: 'Tecnología',
      image:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      tags: ['Desarrollo Web', 'IA', 'Tendencias'],
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      id: 2,
      title: 'Optimización del Rendimiento Web',
      excerpt:
        'Aprende a construir aplicaciones web ultrarrápidas utilizando patrones de arquitectura modernos y técnicas de optimización.',
      date: '10 de Marzo, 2024',
      author: 'Sara Chen',
      readTime: '12 min',
      category: 'Desarrollo',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      tags: ['Rendimiento', 'Arquitectura', 'Optimización'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 3,
      title: 'Experiencias de Usuario Inmersivas',
      excerpt:
        'Descubre cómo mejorar la participación del usuario a través de animaciones y elementos de diseño interactivos.',
      date: '5 de Marzo, 2024',
      author: 'Marcos Johnson',
      readTime: '10 min',
      category: 'Diseño',
      image:
        'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      tags: ['Diseño UX', 'Animación', 'Interacción'],
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      id: 4,
      title: 'Guía Completa de CSS Moderno',
      excerpt:
        'Domina las últimas características y técnicas de CSS para crear diseños web impresionantes y responsivos.',
      date: '28 de Febrero, 2024',
      author: 'Emma Torres',
      readTime: '15 min',
      category: 'Desarrollo',
      image:
        'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      tags: ['CSS', 'Diseño Web', 'Responsive'],
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      id: 5,
      title: 'Seguridad en Aplicaciones Web',
      excerpt:
        'Prácticas esenciales de seguridad e implementaciones para aplicaciones web modernas.',
      date: '20 de Febrero, 2024',
      author: 'David Kim',
      readTime: '11 min',
      category: 'Seguridad',
      image:
        'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      tags: ['Seguridad', 'Buenas Prácticas', 'Desarrollo Web'],
      gradient: 'from-red-500 to-orange-500',
    },
    {
      id: 6,
      title: 'La IA en el Desarrollo Web',
      excerpt:
        'Cómo la inteligencia artificial está transformando la manera en que construimos y mantenemos aplicaciones web.',
      date: '15 de Febrero, 2024',
      author: 'Lisa Anderson',
      readTime: '9 min',
      category: 'Tecnología',
      image:
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      tags: ['IA', 'Innovación', 'Tecnología'],
      gradient: 'from-amber-500 to-yellow-500',
    },
  ];

  // Get unique categories
  const categories = ['Todos', ...new Set(blogs.map((n) => n.category))];

  // Filter blogs based on category and search
  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      selectedCategory === 'Todos' || blog.category === selectedCategory;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredBlog = blogs[0];
  const regularBlogs = filteredBlogs.slice(1);

  return (
    <div className="min-h-screen pt-16 bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
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
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <ExternalLink className="h-8 w-8 text-primary-400" />
              </div>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Nuestro{' '}
              <motion.span
                className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                Blog
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Mantente al día con las últimas novedades en desarrollo web,
              diseño y tecnología
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-4 items-center justify-between"
          >
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar artículos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-[rgb(12,12,32,0.8)] border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500/50 transition-colors"
              />
            </div>

            <div className="relative">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[rgb(12,12,32,0.8)] border border-gray-700/50 text-white hover:bg-[rgb(12,12,32,0.9)] transition-colors"
              >
                <Filter className="h-5 w-5" />
                Categorías
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isFilterOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {isFilterOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 rounded-xl bg-[rgb(12,12,32,0.8)] backdrop-blur-xl border border-gray-700/50 shadow-xl z-50"
                  >
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          setIsFilterOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-[rgb(12,12,32,0.9)] transition-colors ${
                          selectedCategory === category
                            ? 'text-primary-400'
                            : 'text-gray-300'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Blog Section */}
      <section className="pt-8 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard className="relative h-full rounded-2xl bg-gradient-to-br from-[rgb(5,7,57)] to-[rgb(36,22,84)] overflow-hidden transition-all duration-300 hover:border-blue-500 border-2 border-transparent">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-64 md:h-full overflow-hidden">
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 mix-blend-overlay" />
                    <img
                      src={featuredBlog.image}
                      alt={featuredBlog.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-4 text-sm">
                      <span className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-400">
                        Destacado
                      </span>
                      <span className="flex items-center gap-1 text-primary-400">
                        <Calendar className="h-4 w-4" />
                        {featuredBlog.date}
                      </span>
                      <span className="flex items-center gap-1 text-primary-400">
                        <Clock className="h-4 w-4" />
                        {featuredBlog.readTime}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                      {featuredBlog.title}
                    </h2>
                    <p className="text-gray-300">{featuredBlog.excerpt}</p>
                    <div className="flex flex-wrap gap-2">
                      {featuredBlog.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/blog/${featuredBlog.id}`}
                      className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors group"
                    >
                      Leer Más
                      <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Regular Blogs Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="h-full"
              >
                <GlassCard className="relative h-full rounded-2xl bg-gradient-to-br from-[rgb(5,7,57)] to-[rgb(36,22,84)] overflow-hidden transition-all duration-300 hover:border-blue-500 border-2 border-transparent">
                  <div className="relative h-48">
                    <div className="absolute inset-0">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${blog.gradient} mix-blend-overlay opacity-20`}
                      />
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgb(12,12,32,0.8)] via-[rgb(12,12,32,0.4)] to-transparent" />
                  </div>
                  <div className="p-6 relative">
                    <div className="flex items-center gap-4 text-sm mb-4">
                      <span
                        className={`px-3 py-1 rounded-full bg-${
                          blog.gradient.split('-')[1]
                        }-500/10 text-${blog.gradient.split('-')[1]}-400`}
                      >
                        {blog.category}
                      </span>
                      <span className="flex items-center gap-1 text-primary-400">
                        <Clock className="h-4 w-4" />
                        {blog.readTime}
                      </span>
                    </div>
                    <h3
                      className={`text-xl font-bold mb-4 bg-gradient-to-r ${blog.gradient} bg-clip-text text-transparent`}
                    >
                      {blog.title}
                    </h3>
                    <p className="text-gray-300 mb-6">{blog.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {blog.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 rounded-full bg-${
                            blog.gradient.split('-')[1]
                          }-500/10 text-${
                            blog.gradient.split('-')[1]
                          }-400 text-sm`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/blog/${blog.id}`}
                      className={`inline-flex items-center gap-2 text-${
                        blog.gradient.split('-')[1]
                      }-400 hover:text-${
                        blog.gradient.split('-')[1]
                      }-300 transition-colors group`}
                    >
                      Leer Más
                      <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-20 relative overflow-hidden">
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
              className="mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 p-[2px] mb-8"
            >
              <div className="w-full h-full rounded-full bg-[rgb(12,12,32,0.8)] flex items-center justify-center">
                <ExternalLink className="h-6 w-6 text-primary-400" />
              </div>
            </motion.div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Suscríbete a Nuestro Blog
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Recibe las últimas actualizaciones y novedades directamente en tu
              correo
            </p>
            <motion.form
              className="max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onSubmit={(e) => {
                e.preventDefault();
                alert('¡Gracias por suscribirte!');
              }}
            >
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Ingresa tu correo electrónico"
                  required
                  className="flex-1 px-6 py-3 rounded-full bg-[rgb(12,12,32,0.8)] backdrop-blur-xl border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500/50 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 focus:ring-offset-[rgb(12,12,32,0.8)]"
                >
                  Suscribirse
                </button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;