import React from 'react'
import styles from '@/styles/CoreValueCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';

const CoreValueCard = ({ fontdesign, title, paragraph }) => {
    return (
        <div className={styles.card}>
            <FontAwesomeIcon className={styles.icon} icon={fontdesign} />
            <h5 className={styles.title}>{title}</h5>
            <p className={styles.p}>{paragraph}</p>

        </div>

    )
}

export default CoreValueCard;
