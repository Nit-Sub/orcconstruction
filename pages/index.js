import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import First from '@/components/first';
import Image from 'next/image';
import logo from "../public/static/logo.png"
import Button from 'react-bootstrap/Button';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>NORC. Construction</title>
        {/* <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <First/>
      <main className={styles.main}>
      <Image  className={styles.image} src={logo} alt="Logo" />
        <div className={styles.description}>
          
        {/* <img src={norc} alt="text"/> */}
        <p className={styles.p} >Architecture Design</p>
        <h1 className={styles.h1}>We Build <span className={styles.span}>Great Projects </span></h1>
        <p className={styles.p}>Our 25 years working experience make a different construction building.<br/> 
          Viverra tristique usto duis vitae diam neque nivamus estan the atin viverra nectow drana setlie.</p>
          <Button size="lg"variant="outline-warning" className={styles.button} href="/project">Our Project</Button>
          <Button size="lg"variant="outline-warning" className={styles.button} href="/services">Our Services</Button>
         </div>
         <div>
          
         </div>
      </main>
    </>
  )
}
