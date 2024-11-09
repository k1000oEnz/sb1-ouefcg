import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import Navbar from '../components/Navbar';
import CourseList from '../components/CourseList';
import Footer from '../components/Footer';
import { Leaf, Users, Sparkles, BookOpen } from 'lucide-react';

function HomePage() {
  const { user } = useAuth();

  const stats = [
    { icon: Leaf, label: 'Proyectos Rurales', value: '24' },
    { icon: Users, label: 'Estudiantes Activos', value: '2.4K' },
    { icon: Sparkles, label: 'Certificaciones', value: '156' },
    { icon: BookOpen, label: 'Horas Prácticas', value: '320' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-green to-emerald-800">
      <Navbar />
      
      <div className="relative">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
              ¡Bienvenido, {user?.name}!
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Explora nuestros cursos especializados en desarrollo rural y agricultura sostenible. Tu camino hacia el conocimiento práctico comienza aquí.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-white/70">{stat.label}</p>
                    <p className="mt-2 text-3xl font-semibold text-white">{stat.value}</p>
                  </div>
                  <stat.icon className="h-8 w-8 text-emerald-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Cursos Rurales Destacados
            </h2>
            <p className="mt-2 text-white/80">
              Formación especializada en agricultura y desarrollo rural sostenible
            </p>
          </div>
          <button className="px-6 py-3 bg-white text-emerald-800 rounded-full font-semibold hover:bg-emerald-50 transition-colors duration-200">
            Ver todos los cursos
          </button>
        </div>
        <CourseList />
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;