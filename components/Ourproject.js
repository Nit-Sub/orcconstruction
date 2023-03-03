import React from 'react'
import styles from "@/styles/Ourproject.module.css";
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';

const Ourproject = ({title , belowtitle , paragraph, image}) => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          <div className={styles.row}>
            <div className={styles.column}>
            <p className={styles.p} >Latest Works</p>
            <h1 className={styles.h1}>Our <span style={{ color: "orangered" }}>Project</span>  </h1>
            <Image src={image} alt="Image" className={styles.image}/>
            </div>
            <div className={styles.column}>
              <div className={styles.card}>
                <h4 className={styles.h4}>{title} </h4>
                <h4 className={styles.h4}><span style={{color:"orangered"}}>{belowtitle}</span></h4>
                <p style={{color:"grey"} } className="mx-3">{paragraph}</p>
                   <hr className={styles.hr} style={{width:"330px"}}/>
                   <p style={{color:"grey"}} ><FontAwesomeIcon icon={faBuilding} className={styles.icon}/> Renovation</p>
              </div>
            </div>
          </div>
</div>
      </main>
    </>
  )
}
export default Ourproject