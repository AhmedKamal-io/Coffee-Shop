import React from "react";

const Contact = () => {
  return (
    <section className="relative text-center p-12 pt-16 bg-Whitey text-Blacky Flexy flex-col">
      <h1 className="text-3xl ">connect with us</h1>
      <p className="text-[13px] my-4 text-BlackyFade1">
        sign up for %10 off your next order, plus first access to the latest
        news , coffee releases , merchandise and more!
      </p>
      <form action="" className="Flexy gap-0">
        <input
          type="text"
          className="border-2 border-Blacky p-2"
          placeholder="Enter Your Email"
        />
        <button className="text-Whitey bg-Blacky p-2 border-2 border-Blacky">
          subscribe
        </button>
      </form>
    </section>
  );
};

export default Contact;
