import Image from 'next/image';
import team1 from "../public/static/team1.jpg"
import team2 from "../public/static/team2.jpg"
import styles from '@/styles/Team.module.css'

function Team() {
    return (
        <div className={styles.row}>
            <div className={styles.column}>

                <Image width={450}src={team1} alt="Team 1" />
                <h4>Ceo and Founder</h4>
            </div>
            <div className={styles.column}>
                <Image width={450} src={team2} alt="Team 2" />
                <h4> Head of sales</h4>


            </div>
        </div>


    );
}

export default Team;