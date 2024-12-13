import { Award, Download } from 'lucide-react';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  skills: string[];
}

const certifications: Certification[] = [
  {
    id: '1',
    title: 'Advanced Web Development',
    issuer: 'EduPortal Academy',
    date: '2024-02-15',
    image: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931',
    skills: ['React', 'TypeScript', 'Node.js'],
  },
  {
    id: '2',
    title: 'Machine Learning Fundamentals',
    issuer: 'EduPortal Academy',
    date: '2024-01-20',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb',
    skills: ['Python', 'TensorFlow', 'Data Analysis'],
  },
  {
    id: '3',
    title: 'Data Structures & Algorithms',
    issuer: 'EduPortal Academy',
    date: '2023-12-10',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea',
    skills: ['Algorithms', 'Problem Solving', 'Java'],
  },
];

export default function Certifications() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Certifications</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">{cert.title}</h3>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                </div>
                <Award className="h-6 w-6 text-indigo-600" />
              </div>

              <div className="mt-4 text-sm text-gray-600">
                Issued on: {new Date(cert.date).toLocaleDateString()}
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-900">Skills</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <button className="mt-6 w-full flex items-center justify-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                <Download className="h-4 w-4" />
                <span>Download Certificate</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}