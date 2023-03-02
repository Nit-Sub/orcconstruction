import React from 'react';
import styles from "@/styles/BlogCard.module.css";
import Image from 'next/image';
const TeamCard = ({image , name }) => {
  return (
   <>
            <div className={styles.card}>
                <Image src={image} className={styles.image}/>
                </div>
                <div className={styles.shape}>
                    <h3 className={styles.h3}>
                        {name}
                    </h3>
                </div>
   </>
  )
}

export default TeamCard