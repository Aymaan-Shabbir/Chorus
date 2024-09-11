import React from "react";
import { Button } from "./ui/moving-border";

function ContactForm() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black ">
      <form
        action="https://getform.io/f/awngollb"
        method="POST"
        className="w-full max-w-lg bg-gray-950 p-5 rounded-lg shadow-lg mt-9"
      >
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            name="Name"
            required
            placeholder="Enter your name"
            className="p-2 border border-gray-800 rounded text-white bg-black"
          />
          <input
            type="email"
            name="Email"
            required
            placeholder="Enter your email"
            className="p-2 border border-gray-800 rounded text-white bg-black"
          />
          <textarea
            name="Message"
            placeholder="Enter your query"
            required
            className="p-2 border border-gray-800 rounded text-white bg-black"
            rows={4}
          />
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="subscribe"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label htmlFor="subscribe" className="text-gray-700">
              Subscribe to newsletter
            </label>
          </div>
        </div>

        <Button
          type="submit"
          borderRadius="1rem"
          className=" p-1 bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;
