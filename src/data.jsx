import { nanoid } from 'nanoid';
import { FaDatabase, FaGithub, FaHtml5, FaJs, FaReact, FaRoute } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import mixSnip from './assets/drnkmix.PNG'
import schoolSnip from './assets/schoolsnip.PNG'
import { SiRedux } from 'react-icons/si';


export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
    proficiency: 90,},
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
    proficiency: 90,},
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
    proficiency: 90, },
  {
    id: nanoid(),
    title: 'Tailwind',
    icon: <SiTailwindcss className='h-16 w-16 text-emerald-500' />,
    text: 'I use Tailwind CSS to build sleek, responsive UIs with speed and precision—my go-to for writing clean, maintainable styles.',
    proficiency: 90, },
  {
    id: nanoid(),
    title: 'React-router-dom',
    icon: <FaRoute className='h-16 w-16 text-emerald-500' />,
    text: 'React Router DOM allows me to manage complex app structures effortlessly while keeping the UI consistent and dynamic.',
    proficiency: 90, },
  {
    id: nanoid(),
    title: 'React Query',
    icon: <FaDatabase className='h-16 w-16 text-emerald-500' />,
    text: 'Experienced in managing server-state efficiently with React Query, ensuring fast and optimized data fetching.',
    proficiency: 90, },
  {
    id: nanoid(),
    title: 'Github',
    icon: <FaGithub  className='h-16 w-16 text-emerald-500' />,
    text: 'Proficient in version control using Git and GitHub, including managing repositories, branches, pull requests, and collaboration with teams.',
    proficiency: 90, },
  {
  id: nanoid(),
  title: 'Redux Toolkit',
  icon: <SiRedux className="h-16 w-16 text-emerald-500" />,
  text: 'Skilled in managing global state efficiently using Redux Toolkit, including slices, reducers, async thunks, and seamless integration with React apps.',
  proficiency: 85,
}

];

export const projects = [
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'first project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'second project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: mixSnip,
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/Andikan123/andyMix',
    title: 'Cocktail mixmaster',
    text: 'Cocktail Mix Master is a sleek and responsive web application that allows users to explore a vast collection of cocktail recipes. Users can search by drink name or ingredient, view detailed instructions, and discover random cocktails with just a click.',
  },
  {
    id: nanoid(),
    img: schoolSnip,
    url: 'https://andikanschool.netlify.app/',
    github: 'https://github.com/Andikan123/Andikanschool',
    title: 'School System',
    text: 'A modern web application built with React and Redux for managing student, teacher, and staff data. It features a responsive dashboard, profile pages, attendance tracking, and dynamic forms for adding, updating, and deleting records. The app also includes theme toggling, search functionality, and a sleek UI optimized for both desktop and mobile devices.',
  },
];
