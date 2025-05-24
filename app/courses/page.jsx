'use client';

import Link from 'next/link';

export default function CoursesPage() {
  const courses = [
    {
      title: 'Beginner Level',
      description:
        'Ideal for kids and newcomers. Learn basic rules, piece movements, and opening principles. Includes fun puzzle-solving and introductory games.',
      duration: '8 weeks',
      price: '₹2,000',
    },
    {
      title: 'Intermediate Level',
      description:
        'For players with basic knowledge. Focus on tactics, openings, endgames, and strategy building. Weekly analysis and rapid-play practice.',
      duration: '10 weeks',
      price: '₹3,000',
    },
    {
      title: 'Advanced Level',
      description:
        'Meant for competitive players. Deep dive into tournament preparation, advanced tactics, game psychology, and regular mock tournaments.',
      duration: '12 weeks',
      price: '₹4,000',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-3 text-yellow-700">
              {course.title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              {course.description}
            </p>
            <Link href="/contact">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded text-sm">
                Enroll Now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
