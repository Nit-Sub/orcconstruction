import React from 'react'
import Head from 'next/head'
import First from '@/components/First'
import styles from '@/styles/Project.module.css';
import CrossFade from '@/components/CrossFade';

const project = () => {
  return (
    <>
        <Head>
        <title>NORC. Construction</title>
      </Head>
      <First/>
      <main className={styles.main}>
        <div className={styles.body}>
        <CrossFade/>
        
        <p className={styles.p}>Westport, CT</p>
        <hr className={styles.hr}/>
        
        <h1  className={styles.h1}>Interior Remodeling</h1>
        <p className={styles.psmall}>Quisque pretium fermentum quam, sit amet cursus ante sollicitudin morbi consequat risu 
            consetion porttitor orci sitem iaculis nisl. Integer quis sapien nec elit ultrices euismod sit amet id lacus. Sedimerdie erat. 
            Fusce eu nulla ac nisi cursus tincidunt uis eu est dignissim lacus dictum hendrerit quis vitae mi.</p>
            <br/>
            <p className={styles.psmall}>Quisque pretium fermentum quam, sit amet cursus ante sollicitudin vel. Morbi consequat risus 
                consequat porttitor fine sit amet iaculis nisl. Integer quis sapien nec elit 
                ultrices euismod sit amet id lacus. Sed a imperdiet erat. Duis euestioni dignissim lacus dictum hendrerit 
                quis vitae mi. Fusce eu nulla ac nisi cursus tincidunt.</p>
        
        </div>

       

      </main>
      
    </>
  )
}

export default project