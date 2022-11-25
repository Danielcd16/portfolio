import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-[#0a192f] w-full h-screen flex justify-center items-center p-4"
    >
      <form method="POST" action="https://getform.io/f/c320659b-2cae-4531-bfc9-914fdb9d66c2" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#238CD8] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or send me an email - danielchacon1699@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        ></input>
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Email"
          name="email"
        ></input>
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#238CD8] hover:border-[#238CD8] px-4 py-3 my-8 mx-auto flex items-center">Send</button>
      </form>
    </div>
  );
};

export default Contact;
