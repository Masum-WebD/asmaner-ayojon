import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold  text-gray-700"> Contact Us</h1>
      <div className="w-20 mb-5 lg:ml-[805px] sm:ml-[250px]  h-1 bg-[#FF87B7]"></div>
      <div className=" md:flex md:justify-center mb-6">
        <form action="">
          <label
            for=""
            class="block mb-2 text-lg font-bold  text-gray-900 dark:text-gray-300"
          >
            Your Name
          </label>
          <input
            type="text"
            aria-describedby="helper-text-explanation"
            class="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[450px] sm:w-[250px] p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type your name"
          />
          <label
            for=""
            class="block mb-2 text-lg font-bold  text-gray-900 dark:text-gray-300"
          >
            Your Email
          </label>
          <input
            type="email"
            aria-describedby="helper-text-explanation"
            class="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[450px] sm:w-[250px] p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type your Email"
          />

          <label
            for="message"
            class="block mb-2 text-lg font-bold  text-gray-900 dark:text-gray-300"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="4"
            class="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[450px] sm:w-[250px] p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave a comment..."
          ></textarea>
          <button
            type="button"
            class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-bold rounded-lg text-lg px-5 py-2.5  justify-items-start mb-2 mt-5"
          >
            Send Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
