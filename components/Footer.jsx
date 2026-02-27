"useClient";
import React from "react";
import logo from "../images/eredivisie_logo.png"
import styles from "../styles/Footer.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.eredivisie}>
        <div className={styles.footerTitleWrapper}>
          <div>
            <Image
  src={logo}
  alt="Eredivisie Logo"
  className={styles.logo}
  priority
/>
          </div>
          <div>KNVB Eredivisie 2025-2026</div>
        </div>
      </div>
      <div className={styles.footerMenu}>
        <div className={styles.links}>
          <Link href="/" className={styles.link}>
            <div>Home</div>
          </Link>

          <Link href="/uitslagen" className={styles.link}>
            <div>Wedstrijden</div>
          </Link>

          <Link href="/recent" className={styles.link}>
            <div>Recent</div>
          </Link>

          <Link href="/stand" className={styles.link}>
            <div>Stand</div>
          </Link>
          <Link href="/clubinfo" className={styles.link}>
            <div>Clubs</div>
          </Link>
        </div>
      </div>
      <div className={styles.colofon}>noudvandun&copy;webdevelopment</div>
    </div>
  );
};

export default Footer;
