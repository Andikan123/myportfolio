import React from 'react';

const SkillCard = ({ icon, title, text }) => {
  return (
    <article className="relative p-6 rounded-xl bg-gray-900 text-white group hover:shadow-xl transition-all duration-300">
  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-500 blur-lg opacity-25 group-hover:opacity-100 transition duration-1000 rounded-xl"></div>
  <div className="relative z-10">
    <span className="text-4xl">{icon}</span>
    <h4 className="mt-4 text-xl font-bold">{title}</h4>
    <p className="mt-2 text-slate-400 hover:text-slate-800 duration-300">{text}</p>
  </div>
</article>
  );
};

export default SkillCard;
