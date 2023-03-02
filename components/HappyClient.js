import React from 'react';
import styles from "@/styles/HappyClient.module.css"
import ClientCard from './ClientCard';
import { faPenRuler } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';


const HappyClient = () => {
    return (
        <main className={styles.main}>
            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.card}>
                        <ClientCard font={faPenRuler} count="675" number="0.1" name="Project Design" />
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.card}>
                        <ClientCard font={faMessage} count="450" number="0.2" name="Happy Client" />
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.card}>
                        <ClientCard font={faTrophy} count="550" number="0.3" name="Completed Project" />
                    </div>
                </div>

            </div>
        </main>
    )
}

export default HappyClient