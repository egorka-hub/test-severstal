import React    from "react";

import styles   from './index.module.scss'

export const Container = ({children}: {children: React.ReactElement | React.ReactElement[]}) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
