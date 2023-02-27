import React from 'react'
import styles from '@/styles/AboutFirm.module.css';
import Image from 'next/image';
import about from '@/public/static/about.jpg';
import sign from '@/public/static/sign.svg';

const AboutFirm = () => {
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <div className={styles.column}>
                    <p className={styles.p} >Construction Firm</p>
                    <h1 className={styles.h1}>About <span style={{ color: "orange" }}>norc</span>  </h1>
                    <p className={styles.paragraph}>Our company at libero tristique mattis. Su
                        spendisse potenti sed leonra main dignissim justo porta eget. Curabitur
                        luctus magna numsaton vivention esellentesue the miss tenis vitae mollie.</p>
                    <p className={styles.paragraph}>Curabitur luctus magna numsaton vivention esellentesue the mis awa vitan sedeonra magnain dignissim porta.</p>

                    <ul class={styles.ul}>
                                <li className={styles.li}>Our 25 years of experience.</li>
                            </ul> 
                            <ul class={styles.ul}>
                                <li className={styles.li}>100+ sucessfully executed projects.</li>
                            </ul>
                            <ul class={styles.ul}>
                                <li className={styles.li}>Exceptional work quality.</li>
                            </ul>
                            <hr className={styles.hr}/>
                            <div className='row'>
                                <div className='col-sm-2'>
                            <Image src={sign} alt='sign' width={80}/>
                            </div>
                            <div className='col-sm-4' >
                                <h7 className={styles.h7}>Adam Norman</h7>
                                <p style={{color:"grey"}}>CEO & Founder</p>
                            </div>
                            </div>                         
                </div>
                <div className={styles.column}>
                    <div className={styles.shape}>
                        <Image src={about} className={styles.image} />
                        <p className={styles.pshape}>
                            

                        </p>

                    </div>
                </div>

            </div>
        </main>
    )
}

export default AboutFirm