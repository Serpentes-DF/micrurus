import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
    const logoPath = process.env.NODE_ENV === 'development'
        ? '/LOGO-sem-frase-e-sem-fundo.png'
        : '/micrurus/LOGO-sem-frase-e-sem-fundo.png';
  return (
    <div className={styles.headerMain}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100vh"
        viewBox="0 0 1512 983"
        fill="none"
        preserveAspectRatio="none"
        className={styles.svgFullScreen}
      >
        <path
          d="M0 0H1512V823.654C1512 823.654 1065.79 981.245 767 982.985C459.842 984.774 0 823.654 0 823.654V0Z"
          fill="#22A389"
        />
      </svg>
      <h1 className={styles.titlePage}>
        MONITORAMENTO DE SERPENTES DISTRITO FEDERAL
      </h1>
      <Image
        className={styles.logoHeader}
        src={logoPath}
        width={406}
        height={400}
        alt="Logo Serpentes DF"
      />
    </div>
  );
}
