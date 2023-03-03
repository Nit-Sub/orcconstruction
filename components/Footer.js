import React from 'react'
import styles from '@/styles/Footer.module.css'
import FooterCard from './FooterCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { faComment} from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
        <div className={styles.main}>
            <div className={styles.description}>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <FooterCard title="Call us" contact="+1 203-333-4444" />
                    </div> <div className={styles.column}>
                        <FooterCard title="Call us" contact="+1 203-333-4444" />
                    </div> <div className={styles.column}>
                        <FooterCard title="Call us" contact="+1 203-333-4444" />
                    </div>
                </div>
                <div className={styles.rows}>
                    <div className={styles.column}>
                        <h3 className={styles.h3}>About Norc.</h3>
                        <p className={styles.p}>
                            Quisque imperdiet sapien porttito the bibendum sellentesque the commodo erat acar accumsa lobortis, enim diam the nesuen.
                        </p>
                        <div className={styles.rows}>
                            <div className={styles.columnfooter}>
                                < div className={styles.footericon}>
                                    <FontAwesomeIcon icon={faLaptop} />
                                </div>
                            </div><div className={styles.columnfooter}>
                                < div className={styles.footericon}>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                            </div><div className={styles.columnfooter}>
                                < div className={styles.footericon}>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                </div>
                            </div>
                            <div className={styles.columnfooter}>
                                < div className={styles.footericon}>
                                    <FontAwesomeIcon icon={faComment} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <h3 className={styles.h3}>Quick Links</h3>
                        <ul>
                            <li >About</li>
                            <li>Service</li>
                            <li>Project</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className={styles.column}>A </div>
                </div>
            </div>
        </div>
    )
}

export default Footer