import React from "react";
import {
  FaCopyright,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-Blacky text-Whitey Flexy flex-col p-12">
      <div className="flex justify-between w-full items-center">
        <div className="Flexy flex-col ">
          <h2 className="text-2xl">shop</h2>
          <a href="" className="text-sm mt-4">
            coffee
          </a>
          <a href="" className="text-sm mt-4">
            Subscriptions
          </a>
          <a href="" className="text-sm mt-4">
            equapiment
          </a>
          <a href="" className="text-sm mt-4">
            merchandise
          </a>
        </div>
        {/*  */}
        <div className="Flexy flex-col">
          <h2 className="text-2xl">learn</h2>
          <a href="" className="text-sm mt-4">
            our story
          </a>
          <a href="" className="text-sm mt-4">
            whole sale
          </a>
          <a href="" className="text-sm mt-4">
            locations
          </a>
        </div>
        {/*  */}
        <div className="Flexy flex-col">
          <h2 className="text-2xl">support</h2>
          <a href="" className="text-sm mt-4">
            contact
          </a>
          <a href="" className="text-sm mt-4">
            careers
          </a>
          <a href="" className="text-sm mt-4">
            FAQ
          </a>
        </div>
        {/*  */}
        <div className="Flexy flex-col text-left">
          <h2 className="text-2xl">connect with us</h2>
          <p className="mt-4 text-[13px]">
            sign up for coffee tips, exclusive offers and news.
          </p>
          <form action="" className="Flexy mt-4">
            <input
              type="text"
              className="border-b-1 border-Whitey  "
              placeholder="Enter Your Email"
            />
            <FaEnvelope />
          </form>
          <div className="Flexy text-2xl mt-4 gap-4">
            <FaFacebook /> <FaInstagram />
          </div>
        </div>
      </div>
      <p className="text-[12px] Flexy pt-12 text-WhiteyFade1">
        <FaCopyright />
        2025 coffee shop co.
      </p>
    </section>
  );
};

export default Footer;
