import React from "react";
import CryptoChecker from "../assets/cryptoChecker.png";
import Wordle from "../assets/wordle.png";
import SocialMedia from "../assets/socialMedia.png";
import Portfolio from "../assets/portfolio.png";

const Projects = () => {
  return (
    <div
      name="Projects"
      className="bg-[#0a192f] w-full md:h-screen text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#238CD8]">
            Projects
          </p>
          <p className="py-6">// Check out some of my recent projects</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Wordle})` }}
            className="shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Wordle Clone
              </span>
              <div className="pt-8 text-center">
                <a href="https://danielcd16.github.io/wordle/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold ">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Danielcd16/wordle">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
           {/* Grid Item */}
           <div
            style={{ backgroundImage: `url(${CryptoChecker})` }}
            className="shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Crypto Checker
              </span>
              <div className="pt-8 text-center">
                <a href="https://danielcd16.github.io/cryptoChecker/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold ">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Danielcd16/cryptoChecker">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${SocialMedia})` }}
            className="shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Social Media
              </span>
              <div className="pt-8 text-center">
                <a href="https://social-media-react-3e645.web.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold ">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Danielcd16/socialMedia">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Portfolio})` }}
            className="shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                My Portfolio
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold ">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Danielcd16/portfolio">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
