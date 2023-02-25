import React from 'react'
import styles from '@/styles/PageTeamSub.module.css'
import Image from 'next/image'
import img1 from "../public/static/teammember1.jpg"
import img2 from "../public/static/teammember2.jpg"
import img3 from "../public/static/teammember3.jpg"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const PageTeam = () => {
    return (
        <>
            <div className={styles.row}>
                <div className={styles.column}>
                <Card style={{ width: '18rem' }} className={styles.card}>
      <Image src={img1} className={styles.image} alt="Text"></Image>
      <Card.Body>
        <Card.Title>Adam Norman</Card.Title>
        <h6>Ceo and Founder</h6>
        <Card.Text>
        Nulla quis efficitur lacus sulvinar suere 
        ausue in eduis euro vesatien arcuman ontese auctor ac aleuam aretra.
        </Card.Text>
      </Card.Body>
    </Card>
             </div>
             <div className={styles.column}>
             <Card style={{ width: '18rem' }} className={styles.card}>
      <Image src={img3} className={styles.image} alt="Text"></Image>
      <Card.Body>
        <Card.Title>Adam Night</Card.Title>
        <h6>Director</h6>
        <Card.Text>
        Nulla quis efficitur lacus sulvinar suere 
        ausue in eduis euro vesatien arcuman ontese auctor ac aleuam aretra.
        </Card.Text>
      </Card.Body>
    </Card>
             </div>
             <div className={styles.column}>
             <Card style={{ width: '18rem' }} className={styles.card}>
      <Image src={img2} className={styles.image} alt="Text"></Image>
      <Card.Body>
        <Card.Title> Norman</Card.Title>
        <h6>co Founder</h6>
        <Card.Text>
        Nulla quis efficitur lacus sulvinar suere 
        ausue in eduis euro vesatien arcuman ontese auctor ac aleuam aretra.
        </Card.Text>
      </Card.Body>
    </Card>
    
             </div>
             
             
             </div>
        </>
    )
}

export default PageTeam