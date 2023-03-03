import React from 'react';
import styles from "@/styles/OurTeam.module.css";
import TeamCard from './TeamCard';
import team from "@/public/static/teammember3.jpg"
import team1 from "@/public/static/teammember1.jpg"
import team2 from "@/public/static/teammember2.jpg"


const OurTeam = () => {
    return (
        <>
            <main className={styles.main}>
                <p className={styles.p} >Expert Worker</p>
                <h1 className={styles.h1}>Meet <span style={{ color: "orangered" }}> Our Team </span></h1>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <TeamCard image={team} name="Admam Norman" post="Ceo & Founder" />
                    </div>
                    <div className={styles.column}>
                        <TeamCard image={team1} name="Enrico Brown" post="Head of Sales" />
                    </div>
                    <div className={styles.column}>
                        <TeamCard image={team2} name="John" post="Lead Project Manager" />
                    </div>
                </div>
            </main>
        </>
    )
}

export default OurTeam