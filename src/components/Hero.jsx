import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

export const Hero = () => {
  return (
    <div className='relative bg-gray-900 py-24 mt-17 overflow-hidden' id='home'>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-60 z-0" />

      {/* Content */}
      <div className='relative z-10 align-element grid md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-7xl font-extrabold tracking-wide animate-gradient animate-fade-in bg-gradient-to-r from-blue-500 via-gray-700 to-green-400 bg-clip-text text-transparent'>
            I'm Andikan
          </h1>

          <p className='mt-4 text-2xl font-semibold bg-gradient-to-r from-blue-400 via-green-400 to-emerald-500 bg-clip-text text-transparent animate-gradient'>
            Front-End Developer
          </p>

          <p className='mt-2 text-lg text-gray-300 italic'>
            Turning ideas into interactive realities.
          </p>

          <div className='flex gap-x-8 mt-4'>
            <a href="#">
              <FaGithubSquare className='h-8 w-8 text-gray-400 hover:text-white hover:scale-110 transform duration-300' />
            </a>
            <a href="#">
              <FaLinkedin className='h-8 w-8 text-gray-400 hover:text-white hover:scale-110 transform duration-300' />
            </a>
            <a href="#">
              <FaTwitterSquare className='h-8 w-8 text-gray-400 hover:text-white hover:scale-110 transform duration-300' />
            </a>
          </div>
        </article>

        <article className='hidden md:block'>
          <img src={heroImg} alt="heroImg" className='h-80 lg:h-96' />
        </article>
      </div>
    </div>
  );
};
