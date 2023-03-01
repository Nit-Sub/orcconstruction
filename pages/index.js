import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import First from '@/components/first';
import Image from 'next/image';
import logo from "../public/static/logo.png"
import Button from 'react-bootstrap/Button';
import ContactUs from '@/components/ContactUs';
import CrossFade from '@/components/CrossFade';
import AboutFirm from '@/components/AboutFirm';
import OurService from '@/components/OurService';
import ScrollEffect from '@/components/ScrollEffect';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={styles.main}>
      <First />

        <div className={styles.description}>
          <p className={styles.p} >Architecture Design</p>
          <h1 className={styles.h1}>We Build Great  </h1>
          <h1 className={styles.h1}>Projects </h1>
          
          <p className={styles.p}>Our 25 years working experience make a different construction building.<br />
            Viverra tristique usto duis vitae diam neque nivamus estan the atin viverra nectow drana setlie.</p>
          <Button size="lg" variant="outline-warning" className={styles.button} href="/project">Our Project</Button>
          <Button size="lg" variant="outline-warning" className={styles.button} href="/services">Our Services</Button>
        </div> 





      </main>
      <div>
       <AboutFirm/>
       <OurService/>
       <ScrollEffect/>
       
       
      </div>

    </>
  )
}
