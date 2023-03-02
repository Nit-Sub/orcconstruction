import React from 'react';
import styles from "@/styles/TeamCard.module.css";
import Image from 'next/image';
const TeamCard = ({image , name , post}) => {
  return (
   <>
            <div className={styles.card}>
                <Image src={image} className={styles.image}/>
                </div>
                <div className={styles.shape}>
                    <h3>
                        {name}
                    </h3>
                    <p>
                        {post}
                    </p>

                </div>
            
   </>
  )
}

export default TeamCard