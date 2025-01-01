'use client';

import { useTheme } from '../lib/ThemeContext';
import { Switch } from '@headlessui/react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'; // Icons for better UI

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center space-x-3">
      {/* Sun Icon */}
      <SunIcon
        className={`h-5 w-5 transition-colors duration-300 ${
          theme === 'light' ? 'text-yellow-500' : 'text-gray-400'
        }`}
      />

      {/* Toggle Switch with Ripple */}
      <Switch
        checked={theme === 'dark'}
        onChange={toggleTheme}
        className={`${
          theme === 'dark' ? 'bg-blue-600' : 'bg-gray-200'
        } relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
      >
        <span
          className={`${
            theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
          } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300`}
        />
        <span className="absolute inset-0 flex justify-center items-center">
          <span className="ripple"></span>
        </span>
      </Switch>

      {/* Moon Icon */}
      <MoonIcon
        className={`h-5 w-5 transition-colors duration-300 ${
          theme === 'dark' ? 'text-blue-500' : 'text-gray-400'
        }`}
      />
    </div>
  );
};

export default ThemeSwitcher;