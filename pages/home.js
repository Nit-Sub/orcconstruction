import styles from '@/styles/First.module.css'
import Head from 'next/head'
import Image from 'next/image'
import norc from '../public/static/logo.png'

const Home = () => {
  return (<>
    <Head>
        <title>NORC. Construction</title>
        {/* <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
        {/* <img src={norc} alt="text"/> */}
        <p>Architecture Design</p>
         </div>
         
      </main>
      <div>
      
      </div>
      
      </>
  )
}

export default Home