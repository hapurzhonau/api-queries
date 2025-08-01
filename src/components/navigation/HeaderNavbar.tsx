import { NavLink } from 'react-router-dom';
import { Button } from '../button/Button';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
export const HeaderNavbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const currentIcon = theme === 'dark' ? <SunIcon /> : <MoonIcon />;
  const handleClick = () => {
    toggleTheme();
  };
  return (
    <nav className="flex justify-between max-w-full w-full">
      <div className="flex gap-8">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
      <Button onClick={handleClick} className="border-0">
        {currentIcon}
      </Button>
    </nav>
  );
};
