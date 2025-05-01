import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

const ProjectCard = ({ url, img, title, text, github }) => {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 group">
      <div className="overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 group-hover:text-emerald-600 transition">
          {title}
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">{text}</p>

        <div className="flex items-center gap-x-6 mt-6">
          <a href={url} target="_blank" rel="noreferrer">
            <TbWorldWww className="h-8 w-8 text-gray-400 hover:text-emerald-600 transition" />
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            <FaGithubSquare className="h-8 w-8 text-gray-400 hover:text-emerald-600 transition" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
