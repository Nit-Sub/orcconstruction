import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/FooterCard.module.css'

const FooterCard = ({ title, contact }) => {
    return (
        <>
            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.iconcard}>
                        <FontAwesomeIcon icon={faPhone} className={styles.font} />
                        </div>
                        </div>
                <div className={styles.column}>
                    <div className={styles.callus}>
                        <h6>{title}</h6>
                        <p>{contact}</p>
                        </div>
                        
                    </div>
                    <div className={styles.divider}></div>
                   
                </div>
            
        </>
    )
}

export default FooterCard