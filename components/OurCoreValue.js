import React from 'react'
import styles from '@/styles/OurCoreValue.module.css';
import CoreValueCard from './CoreValueCard';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { faChessKnight } from '@fortawesome/free-solid-svg-icons';
import { faChessRook } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
const OurCoreValue = () => {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.description}>
                    <p className={styles.p} >Our Values</p>
                    <h1 className={styles.h1}>Core <span style={{ color: "orangered" }}>Values</span>  </h1>
                    <div className={styles.row}>
                        <div className={styles.column}>
                            <CoreValueCard fontdesign={faUserShield} title="Safety" paragraph="Safety will always come first as we strive for accident-free
                projects. Fusce tidunt
                nis ace park norttito amet space"/>
                        </div>
                        <div className={styles.column}>
                            <CoreValueCard fontdesign={faLightbulb} title="Inovation" paragraph="Safety will always come first as we strive for accident-free
                projects. Fusce tidunt
                nis ace park norttito amet space"/>
                        </div>
                        <div className={styles.column}>
                            <CoreValueCard fontdesign={faStickyNote} title="Quality" paragraph="Safety will always come first as we strive for accident-free
                projects. Fusce tidunt
                nis ace park norttito amet space"/>
                        </div>
                        <div className={styles.column}>
                            <CoreValueCard fontdesign={faChessKnight} title="Integrity" paragraph="Safety will always come first as we strive for accident-free
                projects. Fusce tidunt
                nis ace park norttito amet space"/>
                        </div>
                        <div className={styles.column}>
                            <CoreValueCard fontdesign={faChessRook} title="Strategy" paragraph="Safety will always come first as we strive for accident-free
                projects. Fusce tidunt
                nis ace park norttito amet space"/>
                        </div>
                        <div className={styles.column}>
                            <CoreValueCard fontdesign={faFlag} title="Inclusion" paragraph="Safety will always come first as we strive for accident-free
                projects. Fusce tidunt
                nis ace park norttito amet space"/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default OurCoreValue