import style from "./about.module.css";

export default function About() {
  return (
    <div className={style.Main}>
      <h2 className={style.subTitle}>SOBRE O PROJETO</h2>
      <div className={style.paragraph}>
        <p className={style.Text}>
          O Projeto de Monitoramento de Serpentes do Distrito Federal surgiu em
          2023 com o objetivo de acompanhar a ocorrência e a distribuição das
          serpentes presentes no Distrito Federal. A iniciativa se baseia na
          ciência cidadã, buscando aproximar a população da produção científica
          e promover uma mudança na percepção sobre esses animais. Por meio do
          engajamento da comunidade, o projeto incentiva que as serpentes deixem
          de ser vistas apenas como animais temidos e passem a ser reconhecidas
          como organismos fascinantes, importantes e merecedores de respeito.
        </p>
        <p className={style.Text}>
          Além do monitoramento, o projeto possui um forte eixo de educação
          ambiental, voltado à divulgação de informações científicas acessíveis
          sobre biologia, ecologia, identificação e importância ecológica das
          serpentes. As ações educativas incluem a produção de conteúdos
          informativos, atividades de divulgação científica, participação em
          eventos, oficinas e exposições, buscando combater mitos, reduzir
          conflitos entre pessoas e serpentes e estimular atitudes mais
          responsáveis e seguras frente à fauna silvestre. O projeto conta com o
          apoio de pesquisadores e voluntários, tendo como principais pilares o
          monitoramento de serpentes e o desenvolvimento de ações contínuas de
          educação ambiental, contribuindo para a conservação da biodiversidade
          e para a construção de uma convivência mais harmoniosa entre pessoas e
          fauna silvestre no ambiente urbano. Este projeto faz parte da Coleção
          Zoológica da Universidade Católica de Brasília em parceria com o
          Laboratório de Fauna e Unidades de Conservação da Universidade de
          Brasília.
        </p>
      </div>
    </div>
  );
}
