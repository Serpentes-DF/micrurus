import Image from "next/image";
import styles from "./registros.module.css";

export default function Registros() {
  return (
    <div className={styles.Main}>
      <div className={styles.Container}>
        <h2 className={styles.Title}> REGISTROS DOS SEGUIDORES</h2>
        <div className={styles.ImagemContainer}>
          <Image
            className={styles.Imagem}
            src={"./registros/registros_desktop.png"}
            fill
            alt={"Registros dos seguidores"}
          />
        </div>
        <p className={styles.Text}>
          Gostou desses registros? Tem muito mais lá no nosso Instagram! Dá uma
          olhada e aproveita pra mandar o seu também. Ver no Instagram 📷
        </p>
      </div>
    </div>
  );
}
