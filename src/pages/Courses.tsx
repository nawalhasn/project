import { Filter, Search } from 'lucide-react';
import CourseCard from '../components/dashboard/CourseCard';

const courses = [
  {
    title: 'Advanced Web Development',
    instructor: 'Dr. Sarah Johnson',
    progress: 75,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    students: 1234,
    duration: '12 weeks',
    nextLesson: {
      title: 'React Hooks Deep Dive',
      time: 'Today, 2:00 PM',
    },
  },
  {
    title: 'Machine Learning Fundamentals',
    instructor: 'Prof. Michael Chen',
    progress: 45,
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c',
    students: 892,
    duration: '16 weeks',
    nextLesson: {
      title: 'Neural Networks',
      time: 'Tomorrow, 10:00 AM',
    },
  },
  {
    title: 'Data Structures & Algorithms',
    instructor: 'Dr. Alex Thompson',
    progress: 90,
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea',
    students: 2156,
    duration: '10 weeks',
    nextLesson: {
      title: 'Graph Algorithms',
      time: 'Today, 4:30 PM',
    },
  },
  {
    title: 'Mobile App Development',
    instructor: 'Prof. Emily White',
    progress: 30,
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
    students: 1567,
    duration: '14 weeks',
    nextLesson: {
      title: 'UI/UX Design Principles',
      time: 'Tomorrow, 1:00 PM',
    },
  },
];

export default function Courses() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">My Courses</h1>
        <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          <Filter className="h-4 w-4" />
          <span>Filters</span>
        </button>
      </div>

      <div className="relative w-full max-w-xl">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Search courses..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.title} {...course} />
        ))}
      </div>
    </div>
  );
}