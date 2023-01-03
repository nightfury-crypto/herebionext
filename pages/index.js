import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  if (typeof window !== 'undefined') {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // on resize
    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
}
  return (
      <main className={styles.main}>
        <Layout />
        <div className={styles.home}>
          <div className={styles.mainstart}>
            <h1>HERE BIO</h1>
            <h4>It's a website where you can find some tools related to biology</h4>
            <span>
              <h5 className={styles.chipshow}>Select the service from the sidebar</h5>
            </span>
          </div>
        </div>
        <Footer />
      </main>
  )
}
