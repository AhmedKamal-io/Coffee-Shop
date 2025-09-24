import Image from "next/image";
import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Emily Johnson",
    role: "Coffee Enthusiast",
    image: "/Image/User2.webp",
    text: "Best coffee I’ve ever had in New York! The aroma, the taste, everything feels premium and fresh.",
  },
  {
    name: "Michael Brown",
    role: "Local Guide",
    image: "/Image/User1.webp",
    text: "Their beans are roasted to perfection. I love starting my mornings with their espresso blend.",
  },
  {
    name: "Tom Martinez",
    role: "Food Blogger",
    image: "/Image/User3.webp",
    text: "A must-try for coffee lovers. Rich flavor and smooth texture — feels like New York in a cup!",
  },
  {
    name: "David Smith",
    role: "Barista Trainer",
    image: "/Image/User4.webp",
    text: "High-quality beans and excellent roasting. Definitely my go-to place for coffee supplies.",
  },
  {
    name: "Alex White",
    role: "Cafe Owner",
    image: "/Image/User5.webp",
    text: "My customers love the beans I get from here. The freshness and flavor are unbeatable!",
  },
  {
    name: "James Wilson",
    role: "Coffee Collector",
    image: "/Image/User6.webp",
    text: "Every cup tells a story. Their blends are unique and perfectly balanced.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#4b2e2e] via-[#8b5e3c] to-[#d4a373] relative">
      <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/90 text-black shadow-xl rounded-2xl p-6 flex flex-col items-center"
            >
              {/* صورة العميل */}
              <Image
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full mb-4 object-cover"
                width={64}
                height={64}
              />

              {/* أيقونة اقتباس */}
              <FaQuoteLeft className="text-[#8b5e3c] text-xl mb-3" />

              {/* النص */}
              <p className="italic mb-4 text-sm md:text-base">
                &quot;{t.text}&quot;
              </p>

              {/* نجوم التقييم */}
              <div className="flex text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* اسم + الدور */}
              <h4 className="font-semibold">{t.name}</h4>
              <span className="text-sm text-gray-600">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
