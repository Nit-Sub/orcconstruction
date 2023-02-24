import First from '@/components/first'
import React from 'react'
import Head from 'next/head'
import styles from '@/styles/about.module.css'
import Image from 'next/image';
import logo from "../public/static/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import about1 from '../public/static/about1.jpg'




const about = () => {
  return (
    <>
      <Head>
        <title>NORC. Construction</title>
        {/* <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <First />
      <main className={styles.main}>
        <div className={styles.description}>
          <Image src={logo} width={200} alt="Logo" />
          <h4 className={styles.p} >Construction Firm</h4>
          <h1 className={styles.h1}>About Norc</h1>
        </div>
        <div className={styles.row}>
          <div className={styles.column} >
            <h5>Leading Way In Building & Civil Construction!</h5>
            <p className={styles.p}>Our company at libero tristique mattis. Suspendisse 
              potenti sed leonra main dignissim justo porta eget.
               Curabitur luctus magna numsaton vivention esellentesue the miss tenis vitae mollie.</p>
            <p>   <FontAwesomeIcon icon={faTrophy} /> Over 25 years of experience</p>
            <p>   <FontAwesomeIcon icon={faTrophy} /> 100+ successfully executed projects</p>
            <p>   <FontAwesomeIcon icon={faTrophy} /> Exceptional work quality</p>
            <hr/>
          </div>
          <div className={styles.column}>
          <Image className={styles.img} src={about1} width={450}  alt="About" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>A</div>
          <div className={styles.column}>B</div>
          
        </div>

      </main>
      


    </>
  )
}

export default about