import React from 'react';
import styles from "@/styles/OurBlog.module.css";
import TeamCard from './Blogcard';
import team from "@/public/static/teammember3.jpg"
import team1 from "@/public/static/teammember1.jpg"
import team2 from "@/public/static/teammember2.jpg"


const OurTeam = () => {
    return (
        <>
            <main className={styles.main}>
                <p className={styles.p} >Latest News</p>
                <h1 className={styles.h1}>Our <span style={{ color: "orangered" }}> Blog </span></h1>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <TeamCard image={team} name="Construction Delivery Methods Training"  />
                    </div>
                    <div className={styles.column}>
                        <TeamCard image={team1} name="Modern Glass Building in Construction" />
                    </div>
                    <div className={styles.column}>
                        <TeamCard image={team2} name="Factory renovation architecture works"  />
                    </div>
                </div>
            </main>
            
        </>
    )
}

export default OurTeam