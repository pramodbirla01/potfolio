import React from "react";

function Contact() {
  return (
    <div className="min-h-fit py-20 font-josefin bg-gradient-to-t from-violet-700 via-purple-900 to-indigo-950 flex justify-center items-center p-4">
      {/* Container for flex column alignment */}
      <div className="flex flex-col gap-10 justify-center items-center w-full max-w-3xl">
        {/* Heading outside the card and centered */}
        <h2 className="md:text-4xl text-2xl text-white font-bold mb-6 font-cinzel hover:font-josefin ">
          Feel free to contact
        </h2>

        {/* Card Container */}
        <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-md text-white p-8 w-full">
          {/* Form */}
          <form className="space-y-6">
            {/* Name Field */}
            <div className="relative">
              <label
                htmlFor="name"
                className="text-sm absolute top-0 left-0 transform -translate-y-4 translate-x-2 px-1 bg-transparent text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-transparent border-b border-white py-2 text-white focus:outline-none placeholder-transparent focus:border-orange-400 transition-all duration-300 ease-in-out"
                placeholder="Your Name"
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <label
                htmlFor="email"
                className="text-sm absolute top-0 left-0 transform -translate-y-4 translate-x-2 px-1 bg-transparent text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-transparent border-b border-white py-2 text-white focus:outline-none placeholder-transparent focus:border-orange-400 transition-all duration-300 ease-in-out"
                placeholder="Your Email"
              />
            </div>

            {/* Message Field */}
            <div className="relative">
              <label
                htmlFor="message"
                className="text-sm absolute top-0 left-0 transform -translate-y-4 translate-x-2 px-1 bg-transparent text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full bg-transparent border-b border-white py-2 text-white focus:outline-none placeholder-transparent focus:border-orange-400 transition-all duration-300 ease-in-out resize-none"
                placeholder="Your Message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="group bg-gradient-to-bl from-purple-900 via-purple-600 to-purple-900 text-white py-2 px-4 rounded-lg transition-colors shadow-md  shadow-black hover:shadow-none relative overflow-hidden"
              >
                {/* Text for the button */}
                <span className="group-hover:opacity-0 transition-opacity duration-300">Send Message</span>

                {/* Icon that will be displayed on hover */}
               
                <i className="ri-mail-send-line absolute left-14 text-xl top-1/4 animate-bounce transform  -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-100"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
