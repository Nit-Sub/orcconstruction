import React from 'react';
import styles from "@/styles/ScrollEffect.module.css";
import ImageOne from './ImageOne';

const ScrollEffect = () => {
  return (
    <>
    <div className={styles.wrapperouter}>
        <div className={styles.wrapper}>
            <div className={styles.section}>
                {/* <div className={styles.parallaxbg}> */}
        <ImageOne/>
                {/* </div> */}
                <h2>CSS3 <br/> Parallax Effect</h2>


            </div>

        </div>
    </div>
   </>
  )
}

export default ScrollEffect