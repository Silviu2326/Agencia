import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Información de la empresa */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-blue-500" />
              <span className="font-bold text-xl text-white">Webcraft</span>
            </Link>
            <p className="text-sm">
              Creando experiencias digitales excepcionales con rapidez y
              precisión.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="hover:text-blue-500 transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="hover:text-blue-500 transition-colors"
                >
                  Portafolio
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-500 transition-colors"
                >
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-blue-500 transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-white font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="hover:text-blue-500 transition-colors"
                >
                  Desarrollo web
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-blue-500 transition-colors"
                >
                  Landing pages
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-blue-500 transition-colors"
                >
                  Aplicaciones personalizadas
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-blue-500 transition-colors"
                >
                  Soluciones de comercio electrónico
                </Link>
              </li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contáctanos</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-500" />
                <a
                  href="mailto:contact@webcraft.com"
                  className="hover:text-blue-500 transition-colors"
                >
                  contact@webcraft.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-500" />
                <a
                  href="tel:+34683529629"
                  className="hover:text-blue-500 transition-colors"
                >
                  +34 683 52 96 29
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-500" />
                <span>Valencia, España</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} Webcraft. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
