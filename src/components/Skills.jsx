import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import FireBase from "../assets/firebase.png";
import Typescript from "../assets/typescript.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import GitHub from "../assets/github.png";
import MySQL from "../assets/mysql.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f]  text-gray-300 w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#238CD8]">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#050c16] hover:scale-110 duration-500 py-2">
            <img src={ReactImg} alt="HTML" className="w-20 mx-auto" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#050c16] hover:scale-110 duration-500 py-2">
            <img src={JavaScript} alt="HTML" className="w-20 mx-auto" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#050c16] hover:scale-110 duration-500 py-2">
            <img src={HTML} alt="HTML" className="w-20 mx-auto" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#050c16] hover:scale-110 duration-500 py-2">
            <img src={CSS} alt="HTML" className="w-20 mx-auto" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#050c16] hover:scale-110 duration-500 py-2">
            <img src={Typescript} alt="HTML" className="w-20 mx-auto" />
            <p className="my-4">TYPESCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#050c16] hover:scale-110 duration-500 py-2">
            <img src={MySQL} alt="HTML" className="w-20 mx-auto" />
            <p className="my-4">MYSQL</p>
          </div>
          <div className="shadow-md shadow-[#050c16] hover:scale-110 duration-500 py-2">
            <img src={Mongo} alt="HTML" className="w-20 mx-auto" />
            <p className="my-4">MONGODB</p>
          </div>
          <div className="shadow-md shadow-[#050c16] hover:scale-110 duration-500 py-2">
            <img src={GitHub} alt="HTML" className="w-20 mx-auto" />
            <p className="my-4">GITHUB</p>
          </div>
         
          <div className="shadow-md shadow-[#050c16] hover:scale-110 duration-500 py-2">
            <img src={Tailwind} alt="HTML" className="w-20 mx-auto" />
            <p className="my-4">TAILWIND CSS</p>
          </div>

          <div className="shadow-md shadow-[#050c16] hover:scale-110 duration-500 py-2">
            <img src={FireBase} alt="HTML" className="w-20 mx-auto" />
            <p className="my-4">FIREBASE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
