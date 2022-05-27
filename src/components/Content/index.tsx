import React, { FC, ReactNode } from "react";
import styles from './styles.module.scss'

type TProps = {
  title: string
  text: ReactNode
}

const Cotent:FC<TProps> = ({title, text}) => {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      {text}
    </div>
  )
}

export default Cotent;