import React from 'react';
import { Book, Users, Clock, Star, Leaf, Droplet, Sun, Apple } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Apicultura Sostenible',
    description: 'Aprende técnicas modernas de apicultura y producción de miel orgánica',
    duration: '12 semanas',
    rating: 4.9,
    students: 834,
    level: 'Principiante',
    icon: Leaf,
    image: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 2,
    title: 'Viticultura y Producción de Vino',
    description: 'Gestión de viñedos y elaboración de vinos de calidad',
    duration: '16 semanas',
    rating: 4.8,
    students: 656,
    level: 'Intermedio',
    icon: Droplet,
    image: 'https://images.unsplash.com/photo-1597736115987-9262f9459ae4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 3,
    title: 'Agricultura Regenerativa',
    description: 'Técnicas de cultivo sostenible y regeneración de suelos',
    duration: '10 semanas',
    rating: 4.7,
    students: 1156,
    level: 'Avanzado',
    icon: Sun,
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 4,
    title: 'Fruticultura Orgánica',
    description: 'Cultivo y manejo de árboles frutales sin agroquímicos',
    duration: '14 semanas',
    rating: 4.9,
    students: 789,
    level: 'Intermedio',
    icon: Apple,
    image: 'https://images.unsplash.com/photo-1592491438683-c69ce2c9544f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  },
];

function CourseList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {courses.map((course) => (
        <div
          key={course.id}
          className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="relative h-48">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="px-3 py-1 bg-brand-green text-white text-sm font-medium rounded-full">
                {course.level}
              </span>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400" />
                <span className="ml-1 text-sm font-medium">{course.rating}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                {course.duration}
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{course.description}</p>
            
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center text-sm text-gray-500">
                <Users className="h-4 w-4 mr-1" />
                {course.students.toLocaleString()} estudiantes
              </div>
              <button className="px-4 py-2 bg-brand-green text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors duration-200">
                Comenzar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CourseList;