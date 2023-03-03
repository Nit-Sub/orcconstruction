import React from 'react'
import styles from '@/styles/Footer.module.css'
import FooterCard from './FooterCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faHouse} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className={styles.main}>
            <div className={styles.description}>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <FooterCard title="Call us" contact="+1 203-333-4444" icon={faPhone} />
                    </div> <div className={styles.column}>
                        <FooterCard title="Write to us" contact="info@construction.com" icon={faEnvelope} />
                    </div> <div className={styles.column}>
                        <FooterCard title="Address" contact="24 King St, SC 29401 USA"  icon={faHouse}/>
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
                        <ul className={styles.ul}>
                            <li ><p className={styles.pt}>About </p></li>
                            <li> <p className={styles.pt}>Service</p></li>
                            <li> <p className={styles.pt}>Project</p></li>
                            <li> <p className={styles.pt}>Blog</p></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h3 className={styles.h3}>
                            Subscribe
                        </h3>
                        <p className={styles.p}>
                            Want to be notified about our news. Just sign up and we'll send you a notification by email.
                        </p>
                        <div className={styles.card}>
                            <input className={styles.input} placeholder='Email Address' type="text" name="Email" />
                            <button className={styles.button}>Send</button>
                        </div>
                    </div>
                </div>
                <hr className={styles.hr} />
                <p className={styles.endfooter}>©2022 <span style={{ color: "orangered" }}>DuruThemes.</span> All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer