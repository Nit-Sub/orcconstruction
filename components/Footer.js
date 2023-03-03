import React from 'react'
import styles from '@/styles/Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className={styles.main}>
        <div className={styles.description}>
            <hr className={styles.hr}/>
            <FontAwesomeIcon icon={ faPhone} className={styles.font}/>
            

        </div>
    </div>
  )
}

export default Footer