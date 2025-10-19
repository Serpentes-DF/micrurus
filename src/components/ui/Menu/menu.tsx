"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./menu.module.css";
import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const logoPath = process.env.NODE_ENV === 'development'
      ? ""
      : "/micrurus";

  return (
    <div className={`${styles.menu} ${isOpen ? styles.active : ""}`}>
      <Link href="/">
      <Image
        className="logo"
        src={logoPath+"/logo-menu.png"}
        width={64}
        height={64}
        alt="Logo do Serpentes DF"
      />
      </Link>

      <div className={styles.menuMobile}>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={styles.buttonMenuMobile}
        >
          ☰
        </button>
 
        {isOpen && (
          <nav className={styles.navMobile}>
            <ul className={styles.navMobileLinks}>
              <li className={styles.navItem}>
                <Link href="/our-team">NOSSA EQUIPE</Link>
              </li>
              {/* <li className={styles.navItem}>
                <Link href="/events">NOSSOS EVENTOS</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/artigos">ARTIGOS</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/doe-agora">DOE AGORA</Link>
              </li> */}
              <li className={styles.navItem}>
                <Link href="/store">LOJA</Link>
              </li>
            </ul>

            <div className={styles.mainLang}>
              <button className={`${styles.langBtn} ${styles.active}`}>
                PT
              </button>
              <button className={styles.langBtn}>EN</button>
            </div>
          </nav>
        )}{" "}
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navLinks}>
          <li className={styles.navItem}>
            <Link href="/our-team">NOSSA EQUIPE</Link>
          </li>
          {/* <li className={styles.navItem}>
            <Link href="/eventos">NOSSOS EVENTOS</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/artigos">ARTIGOS</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/doe-agora">DOE AGORA</Link>
          </li> */}
          <li className={styles.navItem}>
            <Link href="/store">LOJA</Link>
          </li>
        </ul>

        <div className={styles.mainLang}>
          <button className={`${styles.langBtn} ${styles.active}`}>PT</button>
          <button className={styles.langBtn}>EN</button>
        </div>
      </nav>
    </div>
  );
}
