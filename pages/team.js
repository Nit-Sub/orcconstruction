import React from 'react'
import Head from 'next/head'
import logo from '../public/static/logo.png';
import Image from 'next/image';
import First from '@/components/First';
import styles from '@/styles/PageTeam.module.css'
import PageTeam from '@/components/PageTeam';

const team = () => {
  return (
    <>
      <Head>
        <title>NORC. Construction</title>
      </Head>
      <First/>
      <main className={styles.main}>
        <Image className={styles.logo} src={logo} alt="Logo"  width={250}/>
        <div className={styles.body}>
          <p className={styles.p}>Expert Worker</p>
          <h1 className={styles.h1}>Meet <span className={styles.span}>Our Team</span></h1>
          <hr className={styles.hr}/>
           <PageTeam/> 
          <hr className={styles.hr}/>


        </div>
        


      </main>

    </>
  )
}

export default team