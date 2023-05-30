import React, {FC}              from "react";
import { Link as RouterLink }   from "react-router-dom";

import styles                   from './index.module.scss'

interface LinkProps {
  to: string;
  children: React.ReactElement | string;
}

export const Link: FC<LinkProps> = ({to, children}) => {
  return (
    <div>
      <RouterLink className={styles.link} to={to}>
          {children}
      </RouterLink>
    </div>
  )
}
