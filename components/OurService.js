import React from 'react'
import styles from "@/styles/OurService.module.css";
import Card  from '@/components/Card';
import image1 from '../public/static/ServicesCard1.jpg'
import image2 from '../public/static/ServicesCard2.jpg'
import image3 from '../public/static/ServicesCard3.jpg'
const OurService = () => {
  return (
    <>
    <main className={styles.main}>
        <div className={styles.description}>
          <p className={styles.p} >What We Do</p>
          <h1 className={styles.h1}>Our <span style={{color:"orangered"}}> Services </span></h1>
          <Card   title="Interior Design" paragraph="Quisque imperdie miss 
          sapien porttiton the bibendum. Pellentesque accumsa amet tincidunt risus nesuen."
          image={image1}/>  
          <Card   title="Project Planning" paragraph="Quisque imperdie miss 
          sapien porttiton the bibendum. Pellentesque accumsa amet tincidunt risus nesuen."
          image={image2}/>  
          <Card   title="Generak Contracting" paragraph="Quisque imperdie miss 
          sapien porttiton the bibendum. Pellentesque accumsa amet tincidunt risus nesuen."
          image={image3}/>    
           </div> 



      </main>
    </>
  )
}

export default OurService