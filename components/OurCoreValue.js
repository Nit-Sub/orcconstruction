import React from 'react'
import styles from '@/styles/OurCoreValue.module.css';
import CoreValueCard from './CoreValueCard';
const OurCoreValue = () => {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.description}>
                    <div className={styles.row}>
                        <div className={styles.column}>
                            <p className={styles.p} >Our Values</p>
                            <h1 className={styles.h1}>Core <span style={{ color: "orangered" }}>Values</span>  </h1>

                                <CoreValueCard/>

                        </div>

                    </div>
                </div>

            </main>
        </>
    )
}

export default OurCoreValue