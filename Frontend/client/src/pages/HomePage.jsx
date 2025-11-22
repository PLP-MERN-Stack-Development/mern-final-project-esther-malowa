import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faClock, faCertificate } from "@fortawesome/free-solid-svg-icons";

export default function HomePage() {
  const heroImages = [
    "/images/hero1.jpg",
    "/images/hero2.jpg",
    "/images/hero3.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % heroImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
  {heroImages.map((src, index) => (
    <img
      key={index}
      src={src}
      alt={`Slide ${index + 1}`}
      className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
        index === currentImageIndex
          ? "opacity-100 z-10"
          : "opacity-0 z-0 pointer-events-none"
      }`}
    />
  ))}

  <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-6">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      Learn Anytime, Anywhere
    </h1>
    <p className="text-lg md:text-xl mb-6 max-w-xl">
      Online courses from top instructors — build skills, get certified, and advance your career.
    </p>
  </div>
</section>


      {/* FEATURES */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Our Platform?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <FontAwesomeIcon icon={faGraduationCap} className="text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
            <p>Learn from industry leaders with hands-on experience.</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faClock} className="text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
            <p>Study at your own pace — anytime, from any device.</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faCertificate} className="text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Certification</h3>
            <p>Get certified and showcase your skills on your resume.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-green-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Learning?
        </h2>
        <p className="mb-6">
          Join thousands of students building their future with us.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-100 transition">
          Enroll Now
        </button>
      </section>

      <Footer />
    </>
  );
}
