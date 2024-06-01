import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeCotext';

export const Header = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  const handleLogout = () => {
    localStorage.removeItem('accessToken'); 
    localStorage.removeItem('theme')
    navigate('/');
  };

  return (
    <header className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/home" className="text-2xl font-bold">Notes</Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/active" className="text-lg font-semibold">Catatan Aktif</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-4"
          >
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};
