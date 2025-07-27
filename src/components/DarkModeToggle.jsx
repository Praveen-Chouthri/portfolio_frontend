import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className={`
        relative w-12 h-6 rounded-full transition-all duration-300 ease-in-out
        ${isDarkMode 
          ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
          : 'bg-gray-300 hover:bg-gray-400'
        }
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        dark:focus:ring-offset-gray-800
      `}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div
        className={`
          absolute top-0.5 left-0.5 w-5 h-5 rounded-full 
          transition-all duration-300 ease-in-out
          flex items-center justify-center
          ${isDarkMode 
            ? 'translate-x-6 bg-gray-900' 
            : 'translate-x-0 bg-white'
          }
          shadow-lg
        `}
      >
        {isDarkMode ? (
          <Moon size={12} className="text-blue-400" />
        ) : (
          <Sun size={12} className="text-yellow-500" />
        )}
      </div>
    </button>
  );
};

export default DarkModeToggle;