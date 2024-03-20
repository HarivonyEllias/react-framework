import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      className='block text-white !bg-primary transition-all hover:!bg-secondary focus:ring-4
        focus:outline-none focus:ring-blue-300 rounded-[2rem] font-semibold
        text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      type='button'
    >
      <FontAwesomeIcon icon={faPlus} /> {children}
    </motion.button>
  );
};

export default Button;
