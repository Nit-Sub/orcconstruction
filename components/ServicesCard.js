import React from 'react'
import styles from '@/styles/ServicesCard.module.css'
import Image from 'next/image';
import image1 from '../public/static/ServicesCard1.jpg'
import image2 from '../public/static/ServicesCard2.jpg'
import image3 from '../public/static/ServicesCard3.jpg'

const ServicesCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Image src={image1} alt="ServiceCardImage" className={styles.img}/>
        <div className={styles.intro}>
          <h4>Project Planning</h4>

          <p>Quisque imperdie miss sapien porttiton the bibendum. Pellentesque accumsa amet tincidunt risus nesuen.</p>
        </div>
        <Image src={image2} alt="ServiceCardImage" className={styles.img}/>
        <div className={styles.intro}>
          <h4>Project Planning</h4>

          <p>Quisque imperdie miss sapien porttiton the bibendum. Pellentesque accumsa amet tincidunt risus nesuen.</p>
        </div>
        <Image src={image3} alt="ServiceCardImage" className={styles.img}/>
        <div className={styles.intro}>
          <h4>Project Planning</h4>

          <p>Quisque imperdie miss sapien porttiton the bibendum. Pellentesque accumsa amet tincidunt risus nesuen.</p>
        </div>

      </div>

    </div>
  )
}

export default ServicesCard