import Footer from "@/components/layout/footer/footer";
import GridCard from "@/components/layout/gridCard/gridCard";
import Menu from "@/components/ui/Menu/menu";
import Title from "@/components/ui/Title/title";

export default function ourTeam() {

  const membrosAtuais = "voluntario";
  const membrosAnteriores = "ex-voluntario";
  
  return (
    <div>
      <Menu />
      <Title title={"Nossa Equipe"} />
      <GridCard profileType={membrosAtuais} />
      <Title title={"Membros Anteriores"} />
       <GridCard profileType={membrosAnteriores} /> 
      <Footer />
    </div>
  );
}
