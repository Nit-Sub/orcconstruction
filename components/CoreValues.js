import React from 'react'
import styles from '@/styles/CoreValue.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShield } from '@fortawesome/free-solid-svg-icons';
import { faChessRook } from '@fortawesome/free-solid-svg-icons'
import { faChessKnight } from '@fortawesome/free-solid-svg-icons'
import Card from 'react-bootstrap/Card';

const CoreValues = () => {
    return (<>
        <div>

            <p className={styles.p}>
                Our Values
            </p>
            <h3 className={styles.h3}> Core <span className={styles.span}>Values </span></h3>
        </div>
        <div className={styles.row}>

            <div className={styles.column}>
                <Card className={styles.card} style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 ">Saftey</Card.Subtitle>
                        <FontAwesomeIcon icon={faShield} />
                        <Card.Text>
                            Safety will always come first as we strive for accident-free projects.
                            Fusce tincidunt nis ace park norttito amet space.
                        </Card.Text>
                       
                    </Card.Body>
                </Card>
            </div>


            <div className={styles.column}>

                <Card className={styles.card} style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 ">Integrity</Card.Subtitle>
                        <FontAwesomeIcon icon={faChessRook} />
                        <Card.Text>
                            Nulla quis effi vivento acus suvina sene in atue eduis eu
                            ro vesatien arcum the onte nisl auctor a menas vitae.
                        </Card.Text>
                       
                    </Card.Body>
                </Card>
            </div>

            <div className={styles.column}>

                <Card className={styles.card} style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 ">
                            Strategy</Card.Subtitle>
                        <FontAwesomeIcon icon={faChessKnight} />
                        <Card.Text>
                            Nulla quis effi vivento acus suvina sene in atue eduis eu
                            ro vesatien arcum the onte nisl auctor a menas vitae.
                        </Card.Text>
                       
                    </Card.Body>
                </Card>

            </div>
            
        </div>
        
        <div className={styles.row}>

            <div className={styles.column}>
                <Card className={styles.card} style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 ">Saftey</Card.Subtitle>
                        <FontAwesomeIcon icon={faShield} />
                        <Card.Text>
                            Safety will always come first as we strive for accident-free projects.
                            Fusce tincidunt nis ace park norttito amet space.
                        </Card.Text>
                       
                    </Card.Body>
                </Card>
            </div>


            <div className={styles.column}>

                <Card className={styles.card} style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 ">Integrity</Card.Subtitle>
                        <FontAwesomeIcon icon={faChessRook} />
                        <Card.Text>
                            Nulla quis effi vivento acus suvina sene in atue eduis eu
                            ro vesatien arcum the onte nisl auctor a menas vitae.
                        </Card.Text>
                       
                    </Card.Body>
                </Card>
            </div>

            <div className={styles.column}>

                <Card className={styles.card} style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 ">
                            Strategy</Card.Subtitle>
                        <FontAwesomeIcon icon={faChessKnight} />
                        <Card.Text>
                            Nulla quis effi vivento acus suvina sene in atue eduis eu
                            ro vesatien arcum the onte nisl auctor a menas vitae.
                        </Card.Text>
                       
                    </Card.Body>
                </Card>

            </div>
        </div>
    </>
    )
}

export default CoreValues