import React from "react";

const Contact = () => {
  return (
    <section className="section lg:mt-20 lg:pb-[100px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-[74px] bg-no-repeat bg-center bg-cover min-h-[650px]">
          {/* text */}
          <div className="flex-1 flex flex-col justify-center pl-8 ">
            <h2 className="mb-3 lg:mb-7 lg:text-4xl font-bold text-black text-2xl mt-12">
              Contáctanos
            </h2>
            <p className="mb-7 lg:mb-0 text-2xl text-whgray-400ite drop-shadow-2xl ">
              Trabajemos juntos hacia un futuro con más algas.
            </p>
          </div>

          {/* form */}
          <form className="bg-contact bg-no-repeat bg-center bg-cover flex-1 shadow-2xl p-5 lg:p-12 flex flex-col gap-y-5 max-h-[650px] backdrop-blur-lg rounded-md">
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
            <button className="btn btn-lg bg-gray-600 text-white hoveR:bg-gray-800">
              Contact Us
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
