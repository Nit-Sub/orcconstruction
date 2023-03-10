import First from '@/components/first'
import React from 'react'
import Head from 'next/head'
import styles from '@/styles/about.module.css'
import Image from 'next/image';
import logo from "../public/static/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import about1 from '../public/static/about1.jpg'
import sign from "../public/static/sign.svg";
import about2 from '../public/static/about2.jpg';
import about3 from '../public/static/about3.jpg';
import Team from '@/components/Team';
import CoreValues from '@/components/CoreValues';
import ContactUs from '@/components/ContactUs';




const about = () => {
  return (
    <>
      
      <First />
      <main className={styles.main}>
        <div className={styles.description}>
          <Image src={logo} width={200} alt="Logo" />
          <h4 className={styles.p} >Construction Firm</h4>
          <h1 className={styles.h1}>About <span>norc</span></h1>
        </div>
        <div className={styles.row}>
          <div className={styles.column} >
          <hr/>
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
          <Image className={styles.img} src={about1} width={450}  alt="About1" />
          </div>
        </div>
        <Image className={styles.sign} src={sign} width={50}/>
        <h5>Enrico Martin</h5>
        <p>CEO & Founder</p>
        < hr className={styles.hrcolor}/>
        <div className={styles.row}>
        
          <div className={styles.column}>
          <Image className={styles.img2} src={about2} width={450}  alt="About2" />
          <br/>
          <h3>The story of how </h3>
          <h6><span className={styles.span}>norc company   </span> 
          was founded</h6>
          <p>Build quis efficitur lacus sulvinar posuere augue eduis euro vesatien arcuman onteger 
            leo nisl auctor ac aliquam asus nuis risus maecenas vitae tellus massa aselus.</p>
          </div>
          <div className={styles.column}>
            <h4>Leading Way In </h4>
            <span className={styles.span}>Building & Civil Construction!</span>
            <p>
            Nulla quis efficitur lacus sulvinar posuere augue eduis euro vesatien arcuman onteger leo nisl 
            auctor ac aliquam a placerat quis risus maecenas vitae tellus massa aselus faucibu in haretra.
            </p>
          <Image className={styles.img2} src={about3} width={500}  alt="About3" />
            
          </div>
          
        </div>
        < hr className={styles.hrcolor}/>
        <h4 className={styles.team} >Expert Worker</h4>
        <Team/>
        < hr className={styles.hrcolor}/>
        <CoreValues/>
        <ContactUs/>
        < hr className={styles.hrcolor}/>

       

      </main>
      


    </>
  )
}

export default about