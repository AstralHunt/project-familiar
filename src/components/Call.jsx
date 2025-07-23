import React from 'react';

const Call = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center w-full h-full p-8">
        <div className="flex basis-1/2 w-full"></div>
        <div className="flex basis-1/2 flex-col items-start justify-center gap-4 w-full">
          <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
          <form className="w-full max-w-lg space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
            ></textarea>
            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Call;
