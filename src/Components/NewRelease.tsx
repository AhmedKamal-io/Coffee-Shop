import React from "react";
import Image from "next/image";

const NewRelease = () => {
  return (
    <section className="p-12 Flexy flex-col gap-8 border-b-2 border-Blacky ">
      <div className="Flexy gap-4">
        <div className="relative w-[320px] h-[400px] ">
          <Image
            src={`/Image/Latte.jpeg`}
            alt="coffee"
            fill
            className="object-cover"
          />
          <h2 className="absolute bottom-3 left-[34%] p-3 border-2 border-Whitey text-Whitey text-center rounded-lg w-[120px] text-nowrap">
            shop coffee
          </h2>
        </div>
        <div className="relative w-[320px] h-[400px] ">
          <Image
            src={`/Image/Bag2.webp`}
            alt="coffee"
            fill
            className="object-cover"
          />
          <h2 className="absolute bottom-3 left-[34%] p-3 border-2 border-Whitey text-Whitey text-center rounded-lg w-[120px] text-nowrap">
            shop coffee
          </h2>
        </div>
        <div className="relative w-[320px] h-[400px] ">
          <Image
            src={`/Image/Machine.webp`}
            alt="coffee"
            fill
            className="object-cover"
          />
          <h2 className="absolute bottom-3 left-[34%] p-3 border-2 border-Whitey text-Whitey text-center rounded-lg w-[120px] text-nowrap">
            shop merch
          </h2>
        </div>
      </div>
      {/* bottom */}
      <div className="Flexy flex-col">
        <h1 className="text-2xl mt-10 mb-6">New release</h1>
        <a href="3" className="border-1 border-Blacky px-4 py-2 rounded-lg">
          veiw All
        </a>
      </div>

      <div className="relative  Flexy gap-9 w-[95%]">
        <div className="Flexy flex-col w-[250px] h-[400px]">
          <div className="w-[200px] h-[250px] relative">
            <Image
              src={`/Image/Pack1.webp`}
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <h3 className="my-3 text-xl">colombia beans</h3>
          <span>$27.99</span>
        </div>
        <div className="Flexy flex-col">
          <div className="w-[200px] h-[250px] relative">
            <Image
              src={`/Image/Pack3.webp`}
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <h3 className="my-3 text-xl">Brazil beans</h3>
          <span>$23.99</span>
        </div>
        <div className="Flexy flex-col">
          <div className="w-[200px] h-[250px] relative">
            <Image
              src={`/Image/Pack2.jpg`}
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <h3 className="my-3 text-xl">Arabica beans</h3>
          <span>$44.99</span>
        </div>
      </div>
    </section>
  );
};

export default NewRelease;
