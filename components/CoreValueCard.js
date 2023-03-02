import React from 'react'
import styles from '@/styles/CoreValueCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';

const CoreValueCard = () => {
  return (
    <div className={styles.card}>
                    <FontAwesomeIcon className={styles.icon} icon={faUserShield}/>
                    <h5 className={styles.title}>Safety</h5>
                    <p className={styles.p}>Safety will always come first as we strive for accident-free 
                        projects. Fusce tidunt
                         nis ace park norttito amet space.</p>
                    
               </div>
    
  )
}

export default CoreValueCard