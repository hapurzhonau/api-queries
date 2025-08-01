import { Outlet } from 'react-router-dom';
import { HeaderNavbar } from '../components/navigation/HeaderNavbar';
import { ThemeContext } from '../context/ThemeContext';
import { useState } from 'react';

export const Layout = () => {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');
  const handleToggleTheme = () => {
    setCurrentTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };
  return (
    <ThemeContext
      value={{ theme: currentTheme, toggleTheme: handleToggleTheme }}
    >
      <div>
        <header className="p-4 bg-gray-700 text-white flex gap-4">
          <HeaderNavbar />
        </header>

        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </ThemeContext>
  );
};
