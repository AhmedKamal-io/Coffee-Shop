import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const NewRelease = () => {
  return (
    <section className="p-12 Flexy flex-col gap-8 border-b-2 border-Blacky ">
      {/* top section */}
      <div className="Flexy gap-4">
        <div className="relative w-[320px] h-[400px] group overflow-hidden rounded-lg">
          <Image
            src={`/Image/Latte.jpeg`}
            alt="coffee"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <h2 className="absolute bottom-3 left-[34%] p-3 border-2 border-Whitey text-Whitey text-center rounded-lg w-[120px] text-nowrap bg-Blacky/40 backdrop-blur-sm">
            shop coffee
          </h2>
        </div>
        <div className="relative w-[320px] h-[400px] group overflow-hidden rounded-lg">
          <Image
            src={`/Image/Bag2.webp`}
            alt="coffee"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <h2 className="absolute bottom-3 left-[34%] p-3 border-2 border-Whitey text-Whitey text-center rounded-lg w-[120px] text-nowrap bg-Blacky/40 backdrop-blur-sm">
            shop coffee
          </h2>
        </div>
        <div className="relative w-[320px] h-[400px] group overflow-hidden rounded-lg">
          <Image
            src={`/Image/Machine.webp`}
            alt="coffee"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <h2 className="absolute bottom-3 left-[34%] p-3 border-2 border-Whitey text-Whitey text-center rounded-lg w-[120px] text-nowrap bg-Blacky/40 backdrop-blur-sm">
            shop merch
          </h2>
        </div>
      </div>

      {/* bottom title */}
      <div className="Flexy flex-col">
        <h1 className="text-2xl mt-10 mb-6">New release</h1>
        <a
          href="3"
          className="border-1 border-Blacky px-4 py-2 rounded-lg hover:underline"
        >
          view All
        </a>
      </div>

      {/* products */}
      <div className="relative Flexy gap-9 w-[95%] flex-wrap">
        {[
          { name: "Colombia Beans", price: "$27.99", img: "/Image/Pack1.webp" },
          { name: "Brazil Beans", price: "$23.99", img: "/Image/Pack3.webp" },
          { name: "Arabica Beans", price: "$44.99", img: "/Image/Pack2.jpg" },
        ].map((item, i) => (
          <div
            key={i}
            className="Flexy flex-col w-[250px] h-[420px] bg-Whitey/10 rounded-lg shadow-md p-3 hover:shadow-lg transition-shadow"
          >
            <div className="w-[200px] h-[250px] relative overflow-hidden rounded-lg group">
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <span className="absolute top-2 left-2 bg-BlackyFade1 text-Whitey px-2 py-1 text-xs rounded-md">
                New
              </span>
            </div>
            <h3 className="my-3 text-xl">{item.name}</h3>
            <span className="mb-2">{item.price}</span>
            {/* تقييم نجوم */}
            <div className="flex text-yellow-500 mb-3">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            {/* زرار شراء */}
            <button className="border border-Blacky px-4 py-2 rounded-lg hover:bg-Blacky hover:text-Whitey transition-colors">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewRelease;
