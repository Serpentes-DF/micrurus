import style from "./about.module.css";

export default function About() {
  return (
    <div className={style.Main}>
      <h2 className={style.subTitle}>SOBRE O PROJETO</h2>
      <div className={style.paragraph}>
      <p className={style.Text}>
        O projeto Serpentes do Distrito Federal é uma atividade de ciência cidadã, que tem como objetivo monitorar as Serpentes do DF através de registros da comunidade. Assim, buscamos novas ocorrências de espécies e outras variáveis ecológicas, como abundância e sazonalidade, para construir estratégias de conservação para esses animais. O projeto também visa melhorar a convivência dos moradores do Distrito Federal com as serpentes que vivem em nosso quadradinho através da educação ambiental.
      </p>
      <p className={style.Text}>
        Este projeto faz parte da Coleção Zoológica da Universidade Católica de Brasília em parceria com o Laboratório de Fauna e Unidades de Conservação da  Universidade de Brasília.
      </p>
      </div>
    </div>
  );
}
