"use client";

import Image from "next/image";
import styles from "./profile-card.module.css";
import { useEffect, useState } from "react";
import member from '../../../../public/integrantes.json'
interface ProfileCardProps {
  nome: string;
  foto?: string;
  profissao?: string;
  tipo_de_integrante?: string;
}

export default function ProfileCard({ profileType }: { profileType: string }) {
  const [profile, setProfile] = useState<ProfileCardProps[]>([]);

  useEffect(() => {
    async function carregarDados() {
      try {
        setProfile(member);
      } catch (erro) {
        console.error("Erro ao carregar dados:", erro);
      }
    }
    carregarDados();
  }, []);

  return (
    <>
      {profile
        .filter((pessoa) => pessoa.tipo_de_integrante === profileType)
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
              alt={pessoa.nome}
            />
            <div className={styles.groupText}>
              <p className={`${styles.textoBase} ${styles.nome}`}>
                {pessoa.nome}
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
