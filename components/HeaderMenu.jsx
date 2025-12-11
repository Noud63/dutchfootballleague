import React from 'react'
import Link from 'next/link'
import styles from '../styles/HeaderMenu.module.css'

const HeaderMenu = () => {
  return (
    <div className={styles.links}>
    
                    <Link href="/" className={styles.link}>
                        <div>Home</div>
                     </Link>
    
                    <Link href="/uitslagen" className={styles.link}>
                        <div >Wedstrijden</div>
                    </Link>
    
                    <Link href="/recent" className={styles.link}> 
                        <div >Recent</div>
                    </Link>
    
                    <Link href='/stand' className={styles.link}>
                        <div >Stand</div>
                    </Link>
                    <Link href='/clubinfo' className={styles.link}>
                        <div >Clubs</div>
                    </Link>
    
    
                </div>
  )
}

export default HeaderMenu