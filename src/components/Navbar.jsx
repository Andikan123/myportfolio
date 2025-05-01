import React, { useRef, useState } from 'react';
import { links } from '../data';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Close the menu when clicking outside the sidebar
  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setMenuOpen(false);
    }
  };
  // Add event listener for outside click
  React.useEffect(() => {
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside); // Clean up
  }, [menuOpen]);

  return (
    <nav className='fixed top-0 w-full z-50  backdrop-blur-md shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 py-4 flex items-center justify-between'>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
  <span className="text-white bg-gradient-to-r from-rose-500 to-emerald-500 px-2 py-1 rounded-lg shadow-lg">
    Andikan
  </span>
  <span className="ml-2 text-emerald-500 animate-pulse font-extrabold tracking-wider drop-shadow">
    Dev
  </span>
</h2>

        {/* Hamburger */}
        <button
          aria-label='Toggle menu'
          className='sm:hidden text-3xl text-gray-800'
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>

        {/* Desktop Links */}
        <div className='hidden sm:flex items-center gap-8'>
          {links.map(({ id, href, text }) => (
            <a
              key={id}
              href={href}
              className='text-lg capitalize font-medium text-gray-100 hover:text-emerald-600 transition-colors duration-300'
            >
              {text}
            </a>
          ))}
        </div>

        {/* Sidebar for Mobile */}
        <div
  ref={sidebarRef}
  className={`fixed top-0 right-0 h-full w-2/3 bg-gradient-to-b from-rose-300 via-white to-emerald-300 shadow-xl rounded-l-3xl backdrop-blur-md z-50 transform transition-transform duration-300 ease-in-out ${
    menuOpen ? 'translate-x-0' : 'translate-x-full'
  } sm:hidden`}
>
          <div className='flex justify-end p-4'>
            <button
              aria-label='Close menu'
              className='text-3xl'
              onClick={() => setMenuOpen(false)}
            >
              &times;
            </button>
          </div>
          <div className='flex flex-col items-center gap-6 mt-4 mx-4 p-6 rounded-2xl bg-white/10 shadow-xl backdrop-blur-md border border-rose-200'>
  {links.map(({ id, href, text }) => (
    <a
      key={id}
      href={href}
      onClick={() => setMenuOpen(false)}
      className=' w-[60%] text-center py-2 text-lg capitalize font-semibold  hover:text-white  bg-gradient-to-b  from-rose-300 via-white to-emerald-300 duration-300 text-gray-500 px-4 rounded-xl hover:bg-emerald-500 transition'
    >
      {text}
    </a>
  ))}
</div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
