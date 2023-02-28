import React from 'react'
import styles from "@/styles/Card.module.css";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
const Card = ({title, paragraph ,image}) => {
  return (
    <>
    <div className={styles.row}>
            <div  className={styles.column}>
              <div className={styles.card}>
                 <div>
                    <Image src={image} alt="Image" className={styles.image}/>
                    <FontAwesomeIcon icon={faBuilding} className={styles.font}/>
                    <h5 className={styles.h5}>{title}</h5>
                    <p className={styles.p}>{paragraph}</p>

                 </div>
                 
                             </div>
              
            </div>
           </div>
    </>
  )
}

export default Card