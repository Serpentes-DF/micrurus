"use client";

import Image from "next/image";
import styles from "./profile-card.module.css";
import { useEffect, useState } from "react";

interface ProfileCardProps {
  name: string;
  foto?: string;
  profissao?: string;
  cargo?: number;
}

export default function ProfileCard({ profileType }: { profileType: number }) {
  const [profile, setProfile] = useState<ProfileCardProps[]>([]);

  useEffect(() => {
    async function carregarDados() {
      try {
        const res = await fetch("/integrantes.json");
        const data = await res.json();
        setProfile(data);
      } catch (erro) {
        console.error("Erro ao carregar dados:", erro);
      }
    }
    carregarDados();
  }, []);

  return (
    <>
      {profile
        .filter((pessoa) => pessoa.cargo === profileType)
        .map((pessoa, index) => (
          <div
            key={index}
            className={styles.card}
            style={{ position: "relative" }}
          >
            <Image
              className={styles.imagem}
              src={"./integrantes/" + pessoa.foto}
              width={250}
              height={250}
              alt={pessoa.name}
            />
            <div className={styles.groupText}>
              <p className={`${styles.textoBase} ${styles.nome}`}>
                {pessoa.name}
              </p>

              <p className={`${styles.textoBase} ${styles.profissao}`}>
                {pessoa.profissao}
              </p>
            </div>
          </div>
        ))}
    </>
  );
}
