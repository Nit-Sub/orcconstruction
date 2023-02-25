import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import logo from "@/public/static/logo.png";
import First from '@/components/First';
import styles from '../styles/Blog01.module.css';
import blog01 from "../public/static/blog01.jpg";
import blog02 from "../public/static/blog2.jpg";
import ContactUs from '../components/ContactUs'


const Blog01 = () => {
  return (<>
    <Head>
      <title>NORC. Construction</title>
      {/* <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> */}
    </Head>
    <First />
    <main className={styles.main}>
      <div className={styles.description}>
        <Image className={styles.image} src={logo} alt="Logo" />
        <p className={styles.p}>Our Blog</p>
        < hr className={styles.hrcolor} />

        <h1 className={styles.h1}>Latest <span style={{ color: 'black' }}>News</span></h1>
        <div className={styles.row}>
          <div className={styles.column} style={{ width: "80%" }}>
            <Image src={blog01} alt="Blog" className={styles.img} />
            <h5 className={styles.h5}>Construction Delivery Methods Training</h5>
            <p style={{ color: "white" }}>Construction elibero tristique mattis suspen dissen potenti seden
              laoreen ultricies magna, in dignissim justo porta eget miss vention luctus magna numsation
              the pelentesue luctus maga numsaton vivention esellentesue the tenis vitae mollie.</p>

            <Image src={blog02} alt="Blog" className={styles.img} />
            <h5 className={styles.h5}> Delivery Methods Training</h5>
            <p style={{ color: "white" }}>Construction elibero tristique mattis suspen dissen potenti seden
              laoreen ultricies magna, in dignissim justo porta eget miss vention luctus magna numsation
              the pelentesue luctus maga numsaton vivention esellentesue the tenis vitae mollie.</p>
          </div>
          <div className={styles.column}>

            <input className={styles.input} type="text" name="name" placeholder='Search' />
            <div className={styles.card}>
              <h4>Recent Posts</h4>
              <Image src={blog01} width={100} alt="Logo" />
              <p className={styles.recentpost}>Construction Delivery</p>
              <p>   Methods Training</p>
              <Image src={blog01} width={100} alt="Logo" />
              <p className={styles.recentpost}>Construction Delivery</p>
              <p>   Methods Training</p>
              <Image src={blog01} width={100} alt="Logo" />
              <p className={styles.recentpost}>Construction Delivery</p>
              <p>   Methods Training</p>

            </div>
            <div className={styles.card}>
              <h4>Archieve</h4>
              < hr style={{ color: 'black' }} />



              <p className={styles.recentpost}>2023 December</p>
              <br />

              <p className={styles.recentpost}>2023 January</p>
              <br />

              <p className={styles.recentpost}>2023 Febrauary </p>
              <br />

            </div>


          </div>
        </div>
        < hr className={styles.hrcolor} />
        
      </div>
      <ContactUs/>
    </main>
  </>
  )
}

export default Blog01