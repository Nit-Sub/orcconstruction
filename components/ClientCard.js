import React from 'react';
import styles from "@/styles/ClientCard.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const ClientCard = ({font , count , number , name}) => {
    return (
        <div className={styles.main}>
            <div className={styles.circle}>
                <FontAwesomeIcon icon={font} className={styles.font} />
                </div>
                <h3 className={styles.h3}>{count}</h3>
                
                <h6 className={styles.h6}><span className={styles.span}>{number}.</span> {name}</h6>
            
        </div>)
}

export default ClientCard