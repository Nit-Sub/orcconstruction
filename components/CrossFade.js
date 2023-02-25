import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import image from '../public/static/CrossFade.jpg'
import image1 from '../public/static/CrossFade1.jpg'
import image2 from '../public/static/CrossFade2.jpg'
import image3 from '../public/static/CrossFade3.jpeg'
import styles from '@/styles/CrossFade.module.css';

const CrossFade = () => {
  return (
    <>
    <div className={styles.main}>
     <Carousel fade>
      <Carousel.Item>
      <Image src={image} alt="Image" className={styles.img}/>
        
      </Carousel.Item>
      <Carousel.Item>
      <Image src={image1} alt="Image" className={styles.img}/>

        
      </Carousel.Item>
      <Carousel.Item>
      <Image src={image2} alt="Image" className={styles.img}/>

      </Carousel.Item>
      <Carousel.Item>
      <Image src={image3} alt="Image" className={styles.img}/>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  )
}

export default CrossFade