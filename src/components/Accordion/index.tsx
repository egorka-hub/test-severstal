import React, {useState} from "react";

import styles from './index.module.scss'

interface AccordionProps {
  title: string
  content: React.ReactElement
}

export const Accordion: React.FC<AccordionProps> = ({content, title}) => {
  const [isOpened, setIsOpened] = useState<boolean>(false)

  const handleClick = () => setIsOpened(p => !p)

  return (
    <div className={styles.wrapper}>
      <div className={styles.title} onClick={handleClick}>{title}</div>
      {isOpened && (
        <div className={styles.content}>
          {content}
        </div>
      )}
    </div>
  )
}
