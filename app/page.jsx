import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>SHCA – 7 Hills Chess Academy, Tirupati</title>
        <meta name="description" content="Join Tirupati’s most trusted chess academy. Beginner to advanced level coaching available." />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen text-white flex items-center justify-center text-center" style={{ backgroundImage: "url('/image1.jpg')" }}>
        <div className="bg-transparent p-8 rounded-lg max-w-xl">
          <h1 className="text-5xl mb-4">♟️ Welcome to SHCA</h1>
          <p className="text-xl mb-8">
            Empowering the next generation of chess champions from the heart of Tirupati.
          </p>
          <Link href="/contact">
            <button className="px-6 py-3 text-lg font-bold bg-yellow-400 text-black rounded hover:bg-yellow-300">
              📝 Book a Free Trial
            </button>
          </Link>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="min-h-screen bg-white flex justify-center items-center p-8">
        <div className="text-center max-w-5xl w-full">
          <h2 className="text-3xl mb-12">
            Why Choose <span className="text-yellow-700">SHCA?</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Point 1 */}
            <div>
              <img src="/trophy.png" alt="Experienced Coaches" width="60" className="mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Experienced Coaches</h3>
              <p>Our trainers include FIDE-rated professionals and national-level mentors.</p>
            </div>

            {/* Point 2 */}
            <div>
              <img src="/trophy.png" alt="Proven Results" width="60" className="mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Proven Results</h3>
              <p>SHCA students consistently win at district, state, and national tournaments.</p>
            </div>

            {/* Point 3 */}
            <div>
              <img src="/trophy.png" alt="Structured Curriculum" width="60" className="mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Structured Curriculum</h3>
              <p>Step-by-step levels from beginner to advanced, designed for every age group.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
