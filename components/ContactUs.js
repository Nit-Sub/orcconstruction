import React from 'react';
import Head from 'next/head';
import First from '@/components/First';
import logo from "../public/static/logo.png"
import styles from "@/styles/Contact.module.css"
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFax } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocation } from '@fortawesome/free-solid-svg-icons';


const contact = () => {
  return (<>
   
      <div className={styles.row}>
      <div className={styles.column}>
        <h4>Contact Information</h4>
        <p>Contact nullam usamcoen the drana duru metus utah osare asya
             mavna busnini viventa the ornare ipsum. 
             Curabitur luctus mana numsation pellentesque the miss tenis mollie.</p>
             <div className={styles.fontrow}>
                <h5 > <FontAwesomeIcon icon={faPhone} className={styles.font}/>Call Us</h5>
                <p className='mt-3' >+977625659626</p>
             </div>
             <div className={styles.fontrow}>
                <h5 > <FontAwesomeIcon icon={faFax} className={styles.font}/>Fax Number</h5>
                <p className='mt-3' >+977515625659626</p>
             </div>
             <div className={styles.fontrow}>
                <h5 > <FontAwesomeIcon icon={faEnvelope} className={styles.font}/>Send us an email</h5>
                <p className='mt-3' >info@demo.test.com</p>
             </div>
             <div className={styles.fontrow}>
                <h5 > <FontAwesomeIcon icon={faLocation} className={styles.font}/>Visit our office</h5>
                <p className='mt-3' > Charleston, 29401 USA</p>
             </div>

        </div>

      </div>
      
   

  </>
  
  )
}

export default contact