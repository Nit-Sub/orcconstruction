import React from 'react'
import Head from 'next/head'
import First from '@/components/First'
import styles from '@/styles/Project.module.css';
import CrossFade from '@/components/CrossFade';
import image1 from '../public/static/project1.jpg';
import image2 from '../public/static/project2.jpg';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1 } from '@fortawesome/free-solid-svg-icons';
import { fa2 } from '@fortawesome/free-solid-svg-icons';
import { fa3 } from '@fortawesome/free-solid-svg-icons';
import ContactUs from '@/components/ContactUs';
const project = () => {
    return (
        <>
            <Head>
                <title>NORC. Construction</title>
            </Head>
            <First />
            <main className={styles.main}>
                <div className={styles.body}>
                    <CrossFade />

                    <p className={styles.p}>Westport, CT</p>
                    <hr className={styles.hr} />

                    <h1 className={styles.h1}>Interior Remodeling</h1>
                    <p className={styles.psmall}>Quisque pretium fermentum quam, sit amet cursus ante sollicitudin morbi consequat risu
                        consetion porttitor orci sitem iaculis nisl. Integer quis sapien nec elit ultrices euismod sit amet id lacus. Sedimerdie erat.
                        Fusce eu nulla ac nisi cursus tincidunt uis eu est dignissim lacus dictum hendrerit quis vitae mi.</p>
                    <br />
                    <p className={styles.psmall}>Quisque pretium fermentum quam, sit amet cursus ante sollicitudin vel. Morbi consequat risus
                        consequat porttitor fine sit amet iaculis nisl. Integer quis sapien nec elit
                        ultrices euismod sit amet id lacus. Sed a imperdiet erat. Duis euestioni dignissim lacus dictum hendrerit
                        quis vitae mi. Fusce eu nulla ac nisi cursus tincidunt.</p>
                    <div className={styles.row}>
                        <div className={styles.column}>
                            <Image src={image1} alt="Image 1" className={styles.image} />
                        </div>
                        <div className={styles.column}>
                            <Image src={image2} alt="Image 1" className={styles.image} />
                        </div>


                    </div>
                    <hr className={styles.hrfull} />
                    <h5 className={styles.h1}>What was included in the project?</h5>
                    <p className={styles.psmall}>Nulla vitae metus tincidunt, varius nunc quis, porta nulla. Pellentesque vel dui nec
                        libero auctor pretium id sed arcu. Nunc consequat diam id nisl blandit dignissim. Etiam commodo diam dolor,
                        at scelerisque sem finibus sit amet. Curabitur id lectus eget purus finibus laoreet.</p>
                    <p className={styles.psmall}><FontAwesomeIcon icon={fa1} className={styles.font} /> Duisteyerionyer venenatis lacus gravida eros ut turpis interdum.</p>
                    <p className={styles.psmall}><FontAwesomeIcon icon={fa2} className={styles.font} /> Duisteyerionyer venenatis lacus gravida eros ut turpis interdum.</p>
                    <p className={styles.psmall}><FontAwesomeIcon icon={fa3} className={styles.font} /> Duisteyerionyer venenatis lacus gravida eros ut turpis interdum.</p>
                    <hr className={styles.hrfull} />
                    <ContactUs />



                </div>



            </main>

        </>
    )
}

export default project