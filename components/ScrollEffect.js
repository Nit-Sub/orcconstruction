import React from 'react';
import styles from "@/styles/ScrollEffect.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaste } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

const ScrollEffect = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.description}>
          <h5>How We Work</h5>
          <h2 className={styles.h2}>Our Process</h2>
          <p className={styles.p}> Suspendisse potenti sed laoen ultra magna in dignissim
            justo porta miss acurabitur luctus magna numsation elentesue the miss vitae moie.</p>
        </div>
        <div className={styles.font}>
          <div className={styles.row}>
            <div className={styles.column}>
              <FontAwesomeIcon icon={faPaste} className={styles.icon} />
              <h6 className={styles.h6}> <span className={styles.span}>01.</span> Planning</h6>
            </div>
            <div className={styles.column}>
              <FontAwesomeIcon icon={faPen} className={styles.icon} />
              <h6 className={styles.h6}> <span className={styles.span}>02.</span> Design</h6>
            </div>
            <div className={styles.column}>
              <FontAwesomeIcon icon={faBuilding} className={styles.icon} />
              <h6 className={styles.h6}> <span className={styles.span}>03.</span> Construct</h6>
            </div>
            <div className={styles.column}>
              <FontAwesomeIcon icon={faMedal} className={styles.icon} />
              <h6 className={styles.h6}> <span className={styles.span}>04.</span> Finishing</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ScrollEffect