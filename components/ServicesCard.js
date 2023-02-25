import React from 'react'
import styles from '@/styles/ServicesCard.module.css'
import Image from 'next/image';
import image1 from '../public/static/ServicesCard1.jpg'
import image2 from '../public/static/ServicesCard2.jpg'
import image3 from '../public/static/ServicesCard3.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { faBinoculars } from '@fortawesome/free-solid-svg-icons';



const ServicesCard = () => {
  return (
    <div className={styles.row}>
     <div className={styles.column}>
     <Card style={{ width: '18rem' }} className={styles.card}>
     <Image  className={styles.img} src={image1} width={250} />
      <h5 className={styles.h5}><FontAwesomeIcon icon={faBuilding} className={styles.icon}/> Project Planning </h5>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

     </div>
     <div className={styles.column}>
     <Card style={{ width: '18rem' }} className={styles.card}>
     <Image  className={styles.img} src={image2} width={250} />
     <h5 className={styles.h5}><FontAwesomeIcon icon={faListCheck} className={styles.icon}/> General Contracting </h5>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

     </div>
     <div className={styles.column}>
     <Card style={{ width: '18rem' }} className={styles.card}>
     <Image  className={styles.img} src={image3} width={250} />
     <h5 className={styles.h5}><FontAwesomeIcon icon={faBinoculars} className={styles.icon}/> Manufacturing </h5>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

     </div>
     <div className={styles.column}>
     <Card style={{ width: '18rem' }} className={styles.card}>
     <Image  className={styles.img} src={image1} width={250} />
      <h5 className={styles.h5}><FontAwesomeIcon icon={faBuilding} className={styles.icon}/> Project Planning </h5>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

     </div>
     <div className={styles.column}>
     <Card style={{ width: '18rem' }} className={styles.card}>
     <Image  className={styles.img} src={image2} width={250} />
     <h5 className={styles.h5}><FontAwesomeIcon icon={faListCheck} className={styles.icon}/> General Contracting </h5>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

     </div>
     <div className={styles.column}>
     <Card style={{ width: '18rem' }} className={styles.card}>
     <Image  className={styles.img} src={image3} width={250} />
     <h5 className={styles.h5}><FontAwesomeIcon icon={faBinoculars} className={styles.icon}/> Manufacturing </h5>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

     </div>
     
    </div>
  )
}

export default ServicesCard