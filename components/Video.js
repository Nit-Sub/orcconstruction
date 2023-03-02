import React from 'react';
import styles from "@/styles/Video.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { faHand } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import comment2 from "@/public/static/comment2.jpg";


const Video = () => {
    return (<>
        <main className={styles.main}>
            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.paragraph}>
                        <FontAwesomeIcon className={styles.font} icon={faPlay} />
                        <p className={styles.p}>Promo Video</p>
                        <h4 className={styles.h4}>Video About Company</h4>
                        <p className={styles.paragraphs}>Video showing our 25 years of business experience.</p>
                    </div>
                </div><div className={styles.column}>
                    <div className={styles.card}>
                        <p className={styles.shape}></p>
                        <h6 className={styles.h6}>What said about us</h6>
                        <h4 className={styles.hh4}>Customer Reviews</h4>
                        <p className={styles.review}>Company kaya nisl ullamcorper the duru metu enna lophare mavna busnini
                            viventa the ornare ipsuma. Curabitur magna pentesue the miss tenis vitae.</p>
                        <div className={styles.row}>
                            <div className={styles.column}>
                                <Image src={comment2} alt="Image" className={styles.comment2} />

                            </div>
                            <div className={styles.column}>
                                <h6 className={styles.author}>Jason Brown</h6>
                                <p className={styles.location}>Hollywood Hills, CA</p>

                            </div>

                        </div>
                        
                    </div>

                </div>
            </div>
          
        </main>
       <div className={styles.footers}>
            <div className={styles.logo}>
            <FontAwesomeIcon icon={faRotateRight} className='mx-10'/>
            <FontAwesomeIcon icon={faRotateLeft}/>
            <FontAwesomeIcon icon={faHand}/>
            <FontAwesomeIcon icon={faHandshake}/>
            </div>
       </div>
        </>
    )
}

export default Video