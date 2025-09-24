import Image from "next/image";
import React from "react";

const posts = [
  {
    title: "5 Tips for Brewing the Perfect Espresso",
    date: "September 12, 2025",
    image: "/Image/Espresso.webp",
    excerpt:
      "Discover simple yet effective tricks to make your espresso richer, smoother, and bursting with flavor.",
  },
  {
    title: "Health Benefits of Freshly Roasted Coffee",
    date: "September 5, 2025",
    image: "/Image/Brain.webp",
    excerpt:
      "From boosting energy to providing antioxidants, learn why fresh coffee is more than just a morning ritual.",
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-Assend">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-WhiteyFade1 border-b-1 border-b-WhiteyFade1  pb-4">
          Coffee Blog & Tips
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <Image
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
                width={400}
                height={192}
              />
              <div className="p-6 text-left">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="font-semibold text-lg mb-3 text-[#2c1e1e]">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="text-[#4a3220] font-medium hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
