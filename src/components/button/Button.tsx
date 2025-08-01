import { useContext, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, className, ...rest }: ButtonProps) => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <button className={`${className || ''}`} {...rest}>
      {children}
    </button>
  );
};
