import React from 'react'
import styles from '@/styles/CoreValue.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShield } from '@fortawesome/free-solid-svg-icons';
import { faChessRook } from '@fortawesome/free-solid-svg-icons'
import { faChessKnight} from '@fortawesome/free-solid-svg-icons'


const CoreValues = () => {
  return (<>
    <div>
        
        <p className={styles.p}>
            Our Values
        </p>
        <h3 className={styles.h3}> Core <span className={styles.span}>Values </span></h3>
    </div>
    <div className={styles.row}>
        
    <div className={styles.column}>
    <FontAwesomeIcon icon={faShield} />
        </div>

        
    <div className={styles.column}>
    <FontAwesomeIcon icon={faChessRook}/>
        </div>
        
    <div className={styles.column}>
    <FontAwesomeIcon icon={faChessKnight}/>
        
        </div>
    </div>
    </>
  )
}

export default CoreValues