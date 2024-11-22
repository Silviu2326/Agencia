import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Tag,
  Share2,
  Bookmark,
  MessageCircle,
  ThumbsUp,
} from 'lucide-react';
import AnimatedHeroBackground from '../components/AnimatedHeroBackground';
import GlassCard from '../components/GlassCard';

const blogPosts = [
  {
    id: 1,
    title: 'El Futuro del Desarrollo Web: Tendencias 2024',
    excerpt:
      'Explora las últimas tendencias que están dando forma al futuro del desarrollo web, desde herramientas impulsadas por IA hasta frameworks revolucionarios.',
    content: `
      <h2>La Evolución del Desarrollo Web</h2>
      <p>El desarrollo web está experimentando una transformación sin precedentes. Las nuevas tecnologías y metodologías están redefiniendo la manera en que construimos y desplegamos aplicaciones web. En este artículo, exploraremos las tendencias más significativas que están dando forma al futuro del desarrollo web en 2024.</p>

      <h3>1. Inteligencia Artificial en el Desarrollo</h3>
      <p>La IA está revolucionando la forma en que escribimos código. Los asistentes de programación impulsados por IA están haciendo que el desarrollo sea más eficiente y accesible. Algunas áreas clave incluyen:</p>
      <ul>
        <li>Autocompletado de código avanzado</li>
        <li>Detección y corrección de errores en tiempo real</li>
        <li>Optimización automática de código</li>
        <li>Generación de pruebas unitarias</li>
      </ul>

      <h3>2. Arquitecturas Sin Servidor</h3>
      <p>La computación serverless continúa ganando terreno, permitiendo a los desarrolladores centrarse en la lógica de negocio sin preocuparse por la infraestructura.</p>

      <h3>3. Web Components y Micro-Frontends</h3>
      <p>La modularización del frontend está alcanzando nuevos niveles con la adopción generalizada de Web Components y arquitecturas de micro-frontends.</p>
    `,
    date: '15 de Marzo, 2024',
    author: 'Alex Rivera',
    readTime: '8 min',
    category: 'Tecnología',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    tags: ['Desarrollo Web', 'IA', 'Tendencias'],
    gradient: 'from-violet-500 to-purple-500',
    likes: 234,
    comments: 45,
    shares: 89,
  },
  {
    id: 2,
    title: 'Optimización del Rendimiento Web',
    excerpt:
      'Aprende a construir aplicaciones web ultrarrápidas utilizando patrones de arquitectura modernos y técnicas de optimización.',
    content: `
      <h2>Optimización de Rendimiento: La Clave del Éxito</h2>
      <p>El rendimiento web se ha convertido en un factor crítico para el éxito de cualquier aplicación moderna. En esta guía completa, exploraremos las mejores prácticas y técnicas para optimizar el rendimiento de tus aplicaciones web.</p>

      <h3>1. Optimización de Imágenes</h3>
      <p>Las imágenes son a menudo el recurso más pesado en una página web. Aprende a optimizarlas correctamente:</p>
      <ul>
        <li>Uso de formatos modernos (WebP, AVIF)</li>
        <li>Carga perezosa (lazy loading)</li>
        <li>Dimensionamiento adecuado</li>
        <li>Compresión sin pérdida de calidad</li>
      </ul>

      <h3>2. Estrategias de Caché</h3>
      <p>Implementa estrategias de caché efectivas para reducir la carga del servidor y mejorar los tiempos de respuesta.</p>

      <h3>3. Code Splitting y Lazy Loading</h3>
      <p>Divide tu código en chunks más pequeños y cárgalos solo cuando sean necesarios para mejorar el tiempo de carga inicial.</p>
    `,
    date: '10 de Marzo, 2024',
    author: 'Sara Chen',
    readTime: '12 min',
    category: 'Desarrollo',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    tags: ['Rendimiento', 'Arquitectura', 'Optimización'],
    gradient: 'from-blue-500 to-cyan-500',
    likes: 156,
    comments: 32,
    shares: 67,
  },
  {
    id: 3,
    title: 'Experiencias de Usuario Inmersivas',
    excerpt:
      'Descubre cómo mejorar la participación del usuario a través de animaciones y elementos de diseño interactivos.',
    content: `
      <h2>Creando Experiencias Web Inmersivas</h2>
      <p>La experiencia del usuario se ha convertido en un factor diferenciador crucial en el desarrollo web moderno. En este artículo, exploraremos cómo crear experiencias web verdaderamente inmersivas que cautiven a los usuarios.</p>

      <h3>1. Animaciones Significativas</h3>
      <p>Las animaciones no son solo decorativas; son una parte integral de la experiencia del usuario:</p>
      <ul>
        <li>Feedback visual inmediato</li>
        <li>Transiciones suaves entre estados</li>
        <li>Indicadores de progreso animados</li>
        <li>Micro-interacciones deleitables</li>
      </ul>

      <h3>2. Diseño Responsivo Avanzado</h3>
      <p>El diseño responsivo moderno va más allá de simplemente ajustar layouts. Incluye:</p>
      <ul>
        <li>Adaptación del contenido según el dispositivo</li>
        <li>Optimización de la navegación móvil</li>
        <li>Gestos táctiles intuitivos</li>
      </ul>

      <h3>3. Personalización Contextual</h3>
      <p>Utiliza datos contextuales para ofrecer experiencias personalizadas que resonarán con cada usuario individual.</p>
    `,
    date: '5 de Marzo, 2024',
    author: 'Marcos Johnson',
    readTime: '10 min',
    category: 'Diseño',
    image:
      'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    tags: ['Diseño UX', 'Animación', 'Interacción'],
    gradient: 'from-pink-500 to-rose-500',
    likes: 189,
    comments: 37,
    shares: 56,
  },
  {
    id: 4,
    title: 'Guía Completa de CSS Moderno',
    excerpt:
      'Domina las últimas características y técnicas de CSS para crear diseños web impresionantes y responsivos.',
    content: `
      <h2>CSS Moderno: La Nueva Era del Diseño Web</h2>
      <p>CSS ha evolucionado significativamente en los últimos años, ofreciendo nuevas y poderosas características para el diseño web moderno. Exploremos las técnicas más avanzadas y su implementación práctica.</p>

      <h3>1. CSS Grid y Flexbox</h3>
      <p>Los sistemas de layout modernos han revolucionado cómo estructuramos nuestras páginas:</p>
      <ul>
        <li>Layouts complejos con CSS Grid</li>
        <li>Alineación flexible con Flexbox</li>
        <li>Combinación de ambos sistemas</li>
        <li>Patrones de diseño responsivo</li>
      </ul>

      <h3>2. Variables CSS y Temas Dinámicos</h3>
      <p>Las variables CSS (propiedades personalizadas) permiten crear temas dinámicos y mantenibles:</p>
      <ul>
        <li>Sistemas de color adaptables</li>
        <li>Temas claros y oscuros</li>
        <li>Reutilización de valores</li>
      </ul>

      <h3>3. Animaciones y Transiciones</h3>
      <p>Aprende a crear animaciones fluidas y eficientes que mejoren la experiencia del usuario.</p>
    `,
    date: '28 de Febrero, 2024',
    author: 'Emma Torres',
    readTime: '15 min',
    category: 'Desarrollo',
    image:
      'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    tags: ['CSS', 'Diseño Web', 'Responsive'],
    gradient: 'from-emerald-500 to-teal-500',
    likes: 245,
    comments: 52,
    shares: 78,
  },
  {
    id: 5,
    title: 'Seguridad en Aplicaciones Web',
    excerpt:
      'Prácticas esenciales de seguridad e implementaciones para aplicaciones web modernas.',
    content: `
      <h2>Seguridad Web: Protegiendo el Futuro Digital</h2>
      <p>La seguridad web es más crucial que nunca en el panorama digital actual. Este artículo profundiza en las mejores prácticas y estrategias para proteger tus aplicaciones web.</p>

      <h3>1. Autenticación y Autorización</h3>
      <p>Implementa sistemas robustos de seguridad:</p>
      <ul>
        <li>Autenticación multifactor</li>
        <li>JWT y manejo seguro de tokens</li>
        <li>Control de acceso basado en roles</li>
        <li>Protección contra ataques de fuerza bruta</li>
      </ul>

      <h3>2. Protección contra Vulnerabilidades Comunes</h3>
      <p>Aprende a defender tu aplicación contra:</p>
      <ul>
        <li>Inyección SQL</li>
        <li>Cross-Site Scripting (XSS)</li>
        <li>Cross-Site Request Forgery (CSRF)</li>
      </ul>

      <h3>3. Cifrado y Protección de Datos</h3>
      <p>Asegura la información sensible mediante técnicas modernas de cifrado y mejores prácticas de almacenamiento.</p>
    `,
    date: '20 de Febrero, 2024',
    author: 'David Kim',
    readTime: '11 min',
    category: 'Seguridad',
    image:
      'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    tags: ['Seguridad', 'Buenas Prácticas', 'Desarrollo Web'],
    gradient: 'from-red-500 to-orange-500',
    likes: 312,
    comments: 64,
    shares: 92,
  },
  {
    id: 6,
    title: 'La IA en el Desarrollo Web',
    excerpt:
      'Cómo la inteligencia artificial está transformando la manera en que construimos y mantenemos aplicaciones web.',
    content: `
      <h2>IA y Desarrollo Web: Una Sinergia Perfecta</h2>
      <p>La inteligencia artificial está revolucionando el desarrollo web, ofreciendo nuevas posibilidades y optimizando procesos existentes. Descubre cómo aprovechar esta poderosa tecnología.</p>

      <h3>1. Asistentes de Desarrollo IA</h3>
      <p>Las herramientas de IA están transformando el proceso de desarrollo:</p>
      <ul>
        <li>Generación automática de código</li>
        <li>Depuración inteligente</li>
        <li>Optimización de rendimiento</li>
        <li>Análisis predictivo de errores</li>
      </ul>

      <h3>2. Personalización Dinámica</h3>
      <p>Utiliza la IA para crear experiencias web personalizadas:</p>
      <ul>
        <li>Recomendaciones de contenido</li>
        <li>Adaptación de interfaces</li>
        <li>Optimización de rutas de usuario</li>
      </ul>

      <h3>3. Automatización Inteligente</h3>
      <p>Implementa automatizaciones avanzadas para mejorar la eficiencia y reducir tareas repetitivas.</p>
    `,
    date: '15 de Febrero, 2024',
    author: 'Lisa Anderson',
    readTime: '9 min',
    category: 'Tecnología',
    image:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    tags: ['IA', 'Innovación', 'Tecnología'],
    gradient: 'from-amber-500 to-yellow-500',
    likes: 278,
    comments: 48,
    shares: 83,
  },
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-400">Post no encontrado</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <AnimatedHeroBackground />
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-gradient-to-r opacity-20"
            style={{
              background: `linear-gradient(to right, ${post.gradient
                .split('to-')[1]
                .replace('-500', '')}, ${post.gradient
                .split('from-')[1]
                .split(' ')[0]
                .replace('-500', '')})`,
            }}
          />
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/60 to-gray-900" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
  to="/"
  className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-8"
>
  <ArrowLeft className="h-5 w-5" />
  Volver al Blog
</Link>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 text-sm mb-6">
              <span
                className={`px-3 py-1 rounded-full bg-${
                  post.gradient.split('-')[1]
                }-500/10 text-${post.gradient.split('-')[1]}-400`}
              >
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-gray-300">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1 text-gray-300">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>

            <h1
              className={`text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${post.gradient} bg-clip-text text-transparent`}
            >
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-gray-300">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <ThumbsUp className="h-4 w-4" />
                  {post.likes}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="h-4 w-4" />
                  {post.comments}
                </span>
                <span className="flex items-center gap-1">
                  <Share2 className="h-4 w-4" />
                  {post.shares}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard className="p-8 rounded-2xl">
                <div
                  className="prose prose-lg prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </GlassCard>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-4 py-2 rounded-full bg-${
                      post.gradient.split('-')[1]
                    }-500/10 text-${
                      post.gradient.split('-')[1]
                    }-400 text-sm flex items-center gap-2`}
                  >
                    <Tag className="h-4 w-4" />
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Author Card */}
              <GlassCard className="p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">Sobre el Autor</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${post.gradient} p-[2px]`}
                  >
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                      <User className="h-8 w-8 text-gray-300" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">{post.author}</h4>
                    <p className="text-gray-400">Editor Senior</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  Experto en desarrollo web con más de 10 años de experiencia en la
                  industria.
                </p>
              </GlassCard>

              {/* Share Card */}
              <GlassCard className="p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">Compartir</h3>
                <div className="flex gap-4">
                  <button
                    className={`flex-1 px-4 py-2 rounded-xl bg-${
                      post.gradient.split('-')[1]
                    }-500/10 text-${
                      post.gradient.split('-')[1]
                    }-400 hover:bg-${
                      post.gradient.split('-')[1]
                    }-500/20 transition-colors flex items-center justify-center gap-2`}
                  >
                    <Share2 className="h-5 w-5" />
                    Compartir
                  </button>
                  <button
                    className={`flex-1 px-4 py-2 rounded-xl bg-${
                      post.gradient.split('-')[1]
                    }-500/10 text-${
                      post.gradient.split('-')[1]
                    }-400 hover:bg-${
                      post.gradient.split('-')[1]
                    }-500/20 transition-colors flex items-center justify-center gap-2`}
                  >
                    <Bookmark className="h-5 w-5" />
                    Guardar
                  </button>
                </div>
              </GlassCard>

              {/* Related Posts */}
              <GlassCard className="p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">
                  Artículos Relacionados
                </h3>
                <div className="space-y-4">
                  {blogPosts
                    .filter((p) => p.id !== post.id)
                    .slice(0, 3)
                    .map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        to={`/blog/${relatedPost.id}`}
                        className="block group"
                      >
                        <div className="flex gap-4">
                          <div className="w-20 h-20 rounded-lg overflow-hidden">
                            <img
                              src={relatedPost.image}
                              alt={relatedPost.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-200 group-hover:text-white transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <p className="text-sm text-gray-400">
                              {relatedPost.readTime}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;