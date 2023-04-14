import React from 'react'
import styles from './styles.module.css'

export const Button1 = (props) => {
  // return <button className={`${styles.btn}}`}>{text}</button>
  return (
    <button onClick={props.onClick} className={styles.button1}>
      <span>{props.text}</span>
    </button>
  );
}

export const Button2 = (props) => {
  return (
    <nav onClick={props.onClick} className={styles.button2}>
      <ul>
        <li>
          {props.text}
          <span></span><span></span><span></span><span></span>
        </li>
      </ul>
    </nav>
  );
}

export const Button3 = (props) => {
  return (
    <button onClick={props.onClick} className={`${styles.button3} ${styles.blue}`}>
      {props.text}
    </button>
  );
}