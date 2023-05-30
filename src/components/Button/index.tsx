import React, {FC}  from "react";

import styles       from './index.module.scss'

interface ButtonProps {
  onClick: () => void;
  children: string;
}

export const Button: FC<ButtonProps> = ({onClick, children}) => {
    return (
      <button
        className={styles.button}
        type='button'
        onClick={onClick}
      >
        {children}
      </button>
    )
}
