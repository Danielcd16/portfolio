import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Typescript from "../assets/typescript.png";
import Mongo from "../assets/mongo.png";
import GitHub from "../assets/github.png";
import MySQL from "../assets/mysql.png";
import Python from "../assets/python.png";
import Django from "../assets/django.png";



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
            <img src={ReactImg} alt="React" className="w-20 mx-auto" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#050c16] hover:scale-110 duration-500 py-2">
            <img src={JavaScript} alt="Javascript" className="w-20 mx-auto" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#050c16] hover:scale-110 duration-500 py-2">
            <img src={HTML} alt="HTML" className="w-20 mx-auto" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#050c16] hover:scale-110 duration-500 py-2">
            <img src={CSS} alt="CSS" className="w-20 mx-auto" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#050c16] hover:scale-110 duration-500 py-2">
            <img src={Typescript} alt="Typescript" className="w-20 mx-auto" />
            <p className="my-4">TYPESCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#050c16] hover:scale-110 duration-500 py-2">
            <img src={Python} alt="Python" className="w-20 mx-auto" />
            <p className="my-4">PYTHON</p>
          </div>
          <div className="shadow-md shadow-[#050c16] hover:scale-110 duration-500 py-2">
            <img src={Django} alt="Django" className="w-20 mx-auto" />
            <p className="my-4">DJANGO</p>
          </div>
          <div className="shadow-md shadow-[#050c16] hover:scale-110 duration-500 py-2">
            <img src={MySQL} alt="MySQL" className="w-20 mx-auto" />
            <p className="my-4">MYSQL</p>
          </div>
          <div className="shadow-md shadow-[#050c16] hover:scale-110 duration-500 py-2">
            <img src={Mongo} alt="MongoDB" className="w-20 mx-auto" />
            <p className="my-4">MONGODB</p>
          </div>
          <div className="shadow-md shadow-[#050c16] hover:scale-110 duration-500 py-2">
            <img src={GitHub} alt="Github" className="w-20 mx-auto" />
            <p className="my-4">GITHUB</p>
          </div>
      
          
        </div>
      </div>
    </div>
  );
};

export default Skills;
