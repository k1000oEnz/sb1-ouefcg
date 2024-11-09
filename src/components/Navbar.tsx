import React, { useState } from 'react';
import { LogOut, Menu, X, Bell } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

function Navbar() {
  const { logout, user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <img 
              src="https://raw.githubusercontent.com/stackblitz/stackblitz-codeflow/main/logo-fundacion-escolares.png" 
              alt="Fundación Escolares" 
              className="h-12"
            />
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavLink href="#actividades">Actividades</NavLink>
            <NavLink href="#blog">Blog</NavLink>
            <NavLink href="#emprendimiento">Emprendimiento</NavLink>
            <NavLink href="#institucion">Suma tu Institución</NavLink>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <button className="p-2 text-gray-500 hover:text-emerald-600 relative">
              <Bell className="h-6 w-6" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                <p className="text-xs text-gray-500">{user?.email}</p>
              </div>
              <button
                onClick={logout}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Salir
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#actividades">Actividades</MobileNavLink>
            <MobileNavLink href="#blog">Blog</MobileNavLink>
            <MobileNavLink href="#emprendimiento">Emprendimiento</MobileNavLink>
            <MobileNavLink href="#institucion">Suma tu Institución</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
    >
      {children}
    </a>
  );
}

export default Navbar;