'use client'
import Head from 'next/head';
import Link from 'next/link';

import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Mrs. Lakshmi",
    image: "/parents/parent.png",
    message:
      "SHCA has completely transformed my son's focus and confidence. The coaches are truly world-class and deeply committed.",
  },
  {
    name: "Mr. Arvind",
    image: "/parents/parent.png",
    message:
      "From beginner to tournament-ready in under a year! SHCA offers excellent structure, discipline, and chess values.",
  },
  {
    name: "Mrs. Deepa",
    image: "/parents/parent.png",
    message:
      "We love the personal attention each student gets. My daughter eagerly waits for every class. Highly recommend SHCA!",
  },
];


export default function Home() {
  const [current, setCurrent] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, 5000); // Auto-slide every 5 seconds
  return () => clearInterval(interval);
}, []);

  return (
    <>
      <Head>
        <title>SHCA – 7 Hills Chess Academy, Tirupati</title>
        <meta name="description" content="Join Tirupati’s most trusted chess academy. Beginner to advanced level coaching available." />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen text-white flex items-center justify-center text-center" style={{ backgroundImage: "url('/image1.jpg')" }}>
        <div className="bg-transparent p-8 rounded-lg max-w-xl">
          <h1 className="text-5xl mb-4">Welcome to SHCA</h1>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 py-10 px-4">
            {/* Point 1 */}
            {/* Point 1 */}
<div>
  <img src="/trophy.png" alt="Experienced Coaches" width="60" className="mx-auto" />
  <h3 className="mt-4 text-xl font-semibold text-center">Experienced Coaches</h3>
  <p>
    Our coaching team includes seasoned professionals, including FIDE-rated players and certified national-level mentors, each with years of experience training aspiring chess talents across India. They bring not only mastery of the game but also proven pedagogical methods to nurture growth in players of all levels.
  </p>
</div>

{/* Point 2 */}
<div>
  <img src="/trophy.png" alt="Proven Results" width="60" className="mx-auto" />
  <h3 className="mt-4 text-xl font-semibold text-center">Proven Results</h3>
  <p>
    SHCA students regularly shine at district, state, and national-level competitions. With a strong emphasis on game analysis, tournament readiness, and psychological preparation, we have helped over 50 students secure podium finishes and rankings in competitive circuits.
  </p>
</div>

{/* Point 3 */}
<div>
  <img src="/trophy.png" alt="Structured Curriculum" width="60" className="mx-auto" />
  <h3 className="mt-4 text-xl font-semibold text-center">Structured Curriculum</h3>
  <p>
    Our carefully designed curriculum spans from basic rules to advanced strategic concepts, segmented into levels suitable for children, teens, and adults. Each module includes theory, practical play, puzzle solving, and weekly assessments to track and accelerate progress.
  </p>
</div>

          </div>
        </div>
      </section>
{/* Scrolling Achievements / Gallery Section */}
<section className="bg-gray-100 h-screen py-12 flex flex-col justify-center">
  <h2 className="text-4xl text-center font-bold mb-10">Our Champions in Action</h2>

  <div className="relative overflow-x-auto overflow-y-hidden scroll-smooth px-6">
    <div className="flex gap-6 min-w-max">
      {[...Array(20).keys()].map((index) => (
       <div
       key={index}
       className={`min-w-[320px] h-[420px] bg-white rounded-xl shadow-lg p-4 text-center transition-transform hover:scale-105 float-card float-delay-${index % 5}`}
     >
     <img
            src={`/students/student${(index % 5) + 1}.jpeg`}

            alt={`Student ${index + 1}`}
            className="w-full h-60 object-cover rounded mb-4 pointer-events-none"
          />
          <h4 className="text-xl font-semibold">Player #{index + 1}</h4>
          <p className="text-sm text-gray-600 mt-2">District Winner, 2024</p>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="bg-white py-16 px-6">
  <h2 className="text-4xl font-bold text-center mb-12">What Parents Say</h2>

  <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 transition-all duration-500">
    {/* Left: Parent image */}
    <img
      src={testimonials[current].image}
      alt={testimonials[current].name}
      className="w-64 h-64 object-cover rounded-full shadow-md border-4 border-yellow-400"
    />

    {/* Right: Testimonial */}
    <div className="text-center md:text-left">
      <p className="text-lg italic text-gray-700 mb-6 max-w-xl">{testimonials[current].message}</p>
      <h4 className="text-xl font-semibold text-gray-900">– {testimonials[current].name}</h4>
    </div>
  </div>

  {/* Dots Navigation */}
  <div className="flex justify-center gap-3 mt-8">
    {testimonials.map((_, i) => (
      <button
        key={i}
        className={`w-3 h-3 rounded-full ${
          current === i ? "bg-yellow-500" : "bg-gray-300"
        }`}
        onClick={() => setCurrent(i)}
      />
    ))}
  </div>
</section>



    </>
  );
}
