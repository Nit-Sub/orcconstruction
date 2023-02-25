import React from 'react';
import Head from 'next/head';
import First from '@/components/First';
import styles from '@/styles/Career.module.css';
import logo from '@/public/static/logo.png';
import Image from 'next/image';

const career = () => {
  return (
    <>
      <Head>
        NORC. Construction
      </Head>
      <First />
      <main className={styles.main}>
        <div className={styles.description}>
          <Image className={styles.image} src={logo} alt="Logo" />
          <p className={styles.p}>Career</p>
          <hr />
          <h1>Job  <span className={styles.span}>Opening</span></h1>
          <hr />
          <div className={styles.container}>
            <div className={styles.column}>
              <h4>Project Manager</h4>
              <span> Development</span>
            </div>
            <div className={styles.column}>
              <p>Location</p>
              <p>New York</p>
            </div>
            <div className={styles.column}>
              <p> Emplyment Type </p>
              <p>Full-Time</p>
            </div>
              </div>
          <div className={styles.container}>
            <div className={styles.column}>
              <h4>Senior Exhibit Designer</h4>
              <span> Development</span>
            </div>
            <div className={styles.column}>
              <p>Location</p>
              <p>New York</p>
            </div>
            <div className={styles.column}>
              <p> Emplyment Type </p>
              <p>Full-Time</p>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.column}>
              <h4>Staff Design Architect</h4>
              <span> Development</span>
            </div>
            <div className={styles.column}>
              <p>Location</p>
              <p>New York</p>
            </div>
            <div className={styles.column}>
              <p> Emplyment Type </p>
              <p>Full-Time</p>
            </div>
          </div>
        </div>
        <p>Please submit a resume and cover letter with compensation history to  <span style={{color:'orange'}}>info@Construction.test.com</span></p>
      </main>

    </>
  )
}

export default career