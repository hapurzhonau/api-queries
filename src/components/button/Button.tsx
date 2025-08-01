import { useContext, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, className, ...rest }: ButtonProps) => {
  const { theme } = useContext(ThemeContext);
  const baseClasses =
    'border-2 rounded-sm px-3 bg-gray-700 cursor-pointer max-w-fit';

  const variants: Record<string, string> = {
    light: 'bg-gray-300 text-black hover:bg-gray-600',
    dark: 'bg-gray-700 text-white hover:bg-gray-500',
  };
  return (
    <button
      className={`${baseClasses} ${variants[theme]} ${className || ''}`}
      {...rest}
    >
      {children}
    </button>
  );
};
