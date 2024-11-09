import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-emerald-400" />
                <span>contacto@eduplatform.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-emerald-400" />
                <span>+34 900 123 456</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-emerald-400" />
                <span>Calle Principal 123, Madrid</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Suscríbete para recibir las últimas actualizaciones</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-2 rounded-l-md text-gray-900 focus:outline-none"
              />
              <button className="bg-emerald-600 px-4 py-2 rounded-r-md hover:bg-emerald-700 transition-colors">
                Suscribir
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} EduPlatform. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;