import { NavLink } from 'react-router-dom';
import { Button } from '../button/Button';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const HeaderNavbar = () => {
  const [title, setTitle] = useState('light');
  const { toggleTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setTitle((prev) => (prev === 'light' ? 'dark' : 'light'));
    toggleTheme();
  };

  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <Button onClick={handleClick}>{title}</Button>
    </>
  );
};
