import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer: React.FC = () => {
  const logoPath = process.env.NODE_ENV === "development" ? "" : "/micrurus";
  return (
    <footer className={styles.footer}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1512 327"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svg}
      >
        <path
          d="M0 73.2091C0 73.2091 72.5 14.3091 329 0.920497C585.5 -12.4681 956.5 124.058 1134 159.399C1311.5 194.741 1512 136.991 1512 136.991V327H0V73.2091Z"
          fill="#22A389"
        />
      </svg>

      <div className={styles.containerInfo}>
        <div className={styles.contactInfo}>
          <div className={`${styles.inline} ${styles.inlineLocation}`}>
            <Image
              src={logoPath + "/icons/location.svg"}
              alt="Location"
              width={24}
              height={24}
            />
            <p>
              QS 07, Lote 01, Taguatinga Sul - Taguatinga, Brasília - DF,
              71966-700
            </p>
          </div>
          <div className={styles.inline}>
            <Image
              src={logoPath + "/icons/e-mail.svg"}
              alt="Mail"
              width={24}
              height={24}
            />
            <p>serpentesdf@gmail.com</p>
          </div>
        </div>

        <div className={styles.socialMedia}>
          <a
            href="https://www.instagram.com/serpentesdodf/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={logoPath + "/icons/instagram.svg"}
              alt="Ícone do Instagram"
              width={32}
              height={32}
            />
          </a>
          <a
            href="https://wa.me/556174022773"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={logoPath + "/icons/whatsapp.svg"}
              alt="Ícone do WhatsApp"
              width={32}
              height={32}
            />
          </a>
          <a
            href="https://www.inaturalist.org/projects/serpentes-do-distrito-federal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={logoPath + "/icons/inaturalist.svg"}
              alt="Ícone do iNaturalist"
              width={32}
              height={32}
            />
          </a>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>
          &copy; {new Date().getFullYear()} - Serpentes do DF. Free Software.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
