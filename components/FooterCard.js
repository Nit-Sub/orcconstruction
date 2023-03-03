import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '@/styles/FooterCard.module.css'

const FooterCard = ({ title, contact, icon }) => {
    return (
        <>
            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.iconcard}>
                        <FontAwesomeIcon icon={icon} className={styles.font} />
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