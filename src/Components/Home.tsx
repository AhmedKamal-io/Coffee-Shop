import React from "react";
import Image from "next/image";
const Home = () => {
  return (
    <section className="w-full h-screen relative">
      <Image
        src="/Image/Home.jpg"
        alt="Home Image"
        fill
        className="object-cover z-0"
      />
      <div className="z-40 absolute top-3/5 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-Whitey Bigshadow">
        <h1 className="text-5xl">introduce to Coffee shop brand</h1>
        <h2 className="text-nowrap my-4 mb-6  text-4xl">
          an iconic NYC exprience, enjoyed from home.
        </h2>
        <a
          href="3"
          className="p-4  rounded-lg bg-Assend border-2 border-Whitey  text-md"
        >
          Show menu
        </a>
      </div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-6xl z-40 text-Whitey  Flexy gap-1.5">
        <span className="opacity-35">.</span>
        <span>.</span>
        <span className="opacity-35">.</span>
      </div>
    </section>
  );
};

export default Home;
