import React from "react";

const Contact = () => {
  return (
    <section className="section lg:mt-20">
      <div className="container mx-auto">
        <div className="bg-whatis flex flex-col lg:flex-row lg:gap-x-[74px] bg-no-repeat bg-cover min-h-[650px]">
          {/* text */}
          <div className="flex-1 flex flex-col justify-center pl-8">
            <h2 className="mb-3 lg:mb-7 lg:text-4xl font-bold text-white text-2xl mt-12">
              Contact us and our specialists will help you
            </h2>
            <p className="mb-7 lg:mb-0 text-xl text-white drop-shadow-2xl">
              Our team of specialists, stand out for being the best in the
              market, your computer is safe with us
            </p>
          </div>

          {/* form */}
          <form className="flex-1 shadow-2xl p-5 lg:p-12 flex flex-col gap-y-5 max-h-[650px] backdrop-blur-lg">
            <input
              className="form-control shadow-lg"
              placeholder="First name"
              type="text"
              required
              name="name"
            />
            <input
              className="form-control shadow-lg"
              placeholder="Last name"
              type="text"
              required
              name="last"
            />
            <input
              className="form-control shadow-lg"
              placeholder="Email"
              type="email"
              required
              name="email"
            />
            <input
              className="form-control shadow-lg"
              placeholder="Phone"
              type="text"
              required
              name="phone"
            />

            <textarea
              className="form-control py-5 h-[165px] resize-none shadow-lg"
              placeholder="Message"
              name="message"
            ></textarea>
            <button className="btn btn-lg bg-gray-600 text-white hoveR:bg-gray-800">Contact Us</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
