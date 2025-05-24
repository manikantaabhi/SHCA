export default function AboutUs() {
  return (
    <div className="px-6 py-24 max-w-7xl mx-auto text-gray-800 space-y-24">
      <h1 className="text-4xl font-bold text-center">About 7 Hills Chess Academy</h1>

      {/* Intro Section */}
      <section className="text-center">
        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          At <span className="font-semibold text-yellow-600">7 Hills Chess Academy (SHCA)</span>, we are dedicated to
          nurturing the minds of future champions through the timeless game of chess. Located in Tirupati, Andhra Pradesh,
          SHCA offers structured training programs for beginners to advanced players, with a focus on skill, discipline, and sportsmanship.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">🎯 Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To empower young minds through quality chess education and build strategic thinking, patience, and
            perseverance in every learner.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">🌟 Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To be recognized as one of India's premier chess academies, where passion meets preparation, and
            every student is encouraged to pursue excellence both on and off the board.
          </p>
        </div>
      </section>

      {/* Achievements */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">🏆 Our Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <div>
            <h3 className="text-4xl font-bold text-yellow-500">400+</h3>
            <p className="text-sm text-gray-600 mt-2">Students Trained</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-yellow-500">50+</h3>
            <p className="text-sm text-gray-600 mt-2">Tournament Winners</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-yellow-500">10+</h3>
            <p className="text-sm text-gray-600 mt-2">Years of Excellence</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-yellow-500">100%</h3>
            <p className="text-sm text-gray-600 mt-2">Student Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Why Choose SHCA */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose SHCA?</h2>
        <div className="grid gap-12 md:grid-cols-3">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <h3 className="text-xl font-semibold mb-3">👨‍🏫 Expert Coaches</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Our trainers are FIDE-rated professionals and national-level mentors with years of experience in competitive chess and coaching.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <h3 className="text-xl font-semibold mb-3">📈 Proven Track Record</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Students from SHCA have won state and national level competitions with consistent performance and strong fundamentals.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <h3 className="text-xl font-semibold mb-3">📚 Structured Curriculum</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Our learning system is level-based, tracking progress from beginner to advanced with regular assessments and tournaments.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
