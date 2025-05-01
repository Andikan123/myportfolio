import React from "react";
import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <article className="text-center md:text-left">
          <SectionTitle value="A Little About Me" />
          
          <p className="mt-6 text-lg leading-relaxed">
            Hey, I'm <span className="font-semibold text-emerald-400">Andikan</span> — a passionate <span className="text-emerald-500">front-end developer</span> with a love for turning creative ideas into functional and interactive digital experiences. 
          </p>

          <p className="mt-4 text-lg leading-relaxed">
            My journey into development is driven by curiosity, problem-solving, and a desire to make things look and feel great. With every line of code, I strive to create engaging, seamless user interfaces.
          </p>

          <p className="mt-4 text-lg leading-relaxed">
            When I'm not immersed in code, you'll find me learning new technologies, exploring innovative design concepts, or even enjoying a cup of coffee while brainstorming new ideas.
          </p>
        </article>

        <div className="hidden md:block">
          <img src={aboutSvg} alt="Coding Illustration" className="w-full h-80 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default About;
