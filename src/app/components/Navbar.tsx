"use client"
import Link from "next/link";
import styles from "../page.module.css";
import { useState } from "react";

const Navbar = () =>{
      const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return(
        <div className={`${styles.navbar} ${isMenuOpen ? styles.active : ''}`}>
        <div className={styles.logo}>
          <h1>CareerIQ.</h1>
        </div>
        <div className={styles.menuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Features</a></li>
          <li><a href="">Pricing</a></li>
          <li><a href="">Docs</a></li>
        </ul>
        <div className={styles.buttons}>
          <div className={styles.button}>
            <div className={styles.bgBtn} style={{backgroundColor:"transparent"}}>
              <Link href="/login">Login</Link>
            </div>
          </div>
          <div className={styles.button}>
            <div className={styles.bgBtn}>
              <a href="">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    )

}

export default Navbar