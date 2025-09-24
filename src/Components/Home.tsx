"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Home = () => {
  const images = ["/Image/Home.jpg", "/Image/Home2.webp", "/Image/Home3.webp"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 7000); // كل 7 ثواني
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="w-full h-screen relative overflow-hidden">
      {/* Background Image Slider */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={img} alt="Home Image" fill className="object-cover" />
        </div>
      ))}

      {/* Text Content */}
      <div className="z-40 absolute top-3/5 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-Whitey Bigshadow">
        <h1 className="text-5xl">introduce to Coffee shop brand</h1>
        <h2 className="text-nowrap my-4 mb-6 text-4xl">
          an iconic NYC experience, enjoyed from home.
        </h2>
        <a
          href="3"
          className="p-4 rounded-lg bg-Assend border-2 border-Whitey text-md"
        >
          Show menu
        </a>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-6xl z-40 text-Whitey Flexy gap-1.5">
        {images.map((_, i) => (
          <span
            key={i}
            className={`transition-all ${
              i === current ? "opacity-100" : "opacity-35"
            }`}
          >
            .
          </span>
        ))}
      </div>
    </section>
  );
};

export default Home;
