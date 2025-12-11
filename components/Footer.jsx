"useClient"
import React from "react";
//import { useWindowWidth } from 'react-window-size-hooks';
import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.eredivisie}>
        <div className={styles.footerTitleWrapper}>
          <div>
            <Image src="/home/eredivisielogo_blue.png" width={100} height={0} alt="Eredivisie Logo" className={styles.logo} />
          </div>
          <div>KNVB Eredivisie 2025-2026</div>
        </div>
      </div>
      <div className={styles.colofon}>
        noudvandun&copy;webdevelopment
        </div>
    </div>
  );
};

export default Footer;
